import styled from 'styled-components'

import { nikkesObject } from '@src/NikkeDatas/index'
import { NikkeInfo } from '@src/NikkeDatas/interfaces';
// images
import AR from '@images/weapon/ar.png'
import MG from '@images/weapon/mg.png'
import RL from '@images/weapon/rl.png'
import SG from '@images/weapon/sg.png'
import SMG from '@images/weapon/smg.png'
import SR from '@images/weapon/sr.png'
// atoms
import Img from '@components/atoms/Image'
import Label from '@components/atoms/Label'
import Span from '@components/atoms/Span'
import { H2, H3 } from '@src/components/atoms/Header'
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
                        skills=[],
                        attack
                    } = nikke;

                    return (
                        <SkillDescriptionArea key={enName}>
                            <H2>{krName}</H2>

                            <AttackContainer>
                                <TitleContainer>
                                    <SkillOrderWrap>
                                        <H3 fs14>{attack.operation_type}</H3>
                                    </SkillOrderWrap>
                                    <Label>{attack.gun_type}</Label>
                                </TitleContainer>
                                <AttackArea>
                                    <GunImageWrap>
                                        <Img src={replaceGunImageType(attack.gun_type)} alt="gun type image" />
                                    </GunImageWrap>
                                    <GunExplanationContainer>
                                        <GunExplanationWrap>
                                            <GunExplanationTitle><Label bold fs12>최대 장탄수</Label></GunExplanationTitle>
                                            <GunExplanationContent><Span bold fs12 color={"#FFF"}>{attack.max_shots}</Span></GunExplanationContent>
                                        </GunExplanationWrap>
                                        <GunExplanationWrap>
                                            <GunExplanationTitle><Label bold fs12>재장전 시간</Label></GunExplanationTitle>
                                            <GunExplanationContent><Span bold fs12 color={"#FFF"}>{attack.reload_time}초</Span></GunExplanationContent>
                                        </GunExplanationWrap>
                                        <GunExplanationWrap>
                                            <GunExplanationTitle><Label bold fs12>조작 타입</Label></GunExplanationTitle>
                                            <GunExplanationContent><Span bold fs12 color={"#FFF"}>{attack.operation_type}</Span></GunExplanationContent>
                                        </GunExplanationWrap>
                                    </GunExplanationContainer>
                                </AttackArea>
                                <ContentContainer>
                                    <SkillDetailWrap>
                                        <P bold fs14>■ {attack.activation_condition}</P>
                                        { attack.description.map((descr, index) => <P key={index} bold fs14 color={"#33ABE7"}>{descr}</P>) }
                                    </SkillDetailWrap>
                                </ContentContainer>
                            </AttackContainer>
                            {
                                skills.map((skill, index) => {
                                    return (
                                        <SkillContainer key={index}>
                                            <TitleContainer>
                                                <SkillOrderWrap>
                                                    <H3 fs14>{replaceSkillType(skill.order_type)}</H3>
                                                </SkillOrderWrap>
                                                <Label>{skill.name}</Label>
                                            </TitleContainer>
                                            <ContentContainer>
                                                <BustTypeWrap>
                                                    <Span fs12 color={"#B3B3B3"}>{skill.type}</Span>
                                                    {
                                                        skill.cooldown_time &&
                                                        <Span fs12 color={"#B3B3B3"}>재사용 시간 {skill.cooldown_time}초</Span>
                                                    }
                                                    
                                                </BustTypeWrap>
                                                {
                                                    skill.detail.map((skill, index: number) => {
                                                        return (
                                                            <SkillDetailWrap key={index}>
                                                                <>
                                                                    <P bold fs14>■ {skill.activation_condition}</P>
                                                                    {
                                                                        skill.description.map((descr, index) => {
                                                                            return (
                                                                                <P key={index} bold fs14 color={"#33ABE7"}>{descr}</P>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                            </SkillDetailWrap>
                                                        )
                                                    })
                                                }
                                            </ContentContainer>
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


const replaceGunImageType = (gunType: string) => {
   switch(gunType){
    case "소총": return AR;
    case "머신건": return MG;
    case "런처": return RL;
    case "샷건": return SG;
    case "저격소총": return SMG;
    case "기관단총": return SR;
    default: return AR
   }
}

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
        /* background-color: red; */
        /* padding-top: 12px; */
    }

    &:not(:last-of-type){
        padding-bottom: 12px;
        /* padding: 0 0 12px; */
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
const TitleContainer = styled.div`
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
const ContentContainer = styled.div`
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
const AttackContainer = styled.div`
    margin: 8px 0;
`
const AttackArea = styled.div`
    display: flex;

    width: 100%;
    height: auto;
    margin-top: 8px;
`
const GunImageWrap = styled.div`
    width: 60px;
    margin: 0 8px;
`
const GunExplanationContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    /* border: 1px solid red; */
`
const GunExplanationWrap = styled.div`
    display: flex;

    &:not(:last-of-type){
        margin-bottom: 4px;
    }
`
const GunExplanationTitle = styled.div`
    display: flex;
    align-items: center;

    width: 70%;
    padding-left: 12px;

    border-radius: 4px 0 0 4px;
    background-color: #F2F2F2;
`
const GunExplanationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30%;

    border-radius: 0 4px 4px 0;
    background-color: #A2A2A2;
`