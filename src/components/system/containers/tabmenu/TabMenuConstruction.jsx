import React from 'react';
import AdminBorderContainer from '@components/admin/containers/AdminBoardContainer';

export default function TabMenuConstructionContainer() {
    return (
        <>
            <AdminBorderContainer title="1. 데이터베이스 정의서"></AdminBorderContainer>
             <AdminBorderContainer title="2. 테이블 정의서"></AdminBorderContainer>
             <AdminBorderContainer title="3. 컬럼 정의서"></AdminBorderContainer>
             <AdminBorderContainer title="4. ERD & 관계정의서"></AdminBorderContainer>
        </>
    );
}

