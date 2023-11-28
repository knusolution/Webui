import React, { useEffect, useState } from 'react';
import AdminHeaderContainer from '@components/admin/containers/AdminHeaderContainer'
import AdminSearchContainer from '@components/admin/containers/AdminSearchContainer';
import AdminBoardContainer from '@components/admin/containers/AdminBoardContainer';
import Sidebar from '@components/common/Sidebar';
import AdminArticleService from '@components/admin/containers/AdminArticleService';





export default function Admin() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        AdminArticleService.fetchArticles()
            .then(articleData => {
                setArticles(articleData.data);
            })
            .catch(error => console.error('Articles 요청 오류:', error));
    }, []);

    return (
        <>
            <AdminHeaderContainer></AdminHeaderContainer>
            <Sidebar></Sidebar>
            <AdminSearchContainer></AdminSearchContainer>
            <AdminBoardContainer title="[전체 게시판]" data={articles}></AdminBoardContainer>
        </>
    );
}

