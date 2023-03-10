
interface Attack {
    gun_type: "머신건" | "소총" | "저격소총" | "런처" | "기관단총" | "샷건";
    max_shots: number;
    reload_time: number;
    operation_type: string;
    activation_condition: string;
    description: string[]
}
type SkillDescription = string
type SkillDetail = {
    activation_condition: string,
    description: SkillDescription[]
}
interface Skill {
    order_type: "one" | "two" | "bust",
    type: "액티브" | "패시브",
    cooldown_time?: number,
    name: string,
    detail: SkillDetail[]
}

export interface NikkeInfo_Light{
    company: "elysion" | "tetra" | "missilis" | "pilgrim" | "abnormal";
    grade: "SSR" | "SR" | "R";
    krName: string;
    isDraw?: boolean;
    fullBodyImage: string;
}
export interface NikkeInfo {
    company: "elysion" | "tetra" | "missilis" | "pilgrim" | "abnormal";
    grade: "SSR" | "SR" | "R";
    class: "화력형" | "지원형" | "방어형";
    squad: string;
    enName: string;
    krName: string;
    isDraw: boolean;
    property: "작열" | "수냉" | "철갑" | "풍압" | "전격";
    fullBodyImage: string;

    bustType: 1 | 2 | 3;
    attack: Attack;

    skills?: Skill[]
}