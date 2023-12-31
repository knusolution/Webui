import React from 'react';
import PropTypes from 'prop-types';
import AdminBoardContainer from '@components/admin/containers/AdminBoardContainer';
import ApiService from '@components/axios/ApiService';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
        &.pageButton {
            background: none;
            border: none;
            color: black;
            cursor: pointer;
            padding: 5px 10px;
            margin: 0 5px;
            text-decoration: none;

            &:hover {
            text-decoration: underline;
            }

            &:disabled {
            color: grey;
            }
        }
    }
`;

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    const pageRangeDisplayed = 2;

    for (let i = Math.max(1, currentPage - pageRangeDisplayed); i <= Math.min(totalPages, currentPage + pageRangeDisplayed); i++) {
        pageNumbers.push(i);
    }

  // 마지막 페이지와 현재 페이지 그룹 사이의 구분자 추가
    if (currentPage + pageRangeDisplayed < totalPages) {
        pageNumbers.push('...'); // 구분자
        pageNumbers.push(totalPages); // 마지막 페이지
    }

    return (
        <PaginationContainer>
        {pageNumbers.map((page, index) => (
            page === '...' ? (
                <span key={index}>{page}</span>
            ) : (
            <button
                className="pageButton"
                key={page}
                onClick={() => onPageChange(page)}
                disabled={currentPage === page}
            >
            {page}
          </button>
        )
      ))}
    </PaginationContainer>
  );
};

function DetailCategoryBoard({ category, index }) {
    const [articles, setArticles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0); 

    React.useEffect(() => {
        ApiService.fetchArticles(category.detailCategoryId, currentPage)
            .then(articleData => {
                setArticles(articleData.articles);
                setTotalPages(articleData.allPage);
            })
            .catch(error => console.error('Articles 요청 오류:', error));
    }, [category.detailCategoryId, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <AdminBoardContainer title={`${index}. ${category.detailCategoryName}`} data={articles} />
            <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
            />
        </div>
        

    );
}


DetailCategoryBoard.propTypes = {
    category: PropTypes.shape({
        detailCategoryId: PropTypes.number.isRequired,
        detailCategoryName: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
};

export default function TabMenuContainer({ detailCategories }) {
    if (!detailCategories) {
        // detailCategories가 undefined 또는 null인 경우 처리
        return <div>Loading...</div>;
    }

    if (detailCategories.length === 0) {
        // `detailCategories`가 비어 있으면 로딩 메시지 또는 다른 UI 요소를 표시
        return <div>Loading...</div>;
    }

    return (
        <>
            {detailCategories.map((category, index) => (
                <DetailCategoryBoard key={category.detailCategoryId} category={category} index={index + 1} />
            ))}
        </>
    );
}

TabMenuContainer.propTypes = {
    detailCategories: PropTypes.arrayOf(PropTypes.shape({
        detailCategoryId: PropTypes.number,
        detailCategoryName: PropTypes.string
    }))
};
PaginationComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
