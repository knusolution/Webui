import React, { useState, useEffect} from 'react';
import AdminBorderContainer from '@components/admin/containers/AdminBoardContainer';
import SystemArticleService from '../SystemArticleService';

export default function TabMenuStandard({ baseCategoryId }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (baseCategoryId) {
            SystemArticleService.fetchDetailCategories(baseCategoryId)
                .then(detailData => {
                    // 여기에서 detailCategoryId를 추출하고 해당하는 articles 데이터를 요청
                    const detailCategoryId = detailData.detailCategories[0].detailCategoryId;
                    SystemArticleService.fetchArticles(detailCategoryId, 1) // 페이지 번호 예시: 1
                        .then(articleData => {
                            setArticles(articleData.articles);
                        })
                        .catch(error => console.error('Articles 요청 오류:', error));
                })
                .catch(error => {
                    console.error('Detail category 요청 오류:', error);
                });
        }
    }, [baseCategoryId]);

    return (
        <>
             <AdminBorderContainer title="1. DB 표준용어" data={articles} />
             <AdminBorderContainer title="2. DB 표준도메인" data={articles} />
             <AdminBorderContainer title="3. DB 표준단어" data={articles} />
             <AdminBorderContainer title="4. DB 표준코드" data={articles} />
        </>
    );
}

