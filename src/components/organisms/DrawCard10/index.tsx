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
import DrawCard from '@src/components/atoms/DrawCard'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@src/components/organisms/SkillDescription'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useSquad from '@stores/Main'




const DrawCard10 = () => {

    return (
        <DrawCard10Container>
            {
                Array(10).fill(true).map((nikke, index) => {

                    return(
                        <DrawCard />
                        // <DrawCard style={{marginBottom: `${index * 5}px`}} />
                    )
                })
            }
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
