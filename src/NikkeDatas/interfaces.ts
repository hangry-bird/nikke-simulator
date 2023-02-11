
interface Attack {
    gun_type: string;
    max_shots: number;
    reload_time: number;
    operation_type: string;
}
type SkillDescription = string
type SkillDetail = {
    skill_activation_condition: string,
    skill_description: SkillDescription[]
}
interface Skill {
    skill_order_type: "one" | "two" | "bust",
    skill_type: "active" | "passive",
    cooldown_time?: number,
    skill_name: string,
    skill_detail: SkillDetail[]
}

export interface NikkeInfo {
    enName: string;
    krName: string;

    fullBodyImage: string;

    bustType: number;
    attack: Attack;

    skills?: Skill[]
    // skill1: Skill;
    // skill2: Skill;
    // skill3: Skill;
}