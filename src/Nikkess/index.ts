import { NikkeInfo } from './interfaces'
// images
import RapiFullBodyShot from '@images/nikke/fullBody/rapi.png'
import EmmaFullBodyShot from '@images/nikke/fullBody/emma.png'


export const rapi: NikkeInfo = {
    enName: "rapi",
    krName: "라피",
    bustType: 3,
    fullBodyImage: RapiFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1,
        operation_type: "일반형"
    },
    skill1: {
        skill_type: "passive",
        skill_name: "포메이션 F.F",
        skill_detail: [
            {
                skill_activation_condition: "20회 피격 시 자신에게",
                skill_description: ["[공격력 21.81%▲] [20초 유지]"]
            }
        ]
    },
    skill2: {
        skill_type: "active",
        skill_name: "미사일",
        cooldown_time: 20,
        skill_detail: [
            {
                skill_activation_condition: "공격력이 가장 높은 적 1기에게",
                skill_description: ["[공격력 657.72% 대미지]"]
            },
            {
                skill_activation_condition: "자신에게",
                skill_description: ["[공격력 60.75% ▲][10초 유지]"]
            }
        ]
    },
    skill3: {
        skill_type: "active",
        skill_name: "다탄두 미사일",
        cooldown_time: 40,
        skill_detail: [
            {
                skill_activation_condition: "공격력이 가장 높은 적 1기에게",
                skill_description: ["[공격력 657.72% 대미지]"]
            },
            {
                skill_activation_condition: "자신에게",
                skill_description: ["[공격력 60.75% ▲][10초 유지]"]
            }
        ]
    }
}

export const emma: NikkeInfo = {
    enName: "emma",
    krName: "엠마",
    bustType: 1,
    fullBodyImage: EmmaFullBodyShot,
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2.5,
        operation_type: "일반형"
    },
    skill1: {
        skill_type: "passive",
        skill_name: "치어리딩",
        skill_detail: [
            {
                skill_activation_condition: "피격 시 5% 확률로 아군 전체에게",
                skill_description: ["[시전자 최대 체력 비례 10.77% 회복]"]
            }
        ]
    },
    skill2: {
        skill_type: "passive",
        skill_name: "템프테이션",
        skill_detail: [
            {
                skill_activation_condition: "자신의 체력이 90% 이상일 때 한하여 아군 전체에게",
                skill_description: ["[체력 회복량 13.33% ▲] [지속]"]
            }
        ]
    },
    skill3: {
        skill_type: "active",
        skill_name: "알트루이즘",
        cooldown_time: 40,
        skill_detail: [
            {
                skill_activation_condition: "아군 전체에게",
                skill_description: ["[시전자 최대 체력 비례 39.6% 회복]", "[공격 대미지 비례 39.6% 회복] [5초 유지]"]
            }
        ]
    }
}




const nikkes: NikkeInfo[] =
    [
        rapi,
        emma
    ]
export default nikkes;