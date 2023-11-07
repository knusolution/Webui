import React from 'react';
import Header from '@components/header/Header'
import Search from '@components/search/Search';
import Board from '@components/board/Board';




export default function Admin() {
    return (
        <>
            <Header></Header>
            <Search></Search>
            <Board></Board>
        </>
    );
}

