import { NikkeInfo } from './interfaces'
// images
// elysion
import RapiFullBodyShot from '@images/nikke/fullBody/rapi.png'
import EmmaFullBodyShot from '@images/nikke/fullBody/emma.png'
import PrivatyFullBodyShot from '@images/nikke/fullBody/privaty.png'
import SignalFullBodyShot from '@images/nikke/fullBody/signal.png'
import PoliFullBodyShot from '@images/nikke/fullBody/poli.png'
import MirandaFullBodyShot from '@images/nikke/fullBody/miranda.png'
import BridFullBodyShot from '@images/nikke/fullBody/brid.png'
import SolineFullBodyShot from '@images/nikke/fullBody/soline.png'
import DieselFullBodyShot from '@images/nikke/fullBody/diesel.png'
import VestiFullBodyShot from '@images/nikke/fullBody/vesti.png'
import EunhwaFullBodyShot from '@images/nikke/fullBody/eunhwa.png'
import GuillotineFullBodyShot from '@images/nikke/fullBody/guillotine.png'
import MaidenFullBodyShot from '@images/nikke/fullBody/maiden.png'
import HelmFullBodyShot from '@images/nikke/fullBody/helm.png'



export const emma: NikkeInfo = {
    company: "elysion",
    squad: "앱솔루트",
    class: "지원형",
    enName: "emma",
    krName: "엠마",
    bustType: 1,
    fullBodyImage: EmmaFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 5.57% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "치어리딩",
            detail: [
                {
                    activation_condition: "피격 시 5% 확률로 아군 전체에게",
                    description: ["[시전자 최대 체력 비례 10.77% 회복]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "템프테이션",
            detail: [
                {
                    activation_condition: "자신의 체력이 90% 이상일 때 한하여 아군 전체에게",
                    description: ["[체력 회복량 13.33% ▲] [지속]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "알트루이즘",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 39.6% 회복]", "[공격 대미지 비례 39.6% 회복] [5초 유지]"]
                }
            ]
        }
    ],
}
export const privaty: NikkeInfo = {
    company: "elysion",
    squad: "트라이앵글",
    class: "화력형",
    enName: "privaty",
    krName: "프리바티",
    bustType: 3,
    property: "수냉",
    fullBodyImage: PrivatyFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 13.65% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "EX 매거진",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: [
                        "[공격력 23.61%▲] [10초 유지]",
                        "[재장전 속도 51.16%▲] [10초 유지]",
                        "[최대 장탄 수 50.66%▼] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "LD 어설트",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 대상에게",
                    description: ["[공격력 85.79% 추가 대미지]"]
                },
                {
                    activation_condition: "마지막 탄환 명중 시 대상이 기절 상태라면 동일 적 대상에게",
                    description: ["[공격력 1089% 추가 대미지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "AK 미사일",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: [
                        "[공격력 457.87% 대미지]", 
                        "[기절] [3초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const signal: NikkeInfo = {
    company: "elysion",
    squad: "스카우팅",
    class: "화력형",
    enName: "signal",
    krName: "시그널",
    bustType: 2,
    property: "작열",
    fullBodyImage: SignalFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.1% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "어택 시그널",
            detail: [
                {
                    activation_condition: "일반공격 60회 명중 시 대상에게",
                    description: [
                        "[방어력 5.94%▼] [5초 유지]",
                        "[공격력 5.94%▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "웨이팅 포 시그널",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: ["[공격 대미지 비례 44.08% 회복] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "이머전시 시그널",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: [
                        "[공격력 229.22% 대미지]", 
                        "[방어력 12.34% ▼] [10초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const poli: NikkeInfo = {
    company: "elysion",
    squad: "A.C.P.U",
    class: "방어형",
    enName: "poli",
    krName: "폴리",
    bustType: 2,
    property: "수냉",
    fullBodyImage: PoliFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 1.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 201.5% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "브레이브 콜",
            detail: [
                {
                    activation_condition: "일반공격 5회 공격 시 아군 전체에게",
                    description: ["[공격력 5.46%▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "도그 테라피",
            detail: [
                {
                    activation_condition: "자신과 자신을 제외한 체력이 가장 낮은 아군 2기에게",
                    description: [
                        "[방어력 23.51%▲] [10초 유지]",
                        "[피격 대미지 분배] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "폴리스 라인",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: [
                        "[시전자 최대 체력 비례 22.27% 보호막] [10초 유지]", 
                        "[공격력 44.55%▲] [10초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const miranda: NikkeInfo = {
    company: "elysion",
    squad: "A.C.P.U",
    class: "지원형",
    enName: "miranda",
    krName: "미란다",
    bustType: 1,
    property: "작열",
    fullBodyImage: MirandaFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1.43,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.64% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "헬스업!",
            detail: [
                {
                    activation_condition: "일반공격 30회 명중 시 아군 전체에게",
                    description: ["[명중률 5.37%▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "도그 테라피",
            detail: [
                {
                    activation_condition: "자신과 자신을 제외한 체력이 가장 낮은 아군 2기에게",
                    description: [
                        "[방어력 23.51%▲] [10초 유지]",
                        "[피격 대미지 분배] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "폴리스 라인",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: [
                        "[시전자 최대 체력 비례 22.27% 보호막] [10초 유지]", 
                        "[공격력 44.55%▲] [10초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const brid: NikkeInfo = {
    company: "elysion",
    squad: "인피니티 레일",
    class: "화력형",
    enName: "brid",
    krName: "브리드",
    bustType: 1,
    property: "수냉",
    fullBodyImage: BridFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1.3,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 14.29% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "엑셀러레이션",
            detail: [
                {
                    activation_condition: "일반 공격 30회 공격 시 자신에게",
                    description: ["[공격력 15.18%▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "리크",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["[공격력 200% 대미지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "AZX",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["공격력 1237.5% 대미지"]
                },
                {
                    activation_condition: "자신의 체력이 최대라면 동일 적 대상에게",
                    description: ["공격력 1237.5% 추가 대미지"]
                }
            ]
        }
    ],
}
export const soline: NikkeInfo = {
    company: "elysion",
    squad: "인피니티 레일",
    class: "화력형",
    enName: "soline",
    krName: "브리드",
    bustType: 3,
    property: "철갑",
    fullBodyImage: SolineFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 2,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 4.68% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "유능하게!",
            detail: [
                {
                    activation_condition: "일반공격 40회 공격 시 자신에게",
                    description: ["[공격속도 7.26%▲] [3초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "어른스럽게!",
            detail: [
                {
                    activation_condition: "자신의 체력이 최대일 때 한하여 자신에게",
                    description: [
                        "[크리티컬 확률 2% 56.7%▲] [지속]",
                        "[크리티컬 대미지 13.5% ▲] [지속]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "나도 한다면 해!",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격범위 내 적들에게",
                    description: ["[공격력 396% 대미지]"]
                },
                {
                    activation_condition: "자신의 체력이 최대라면",
                    description: ["[공격력 924% 추가 대미지]"]
                }
            ]
        }
    ],
}
export const diesel: NikkeInfo = {
    company: "elysion",
    squad: "인피니티 레일",
    class: "방어형",
    enName: "diesel",
    krName: "디젤",
    bustType: 2,
    property: "철갑",
    fullBodyImage: DieselFullBodyShot,
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 5.38% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "딸기향 이끌림",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: ["[방어력 22.04%▲] [10초 유지]"]
                },
                {
                    activation_condition: "풀 버스트 타임 지속 시간 중 피격 시 자신에게",
                    description: ["[시전자 최대 체력 비례 11.02% 회복]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "딸기 사탕의 힘",
            detail: [
                {
                    activation_condition: "일반 공격 100회 명중 시 자신에게",
                    description: ["[딸기 사탕: 최대 장탄 수 56.7%▲] [10중첩] [10초 유지]"]
                },
                {
                    activation_condition: "자신이 딸기 사탕 최대 중첩 상태라면 중첩 해제 후 아군 전체에게",
                    description: ["[탄환 충전 86.62%]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "스트로베리 쇼크",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 5기에게",
                    description: [
                        "[공격력 299.66% 대미지]",
                        "[도발] [5.06초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const vesti: NikkeInfo = {
    company: "elysion",
    squad: "앱솔루트",
    class: "화력형",
    enName: "vesti",
    krName: "베스티",
    bustType: 3,
    property: "수냉",
    fullBodyImage: VestiFullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "상상실현",
            detail: [
                {
                    activation_condition: "풀 차지 공격 명중 시 자신에게",
                    description: ["[폭발범위 15.01%▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "생존본능",
            detail: [
                {
                    activation_condition: "버스트 스킬 사용 시 자신에게",
                    description: ["[생존본능 1: 공격력 5.35%▲] [45초 유지]"]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 자신이 생존본능 1 상태라면 자신에게",
                    description: ["[생존본능 2: 크리티컬 대미지 22.34%▲] [하위 효과 중복 적용] [45초 유지]"]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 자신이 생존본능 2 상태라면 자신에게",
                    description: ["[생존본능 3: 크리티컬 확률 15.51%▲] [하위 효과 중복 적용] [45초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "정당방위",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: [
                        "[공격력 15.56% 대미지]",
                        "[자신 상태 별 추가 효과] [하위 효과 중복 적용]:",
                        "생존본능 1: [공격력 210.62% 추가 대미지]",
                        "생존본능 2: [공격력 247.25% 추가 대미지]",
                        "생존본능 3: [공격력 302.19% 추가 대미지]",
                    ]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: [
                        "풀 버스트 타임 지속 시간 5초 ▼"
                    ]
                }
            ]
        }
    ],
}
export const eunhwa: NikkeInfo = {
    company: "elysion",
    squad: "앱솔루트",
    class: "화력형",
    enName: "eunhwa",
    krName: "은화",
    bustType: 3,
    property: "작열",
    fullBodyImage: EunhwaFullBodyShot,
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 2.33,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 71.07% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "준비 태세",
            detail: [
                {
                    activation_condition: "마지막 탄환 공격 후 자신에게",
                    description: ["[차지 대미지 37.28%▲] [2발 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "약점 간파",
            detail: [
                {
                    activation_condition: "마지막 탄환 공격 후 대상에게",
                    description: ["[방어력 29%▼] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "전세 역전",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 10기에게",
                    description: [
                        "[공격력 85.62% 대미지]",
                        "[방어력 2.43% ▼] [15초 유지]"
                    ]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["크리티컬 확률 4.65%▲] [15초 유지"]
                }
            ]
        }
    ],
}
export const guillotine: NikkeInfo = {
    company: "elysion",
    squad: "익스터너",
    class: "화력형",
    enName: "guillotine",
    krName: "길로틴",
    bustType: 3,
    property: "전격",
    fullBodyImage: GuillotineFullBodyShot,
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 5.57% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "유열",
            detail: [
                {
                    activation_condition: "일반 공격 100회 명중 시 자신에게",
                    description: [
                        "[크리티컬 확률 9.28%▲] [10초 유지]",
                        "[현재 체력 2.01%▼]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "흑화",
            detail: [
                {
                    activation_condition: "일반 공격 150회 명중 시 자신에게",
                    description: ["[공격력 138.24% 대미지]"]
                },
                {
                    activation_condition: "자신의 체력이 60% 이하일 때 한하여 자신에게",
                    description: ["[크리티컬 대미지 14.46%▲] [5초 유지]"]
                },
                {
                    activation_condition: "자신의 체력이 70% 이하일 때 한하여 자신에게",
                    description: ["[잃은 체력 1%당 공격력0.2%▲] [지속]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "마계흑룡파",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 1237.5% 대미지]"]
                },
                {
                    activation_condition: "자신의 체력이 50% 이하라면 동일 적 대상에게",
                    description: ["공격력 1237.5% 추가 대미지"]
                }
            ]
        }
    ],
}
export const maiden: NikkeInfo = {
    company: "elysion",
    squad: "익스터너",
    class: "화력형",
    enName: "maiden",
    krName: "메이든",
    bustType: 3,
    property: "전격",
    fullBodyImage: MaidenFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 2.03,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 231.6% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "언령: 기교의 언",
            detail: [
                {
                    activation_condition: "20회 피격 시 자신에게",
                    description: ["[복수: 공격력 26.66%▲] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "언령: 필중의 언",
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: ["[도발] [10초 유지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[크리티컬 대미지 152.84% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "언령: 힘있는 말",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: ["[공격력 457.87% 대미지]"]
                },
                {
                    activation_condition: "자신이 복수 상태라면 동일 적 대상에게",
                    description: ["공격력 457.87% 대미지"]
                }
            ]
        }
    ],
}
export const helm: NikkeInfo = {
    company: "elysion",
    squad: "이지스",
    class: "화력형",
    enName: "helm",
    krName: "헬름",
    bustType: 3,
    property: "수냉",
    fullBodyImage: HelmFullBodyShot,
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 69.04% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "진두지휘",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 아군 전체에게",
                    description: ["[일반 공격 크리티컬 확률 14.64%▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "포문 개방",
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[저지 부위 공격 대미지 3.08% ▲] [지속]"]
                },
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[공격 대미지 11.85% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "이지스 캐논",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 1237.5% 대미지]"]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["공격 대미지 비례 54.45% 회복] [10초 유지"]
                }
            ]
        }
    ],
}
export const rapi: NikkeInfo = {
    company: "elysion",
    squad: "카운터스",
    class: "화력형",
    enName: "rapi",
    krName: "라피",
    bustType: 3,
    fullBodyImage: RapiFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 13.65% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "포메이션 F.F",
            detail: [
                {
                    activation_condition: "20회 피격 시 자신에게",
                    description: ["[공격력 21.81%▲] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "미사일",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 657.72% 대미지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[공격력 60.75% ▲][10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "다탄두 미사일",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 657.72% 대미지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[공격력 60.75% ▲][10초 유지]"]
                }
            ]
        }
    ]
}

export const nikkesObject: { 
    [index: string]: NikkeInfo,
} = {
    emma,
    privaty,
    signal,
    poli,
    miranda,
    brid,
    soline,
    diesel,
    vesti, 
    eunhwa, 
    guillotine, 
    maiden, 
    helm,
    rapi,
}

const nikkesArray: NikkeInfo[] =
    [
        emma,
        privaty,
        signal,
        poli,
        miranda,
        brid,
        soline,
        diesel,
        vesti, 
        eunhwa, 
        guillotine, 
        maiden, 
        helm,
        rapi,
    ]
export default nikkesArray;