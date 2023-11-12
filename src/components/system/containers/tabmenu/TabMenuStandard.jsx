import React from 'react';
import AdminBorderContainer from '@components/admin/containers/AdminBoardContainer';


export default function TabMenuStandard() {
    return (
        <>
             <AdminBorderContainer title="1. DB 표준용어"></AdminBorderContainer>
             <AdminBorderContainer title="2. DB 표준도메인"></AdminBorderContainer>
             <AdminBorderContainer title="3. DB 표준단어"></AdminBorderContainer>
             <AdminBorderContainer title="4. DB 표준코드"></AdminBorderContainer>
        </>
    );
}

