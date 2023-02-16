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
// import DrawCard from '@src/components/atoms/DrawCard'
import { H2, H3, H4 } from '@src/components/atoms/Header'
// molecules
import SkillDescription from '@src/components/organisms/SkillDescription'
import DrawCard10 from '@src/components/organisms/DrawCard10'
// organisms
import Squad from '@src/components/organisms/Squad';
// stores
import useSquad from '@stores/Main'




const DrawPage = () => {


    return (
        <DrawContainer>
            <DrawCard10 />
        </DrawContainer>
    )
}
export default DrawPage;



const DrawContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
`
