import React from 'react';
import AdminHeaderContainer from '@components/admin/containers/AdminHeaderContainer'
import AdminSearchContainer from '@components/admin/containers/AdminSearchContainer';
import AdminBoardContainer from '@components/admin/containers/AdminBoardContainer';






export default function Admin() {
    return (
        <>
            <AdminHeaderContainer></AdminHeaderContainer>
            <AdminSearchContainer></AdminSearchContainer>
            <AdminBoardContainer></AdminBoardContainer>
        </>
    );
}

