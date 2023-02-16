import styled from 'styled-components'

import { nikkesObject } from '@src/datas/index'
import { NikkeInfo } from '@src/datas/interfaces';
// atoms
import Img from '@components/atoms/Image'
import Label from '@components/atoms/Label'
// images
import FirstBustImage from '@images/bust/1.png'
import SecondBustImage from '@images/bust/2.png'
import ThirdBustImage from '@images/bust/3.png'


interface SquadProps{
    squadNikkes: NikkeInfo[];
    onClickNikke?: (enName: string) => void;
}

const Squad = ({ squadNikkes, onClickNikke }: SquadProps) => {
    return (
        <SquadContainer>
            {
                Array(5).fill(false).map((_, index) => {

                    const nikke: NikkeInfo | Boolean = squadNikkes[index] ?? false

                    // nikke.bustType

                    return (
                        <NikkeWrap key={index} pointer={nikke ? true: false} onClick={() => nikke && onClickNikke?.(nikke?.enName)}>
                            <NikkeImageWrap>
                                <Img src={nikke?.fullBodyImage} width={"100px"} />
                                {
                                    nikke?.bustType &&
                                    <BustImageWrap>
                                        <Img src={replaceBustTypeImage(nikke?.bustType)} alt="bus Type" />
                                    </BustImageWrap>
                                }
                            </NikkeImageWrap>
                            <NikkeLabelWrap>
                                <Label pointer>{nikke?.krName}</Label>
                            </NikkeLabelWrap>
                        </NikkeWrap>
                    )
                })
            }
        </SquadContainer>
    )
}
export default Squad;


const replaceBustTypeImage = (bustType: number) => {
    switch(bustType){
        case 1: return FirstBustImage
        case 2: return SecondBustImage
        case 3: return ThirdBustImage
        default: return FirstBustImage
    }
}


const SquadContainer = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 120px;
    
    border-bottom: 1px solid #000;
    background-color: #F5F5F5;

    overflow: hidden;
`
type NikkeWrapProps= {
    pointer?: boolean;
}
const NikkeWrap = styled.div<NikkeWrapProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: ${({pointer}) => pointer && "pointer"};
`
const NikkeImageWrap = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 80px;
    max-width: 80px;
    height: 80px;

    border: 1px solid #D8D8D8;
    border-radius: 4px;
    background-color: #fff;

    overflow: hidden;
`
const BustImageWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    background-color: #2f353a;
`
const NikkeLabelWrap = styled.div`
    height: 20px;
`