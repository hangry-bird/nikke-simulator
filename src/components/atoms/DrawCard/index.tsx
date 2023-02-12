import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
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
    grade="SSR",
    image="",
    name="엠마",
    ...rest
}: DrawCardProps) => {
    return(
        <DrawCardContainer
            grade={grade}
            {...rest}
        >
            <ImageWrap>
                <Img src={EmmaFullBodyShot} alt={"draw card"} />
            </ImageWrap>
            <Label bold fs18 center>{name}</Label>
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
    
    /* border: ${({grade}) => grade === "R" && "1px solid #0b1bf8"};
    border: ${({grade}) => grade === "SR" && "1px solid #7a0bf8"};
    border: ${({grade}) => grade === "SSR" && "1px solid #f8a50b"}; */

    ${({grade}) => grade === "R" && css`
        /* border: 1px solid #0b1bf8; */
        box-shadow: 0px 0px 5px 1px #0b1bf8;
    `}
    /* border: 2px solid #D8D8D8; */
    background-color: #D8D8D8;
    /* box-shadow: 0px 0px 5px 1px #222222; */

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
        /* border: 1px solid #0b1bf8;
        box-shadow: 0px 0px 5px 1px #0b1bf8; */
        background: linear-gradient( to bottom, #fff, #0b1bf8 20%, #fff );
    `}
    ${({grade}) => grade === "SR" && css`
        background: linear-gradient( to bottom, #fff, #7a0bf8 20%, #fff );
    `}
    ${({grade}) => grade === "SSR" && css`
        background: linear-gradient( to bottom, #fff, #f8a50b 20%, #fff );
    `}

    /* background: ${({grade}) => grade === "R" && "linear-gradient( to bottom, #fff, #0b1bf8, #fff )"};
    background: ${({grade}) => grade === "SR" && "linear-gradient( to bottom, #fff, #7a0bf8, #fff )"};
    background: ${({grade}) => grade === "SSR" && "linear-gradient( to bottom, #fff, #f8a50b, #fff )"}; */
`
