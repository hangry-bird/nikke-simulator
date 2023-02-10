import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import nikkeList from '@src/Nikkess/index';
import { NikkeInfo } from '@src/Nikkess/interfaces';

// atoms
import Portrait from '@src/components/atoms/Portrait'
import Img from '@src/components/atoms/Image'
// stores
import useCounter from '@stores/Main'


const MainPage = () => {
    const { squadNikkes, popNikke, removeNikke } = useCounter();

    const handleNikkeClick = (enName: string) => {
        if(squadNikkes.has(enName)){
            removeNikke(enName)
        }
        else{
            popNikke(enName)
        }
    }

    useEffect(() => {
        console.log(squadNikkes)
    }, [squadNikkes])

    return (
        <MainContainer>

            <NikkeSelection>
                <SquadContainer>

                </SquadContainer>

                <NikkeListContainer>
                    <PopulateNikkes
                        nikkes={nikkeList}
                        onClick={(enName: string) => handleNikkeClick(enName)}
                    />
                </NikkeListContainer>
            </NikkeSelection>

            <SkillDescriptionContainer>

            </SkillDescriptionContainer>
        </MainContainer>
    )
}
export default MainPage;


type NikkeProps = {
    nikkes: NikkeInfo[];
    onClick: (enName: string) => void;
}

const PopulateNikkes: React.FC<NikkeProps> = ({ nikkes, onClick }) => {
    return (
        <>
            {
                nikkes.map(nikke => {
                    return (
                        <Portrait
                            key={nikke.enName}
                            onClick={() => onClick(nikke.enName)}
                        >
                            <label>{nikke.krName}</label>
                            <Img src={nikke.fullBodyImage} alt="asd" />
                        </Portrait>
                    )
                })
            }
        </>
    );
};


const MainContainer = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
`
const NikkeSelection = styled.div`
    width: 60%;
    height: 100%;
`
const SkillDescriptionContainer = styled.div`
    width: 40%;
    height: 100%;
`
const SquadContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    height: 100px;
    
    border: 1px solid red;
    background-color: #F5F5F5;

    overflow: hidden;
`
const NikkeListContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    height: auto;
    
    border: 1px solid red;
    background-color: #F5F5F5;

    overflow: hidden;
`