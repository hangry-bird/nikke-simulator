import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NikkeSquad from '@src/pages/NikkeSquad/index'


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NikkeSquad />} />
            </Routes>
        </BrowserRouter>
    );
};


export default Router;