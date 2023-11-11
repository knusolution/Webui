import React from 'react';
import Header from '@components/admin/containers/AdminHeaderContainer'
import Search from '@components/admin/containers/AdminSearchContainer';
import Board from '@components/admin/containers/AdminBoardContainer';






export default function Admin() {
    return (
        <>
            <Header></Header>
            <Search></Search>
            <Board></Board>
        </>
    );
}

