import React from 'react';
import PropTypes from 'prop-types';
import AdminBoardContainer from '@components/admin/containers/AdminBoardContainer';
import SystemArticleService from '../SystemArticleService';

function DetailCategoryBoard({ category, index }) {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        SystemArticleService.fetchArticles(category.detailCategoryId, 1) // 임시 페이지 번호: 1
            .then(articleData => {
                setArticles(articleData.articles);
            })
            .catch(error => console.error('Articles 요청 오류:', error));
    }, [category.detailCategoryId]);

    return (
        <AdminBoardContainer title={`${index}. ${category.detailCategoryName}`} data={articles} />
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
