import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Toggle from 'react-toggle'

// import "react-toggle/style.css"

import nikkeList from '@src/datas/index';
import { NikkeInfo } from '@src/datas/interfaces';

// atoms
import Portrait from '@src/components/atoms/Portrait'
import Img from '@src/components/atoms/Image'
import Label from '@src/components/atoms/Label'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@src/components/organisms/SkillDescription'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useSquad from '@stores/Main'


type BustFilterType = 0 | 1 | 2 | 3;

const NikkeSquadPage = () => {

    // const [isToggle, setIsToggle] = useState(false)

    const { squadNikkes, addNikke, deleteNikke } = useSquad();

    const [bustFilter, setBustFilter] = useState<BustFilterType>(0);

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
            squadNikkes.length < 5 && addNikke(nikke)
        }
    }

    const handleSquadRemoveSquad = (enName: string) => {
        const hasNikkeIndex = squadNikkes.findIndex(squadNikke => squadNikke.enName === enName)
        deleteNikke(hasNikkeIndex)
    }

    const handleClickBustTypeFilter = (bustType: BustFilterType) => {
        if(bustFilter === bustType){
            setBustFilter(0)
        }
        else{
            setBustFilter(bustType)
        }
    }

    const bustTypeStyled = (bustType: BustFilterType) => {
        return {
                border: bustFilter === bustType ? "2px solid #808080" : "",
                backgroundColor: bustFilter === bustType ? "#FFF" : "",
                fontWeight: bustFilter === bustType ? "700" : "",
            }
        }

    return (
        <MainContainer>

            <NikkeSelection>
                <Squad 
                    squadNikkes={squadNikkes}
                    onClickNikke={handleSquadRemoveSquad}
                />

                <NikkeListContainer>
                    <BustFilterWrap>
                        <Label 
                            style={bustTypeStyled(1)}
                            onClick={() => handleClickBustTypeFilter(1)}>I</Label>
                        <Label 
                            style={bustTypeStyled(2)}
                            onClick={() => handleClickBustTypeFilter(2)}>II</Label>
                        <Label 
                            style={bustTypeStyled(3)}
                            onClick={() => handleClickBustTypeFilter(3)}>III</Label>
                    </BustFilterWrap>

                    <PopulateNikkes
                        nikkes={nikkeList}
                        squadNikkes={squadNikkes}
                        bustFilter={bustFilter}
                        onClick={(nikke: NikkeInfo) => handleNikkeClick(nikke)}
                    />
                </NikkeListContainer>
            </NikkeSelection>

            <SkillDescriptionContainer>

                {/* <Toggle
                    // defaultChecked={true}
                    icons={false}
                    onChange={() => setIsToggle(prev => !prev)} 
                /> */}

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
    squadNikkes: NikkeInfo[];
    bustFilter: 0 | 1 | 2 | 3;
    onClick: (nikke: NikkeInfo) => void;
}

const PopulateNikkes: React.FC<NikkeProps> = ({ nikkes, squadNikkes, bustFilter, onClick }) => {

    // 이름 오름차순 정렬
    nikkes = nikkes.sort((a, b) => {
        if (a.grade > b.grade) return -1;
        if (a.grade < b.grade) return 1;
        return 0;
      });

    return (
        <>
            {
                nikkes.map(nikke => {
                    const hasNikkeIndex = squadNikkes.findIndex(squadNikke => squadNikke.enName === nikke.enName)

                    if(bustFilter !== 0 && nikke.bustType !== bustFilter){
                        return(<></>)
                    }

                    return (
                        <Portrait
                            key={nikke.enName}
                            onClick={() => onClick(nikke)}
                        >
                            <Label bold>{nikke.krName}</Label>
                            <Img src={nikke.fullBodyImage} alt={`${nikke.enName} 이미지`} />
                            {
                                hasNikkeIndex >= 0 &&
                                <PortraitActiveWrap>
                                    <PortraitActive />
                                </PortraitActiveWrap>
                            }
                            
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
    display: flex;
    flex-direction: column;

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
const BustFilterWrap = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: auto;
    /* margin-top: 5px; */
    padding: 8px;

    background-color: #F5F5F5;

    ${Label}{
        width: 24px;
        height: 24px;
        margin: 0 4px;
        border: 1px solid #808080;
        border-radius: 4px;
        /* background-color: #FFF; */
        text-align: center;
        cursor: pointer;
    }
`
const NikkeListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: auto;
    /* height: auto; */
    height: 100%;

    background-color: #F5F5F5;

    overflow: auto;

    & > div:not(:first-of-type){
        background-color: #fff;
        margin: 8px 8px;
    }
`
const PortraitActiveWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border: 4px solid #00A9FA;
`
const PortraitActive = styled.div`
    width: 100%;
    height: 100%;

    opacity: 0.2;
    background-color: blue;
`