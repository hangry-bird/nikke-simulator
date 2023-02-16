import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'

import "react-toggle/style.css"

import nikkeList from '@src/datas/index';
import { NikkeInfo, NikkeInfo_Light } from '@src/datas/interfaces';

// atoms
import Portrait from '@src/components/atoms/Portrait'
import Img from '@src/components/atoms/Image'
import Label from '@src/components/atoms/Label'
import DrawCard from '@src/components/atoms/DrawCard'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@src/components/organisms/SkillDescription'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useDraw from '@stores/Draw'



interface DrawCard10Props {
    populateDrawList: NikkeInfo_Light[]
}
const DrawCard10 = ({ populateDrawList }: DrawCard10Props) => {
    // const { randomDraw, setRandomDraw } = useDraw();
    // console.log(populateDrawList)
    return (
        <DrawCard10Container>
            <DrawCard10Wrap>
            {
                populateDrawList.map((nikke, index) => {
                    // randomDraw[index]
                    console.log(nikke)
                    return(
                        <DrawCard 
                            key={index}
                            grade={nikke.grade}
                            fullBodyImage={nikke.fullBodyImage}
                            krName={nikke.krName}
                            company={nikke.company}
                        />
                        // <DrawCard style={{marginBottom: `${index * 5}px`}} />
                    )
                })
            }
            </DrawCard10Wrap>
        </DrawCard10Container>
    )
}
export default DrawCard10;

const DrawCard10Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 640px;
    min-width: 640px;
    height: auto;

`
const DrawCard10Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: auto;
    min-width: 640px;
    height: auto;
    min-height: 490px;
    > div {
        margin: 0 4px;
    }
    > div:nth-child(-n+5){
        margin-bottom: 50px;
    }
    > div:nth-child(1){ top: 0; }
    > div:nth-child(2){ top: -10px; }
    > div:nth-child(3){ top: -20px; }
    > div:nth-child(4){ top: -30px; }
    > div:nth-child(5){ top: -40px; }
    > div:nth-child(6){ top: 0; }
    > div:nth-child(7){ top: -10px; }
    > div:nth-child(8){ top: -20px; }
    > div:nth-child(9){ top: -30px; }
    > div:nth-child(10){ top: -40px; }
`
