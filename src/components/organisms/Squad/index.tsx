import styled from 'styled-components'

import { nikkesObject } from '@src/NikkeDatas/index'
import { NikkeInfo } from '@src/NikkeDatas/interfaces';
// atoms
import Img from '@components/atoms/Image'
import Label from '@components/atoms/Label'


interface SquadProps{
    squadNikkes: NikkeInfo[]
}

const Squad = ({ squadNikkes }: SquadProps) => {
    return (
        <SquadContainer>
            {
                Array(5).fill(false).map((_, index) => {

                    const nikke: NikkeInfo | Boolean = squadNikkes[index] ?? false

                    return (
                        <NikkeWrap key={index}>
                            <NikkeImageWrap>
                                <Img src={nikke?.fullBodyImage} width={"100px"} />
                            </NikkeImageWrap>
                            <NikkeLabelWrap>
                                <Label>{nikke?.krName}</Label>
                            </NikkeLabelWrap>
                        </NikkeWrap>
                    )
                })
            }
        </SquadContainer>
    )
}
export default Squad;


const SquadContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 100px;
    
    border: 1px solid red;
    background-color: #F5F5F5;

    overflow: hidden;
`
const NikkeWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`
const NikkeImageWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 60px;
    height: 60px;
    
    border: 1px solid #D8D8D8;
    border-radius: 4px;

    overflow: hidden;
`
const NikkeLabelWrap = styled.div`
    height: 20px;
    
`