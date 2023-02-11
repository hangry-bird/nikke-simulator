import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import nikkeList from '@src/NikkeDatas/index';
import { NikkeInfo } from '@src/NikkeDatas/interfaces';

// atoms
import Portrait from '@src/components/atoms/Portrait'
import Img from '@src/components/atoms/Image'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@components/molecules/SkillDescription'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useSquad from '@stores/Main'


const NikkeSquadPage = () => {
    const { squadNikkes, addNikke, deleteNikke } = useSquad();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => { document.body.style.overflow = "auto"; }
    }, [])

    const handleNikkeClick = (nikke: NikkeInfo) => {
        const hasNikkeIndex = squadNikkes.findIndex(squadNikke => squadNikke.enName === nikke.enName)
        // has Nikke
        if(hasNikkeIndex >= 0){
            deleteNikke(hasNikkeIndex)
        }
        else{
            addNikke(nikke)
        }
    }


    return (
        <MainContainer>

            <NikkeSelection>
                <Squad 
                    squadNikkes={squadNikkes}
                />

                <NikkeListContainer>
                    <PopulateNikkes
                        nikkes={nikkeList}
                        onClick={(nikke: NikkeInfo) => handleNikkeClick(nikke)}
                    />
                </NikkeListContainer>
            </NikkeSelection>

            <SkillDescriptionContainer>
                <SkillDescription 
                    nikkes={squadNikkes}
                />
            </SkillDescriptionContainer>
        </MainContainer>
    )
}
export default NikkeSquadPage;


type NikkeProps = {
    nikkes: NikkeInfo[];
    onClick: (nikke: NikkeInfo) => void;
}

const PopulateNikkes: React.FC<NikkeProps> = ({ nikkes, onClick }) => {
    return (
        <>
            {
                nikkes.map(nikke => {
                    return (
                        <Portrait
                            key={nikke.enName}
                            onClick={() => onClick(nikke)}
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
    padding: 16px;

    border-left: 1px solid #000;
    background-color: #fff;
    overflow: auto;
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