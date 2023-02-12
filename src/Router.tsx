import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNav from '@components/organisms/TopNav'
// page
import NikkeSquad from '@src/pages/NikkeSquad/index'
import Draw from '@src/pages/Draw/index'


const Router: React.FC = () => {
    return (
        <ContentContainer>
            <BrowserRouter>
                <TopNav />

                <Routes>
                    <Route path="/" element={<NikkeSquad />} />
                    <Route path="/draw" element={<Draw />} />
                </Routes>
            </BrowserRouter>
        </ContentContainer>
    );
};
export default Router;


const ContentContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
    padding-top: 50px;
`