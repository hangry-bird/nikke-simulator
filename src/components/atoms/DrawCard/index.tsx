import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { NikkeInfo, NikkeInfo_Light } from '@src/datas/interfaces';
import Img from '@src/components/atoms/Image'
import Label from '@src/components/atoms/Label'
// images
import EmmaFullBodyShot from '@images/nikke/fullBody/emma.png'


type DrawCardProps = {
    grade?: 'SSR' | 'SR' | 'R';
    image?: string;
    name?: string;
    style?: object;
}

const DrawCard = ({ 
    grade,
    fullBodyImage,
    krName,
    company
}: NikkeInfo_Light) => {
    return(
        <DrawCardContainer
            grade={grade}
        >
            <ImageWrap>
                <Img src={fullBodyImage} alt={`${krName} image`} />
            </ImageWrap>
            <Label bold fs18 center>{krName}</Label>
            <BackgroundShadow grade={grade} />
        </DrawCardContainer>
    )
}

export default DrawCard;


const DrawCardContainer = styled.div<DrawCardProps>`
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;

    width: 120px;
    min-width: 120px;
    height: 220px;
    
    ${({grade}) => grade === "SSR" && css`
        box-shadow: 0px 0px 5px 1px #f8a50b;
    `}
    ${({grade}) => grade === "SR" && css`
        box-shadow: 0px 0px 5px 1px #7a0bf8;
    `}
    ${({grade}) => grade === "R" && css`
        box-shadow: 0px 0px 5px 1px #0b1bf8;
    `}
    background-color: #D8D8D8;
    cursor: pointer;
`


const ImageWrap = styled.div`
    width: 120px;
    height: 220px;
    background-color: #E2E2E2;

    overflow: hidden;
`

const BackgroundShadow = styled.div<DrawCardProps>`
    z-index: -1;
    position: absolute;
    top: -30px;
    left: 0;

    width: 120px;
    height: 260px;

    ${({grade}) => grade === "R" && css`
        background: linear-gradient( to bottom, #fff, #0b1bf8 20%, #fff );
    `}
    ${({grade}) => grade === "SR" && css`
        background: linear-gradient( to bottom, #fff, #7a0bf8 20%, #fff );
    `}
    ${({grade}) => grade === "SSR" && css`
        background: linear-gradient( to bottom, #fff, #f8a50b 20%, #fff );
    `}
`
