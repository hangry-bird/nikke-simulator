import styled from 'styled-components'

import { nikkesObject } from '@src/NikkeDatas/index'
import { NikkeInfo } from '@src/NikkeDatas/interfaces';
// atoms
import Img from '@components/atoms/Image'
import Label from '@components/atoms/Label'
import Span from '@components/atoms/Span'
import { H2, H3, H4 } from '@src/components/atoms/Header'
import P from '@components/atoms/P'


interface SquadProps{
    nikkes: NikkeInfo[]
}

const SkillDescription = ({ nikkes }: SquadProps) => {
    return (
        <>
            {
                nikkes.map(nikke => {
                    const {
                        enName,
                        krName,
                        skills=[]
                    } = nikke;

                    return (
                        <SkillDescriptionArea key={enName}>
                            <H2>{krName}</H2>
                            {
                                skills.map(skill => {
                                    return (
                                        <SkillContainer>
                                            <SkillTitleContainer>
                                                <SkillOrderWrap>
                                                    <H3 fs14>{replaceSkillType(skill.skill_order_type)}</H3>
                                                </SkillOrderWrap>
                                                <Label>{skill.skill_name}</Label>
                                            </SkillTitleContainer>
                                            <SkillContentContainer>
                                                <BustTypeWrap>
                                                    <Span fs12 color={"#B3B3B3"}>{skill.skill_type === "passive" ? "패시브" : "액티브"}</Span>
                                                    {
                                                        skill.cooldown_time &&
                                                        <Span fs12 color={"#B3B3B3"}>재사용 시간 {skill.cooldown_time}초</Span>
                                                    }
                                                    
                                                </BustTypeWrap>
                                                {
                                                    skill.skill_detail.map((skill, index: number) => {
                                                        return (
                                                            <SkillDetailWrap key={index}>
                                                                <>
                                                                    <P bold fs14>■ {skill.skill_activation_condition}</P>
                                                                    {
                                                                        skill.skill_description.map(descr => {
                                                                            return (
                                                                                <P bold fs14 color={"#33ABE7"}>{descr}</P>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                            </SkillDetailWrap>
                                                        )
                                                    })
                                                }
                                            </SkillContentContainer>
                                        </SkillContainer>
                                    )
                                })
                            }
                        </SkillDescriptionArea>
                    )
                })
            }
            </>
    )
}
export default SkillDescription;


const replaceSkillType = (skillType: "one" | "two" | "bust") => {
    if(skillType === "one")
        return "스킬1"
    else if(skillType === "two")
        return "스킬2"
    else if(skillType === "bust")
        return "버스트 스킬"
    else
        return ""
}


const SkillDescriptionArea = styled.div`
    &:not(:first-of-type){
        padding-top: 12px;
    }

    &:not(:last-of-type){
        padding: 0 0 12px;
        /* border-bottom: 1px solid #F2F2F2; */
    }
    > H2{
        margin-bottom: 6px;

        text-align: center;
        border-radius: 12px;
        /* border-bottom: 1px solid #F2F2F2; */
    }
`
const SkillContainer = styled.div`

    &:not(:last-of-type){
        margin-bottom: 12px;
    }
    
`
const SkillDetailWrap = styled.div`
    /* padding: 4px 0; */
    ${P}{
        padding: 2px 0;
    }
`
const SkillTitleContainer = styled.div`
    display: flex;
    align-items: center;
`
const SkillOrderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 20px;
    border-radius: 16px;
    background-color: #F2F2F2;
    margin-right: 12px;
`
const SkillContentContainer = styled.div`
    padding: 4px 12px;
    margin-top: 6px;

    border-radius: 4px;
    background-color: #F2F2F2;
`
const BustTypeWrap = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: auto;
    border-bottom: 1px solid #DBDBDB;
`