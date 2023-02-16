import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'

import "react-toggle/style.css"

import nikkeList from '@src/datas/index';
import { NikkeInfo } from '@src/datas/interfaces';

// atoms
import Portrait from '@src/components/atoms/Portrait'
import Img from '@src/components/atoms/Image'
import Label from '@src/components/atoms/Label'
import Button from '@src/components/atoms/Button'
// import DrawCard from '@src/components/atoms/DrawCard'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@src/components/organisms/SkillDescription'
import DrawCard10 from '@src/components/organisms/DrawCard10'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useDraw from '@stores/Draw'


const DrawPage = () => {
    const { populateDrawList, setRandomDraw, setTenRandomDraw } = useDraw();

    return (
        <DrawContainer>
            <DrawCard10 
                populateDrawList={populateDrawList}
            />
            <DrawButtonContainer>
                <DrawButton 
                    backgroundColor='#888888'
                    onClick={setRandomDraw}
                >1회 모집</DrawButton>
                <DrawButton 
                    backgroundColor='#222222'
                    onClick={setTenRandomDraw}
                >10회 모집</DrawButton>
            </DrawButtonContainer>
        </DrawContainer>
    )
}
export default DrawPage;



const DrawContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
`
const DrawButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: auto;
    margin-top: 30px;
    & > :first-child{
        margin-right: 20px;
    }
`
type DrawButtonProps = {
    backgroundColor: string;
}
const DrawButton = styled.button<DrawButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 40px;

    color: #FFF;
    font-size: 16px;
    border: none;
    background-color:${({backgroundColor}) => backgroundColor};
    cursor: pointer;
`
