import React from 'react';
import AdminBorderContainer from '@components/admin/containers/AdminBoardContainer';

export default function TabMenuDiagnostic () {
    return (
        <>
            <AdminBorderContainer title="1. 구조진단 보고서"></AdminBorderContainer>
             <AdminBorderContainer title="2. 표준진단 보고서"></AdminBorderContainer>
             <AdminBorderContainer title="3. 값진단 보고서"></AdminBorderContainer>
             <AdminBorderContainer title="4. 업무규칙 정의서"></AdminBorderContainer>
        </>
    );
}

