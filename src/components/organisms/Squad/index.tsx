import styled from 'styled-components'

import { nikkesObject } from '@src/NikkeDatas/index'
import { NikkeInfo } from '@src/NikkeDatas/interfaces';
// atoms
import Img from '@components/atoms/Image'
import Label from '@components/atoms/Label'


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

                    return (
                        <NikkeWrap key={index} pointer={nikke ? true: false} onClick={() => nikke && onClickNikke?.(nikke?.enName)}>
                            <NikkeImageWrap>
                                <Img src={nikke?.fullBodyImage} width={"100px"} />
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


const SquadContainer = styled.div`
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
const NikkeLabelWrap = styled.div`
    height: 20px;
`