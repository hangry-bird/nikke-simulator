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
import NeonFullBodyShot from '@images/nikke/fullBody/neon.png'
import DeltaFullBodyShot from '@images/nikke/fullBody/delta.png'
// missilis
import MaxwellFullBodyShot from '@images/nikke/fullBody/maxwell.png'
import YuniFullBodyShot from '@images/nikke/fullBody/yuni.png'
import LiterFullBodyShot from '@images/nikke/fullBody/liter.png'
import JuliaFullBodyShot from '@images/nikke/fullBody/julia.png'
import CentiFullBodyShot from '@images/nikke/fullBody/centi.png'
import DrakeFullBodyShot from '@images/nikke/fullBody/drake.png'
import CrowFullBodyShot from '@images/nikke/fullBody/crow.png'
import PepperFullBodyShot from '@images/nikke/fullBody/pepper.png'
import AdmiFullBodyShot from '@images/nikke/fullBody/admi.png'
import EpinelFullBodyShot from '@images/nikke/fullBody/epinel.png'
import LaplaceFullBodyShot from '@images/nikke/fullBody/laplace.png'
import AnneMiracleFairyFullBodyShot from '@images/nikke/fullBody/anne_miracleFairy.png'
import JackalFullBodyShot from '@images/nikke/fullBody/jackal.png'
import GuiltyFullBodyShot from '@images/nikke/fullBody/guilty.png'
import SinFullBodyShot from '@images/nikke/fullBody/sin.png'



// elysion
export const emma: NikkeInfo = {
    company: "elysion",
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SSR",
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
    grade: "SR",
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
export const neon: NikkeInfo = {
    company: "elysion",
    grade: "SR",
    squad: "카운터스",
    class: "지원형",
    enName: "neon",
    krName: "네온",
    bustType: 1,
    fullBodyImage: NeonFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 1.82,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 224.5% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "네온 특제탄",
            detail: [
                {
                    activation_condition: "적 처치 시 공격력이 가장 높은 아군 2기에게",
                    description: ["[크리티컬 확률 3.56% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "화력 만세!",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[크리티컬 확률 45.93% ▲] [2발 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "오직 화력!",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["[공격력 528.97% 대미지]"]
                },
                {
                    activation_condition: "샷건 소지 아군 전체에게",
                    description: ["[최대 장탄수 3발 ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const delta: NikkeInfo = {
    company: "elysion",
    grade: "SR",
    squad: "스카우팅",
    class: "방어형",
    enName: "delta",
    krName: "델타",
    bustType: 2,
    property: "풍압",
    fullBodyImage: DeltaFullBodyShot,
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 2.33,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 65.95% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "리콜렉션",
            detail: [
                {
                    activation_condition: "풀 차지 공격 명중 시 자신에게",
                    description: ["[최대 체력 8.82% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "라스트 메모리",
            detail: [
                {
                    activation_condition: "버스트 스킬 사용 시 자신에게",
                    description: ["[방어력 51.42% ▲] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "리멤버 미",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[디코이: 시전자 최대 체력 비례 91.68% 분신] [10초 유지]",
                        "[주목: 적 전체 도발] [10초 유지]"
                    ]
                }
            ]
        }
    ]
}
// missilis
export const maxwell: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "메티스",
    class: "화력형",
    enName: "maxwell",
    krName: "맥스웰",
    bustType: 3,
    property: "철갑",
    fullBodyImage: MaxwellFullBodyShot,
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 2.00,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 69.04% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "스트레이트 샷",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[차지 속도 4.48%▲] [10초 유지]",
                        "[공격력 43.1%▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "일렉트릭 샷",
            detail: [
                {
                    activation_condition: "니케를 제외한 적이 5기 이상일 때 한하여 자신에게",
                    description: ["[크리티컬 확률 4.83% ▲] [지속]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "피어스 샷",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[사용 무기 변경]:",
                        "대미지: 공격력 813.42%",
                        "최대 장탄 수: 1발",
                        "추가 효과: 관통 특화"
                    ]
                }
            ]
        }
    ]
}
export const yuni: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "워드리스",
    class: "방어형",
    enName: "yuni",
    krName: "유니",
    bustType: 2,
    property: "작열",
    fullBodyImage: YuniFullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2.00,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 350% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "DMNS",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[차지 속도 8.97% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "SDS",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 아군 전체에게",
                    description: [
                        "[방어력 2.77% ▲] [10초 유지]",
                        "[공격 대미지 비례 2.77% 회복] [10초 유지]",
                        "[최대 장탄 수 1발 ▲] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "BDG",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: [
                        "[공격력 348.73% 대미지]",
                        "[이동 불가] [5초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const liter: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "마이티 툴즈",
    class: "지원형",
    enName: "liter",
    krName: "리타",
    bustType: 1,
    property: "철갑",
    fullBodyImage: LiterFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1.50,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.73% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "리타 부스트",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: [
                        "[시작 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [버스트 스킬 재사용 시간 2.34초 ▼]",
                        "2회: [버스트 스킬 재사용 시간 2.7초 ▼]",
                        "3회: [버스트 스킬 재사용 시간 3.17초 ▼]",
                    ]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 아군 전체에게",
                    description: [
                        "[사용 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [최대 장탄 수 45.17% ▲] [5초 유지]",
                        "2회: [크리티컬 대미지 12.46% ▲] [5초 유지]",
                        "3회: [공격력 14.42% ▲] [5초 유지]",
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "볼트 부스트",
            cooldown_time: 15,
            detail: [
                {
                    activation_condition: "현재 체력이 가장 낮은 아군 2기에게",
                    description: ["[엄폐물 체력 52.5% 회복]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "더블 부스트",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[공격력 66% ▲] [5초 유지]"]
                }
            ]
        }
    ]
}
export const julia: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "마스터 핸드",
    class: "화력형",
    enName: "julia",
    krName: "율리아",
    bustType: 3,
    property: "철갑",
    fullBodyImage: JuliaFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1.20,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 14.07% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "데크레센도",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[크리티컬 확률 26.04% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "크레센도",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: ["[크레센도: 크리티컬 대미지 24.79% ▲] [5중첩] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "클라이맥스",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 5기에게",
                    description: ["[공격력 544.5% 대미지]"]
                },
                {
                    activation_condition: "자신이 크레센도 최대 중첩 상태라면 동일 적 대상에게",
                    description: ["[공격력 544.5% 추가 대미지]"]
                }
            ]
        }
    ]
}
export const centi: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "마이티 툴즈",
    class: "방어형",
    enName: "centi",
    krName: "센티",
    bustType: 2,
    property: "철갑",
    fullBodyImage: CentiFullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 1.52,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "보수공사",
            detail: [
                {
                    activation_condition: "풀 차지 공격 명중 시 자신에게",
                    description: ["[스킬 2 재사용 시간 9.16% ▼]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            cooldown_time: 9,
            name: "현장검토",
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 6.38% 보호막] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "착공시작",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 적 5기에게",
                    description: [
                        "[공격력 145.46% 대미지]",
                        "[방어력 14.54%▼] [10초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const drake: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "메티스",
    class: "화력형",
    enName: "drake",
    krName: "드레이크",
    bustType: 3,
    property: "작열",
    fullBodyImage: DrakeFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 1.52,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 214.3% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "오버 차지",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: [
                        "[명중률 11.85%▲] [10초 유지]",
                        "[공격력 11.85%▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "썬더볼트",
            detail: [
                {
                    activation_condition: "10회 명중 시 체력이 가장 낮은 적 3기에게",
                    description: ["[공격력 98.55% 대미지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "드레이크 스페셜",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격범위 내 적들에게",
                    description: ["[공격력 1254% 대미지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[최대 장탄 수 72.18%▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const crow: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "이그조틱",
    class: "방어형",
    enName: "crow",
    krName: "크로우",
    bustType: 3,
    property: "작열",
    fullBodyImage: CrowFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1.67,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 4.47% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "킬링타임",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 적 전체에게",
                    description: ["[공격력 19.93% ▼] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "데어데블",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 대상에게",
                    description: ["[공격력 89.09% 추가 대미지]"]
                },
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: ["[방어력 12.72% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "더 테러리스트",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 915.75% 대미지]"]
                }
            ]
        }
    ]
}
export const pepper: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "세라핌",
    class: "지원형",
    enName: "pepper",
    krName: "페퍼",
    bustType: 1,
    property: "풍압",
    fullBodyImage: PepperFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 2.03,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 231.6% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "리프레쉬 하트",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게",
                    description: ["[시전자 최대 체력 비례 4.45% 회복]"]
                },
                {
                    activation_condition: "마지막 탄환 명중 시 아군 전체에게",
                    description: ["[리프레쉬 하트: 체력 회복량 6.53% ▲] [5 중첩] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "비타민 파워",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: [
                        "[공격력 160% 대미지]",
                        "[공격력 3.55% ▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "페퍼 테라피",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 1237.5% 대미지]"]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[중첩 가능 이로운 효과 중첩량 1개 ▲]"]
                },
                {
                    activation_condition: "자신이 리프레쉬 하트 최대 중첩 상태라면 아군 전체에게",
                    description: ["[시전자 최대 체력 비례 27.22% 회복]"]
                }
            ]
        }
    ]
}
export const admi: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "트라이앵글",
    class: "지원형",
    enName: "admi",
    krName: "애드미",
    bustType: 1,
    property: "풍압",
    fullBodyImage: AdmiFullBodyShot,
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 1.73,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 67.37% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "응원의 손길",
            detail: [
                {
                    activation_condition: "20회 피격 시 아군 전체에게",
                    description: ["[차지 대미지 9.59% ▲] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "고양이 숨결",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: ["[피격 대미지 28.65% ▼] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "애정의 보은",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: [
                        "[재장전 속도 50.91% ▲] [10초 유지]",
                        "[크리티컬 대미지 28.34% ▲] [10초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const epinel: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "라이프 토닉",
    class: "화력형",
    enName: "epinel",
    krName: "에피넬",
    bustType: 3,
    property: "풍압",
    fullBodyImage: EpinelFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.1% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "슈퍼 루키",
            detail: [
                {
                    activation_condition: "적 처치 시 자신에게",
                    description: ["[슈퍼 루키: 공격력 13.86% ▲] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "스파이더",
             detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: [
                        "[크리티컬 확률 5.05% ▲] [5초 유지]",
                        "[크리티컬 대미지 6.4% ▲] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "SAFE 50-50",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: ["[공격력 457.87% 대미지]"]
                },
                {
                    activation_condition: "자신이 슈퍼 루키 최대 중첩 상태라면 동일 적 대상에게",
                    description: ["[공격력 457.87% 추가 대미지]"]
                }
            ]
        }
    ]
}
export const laplace: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "메티스",
    class: "화력형",
    enName: "laplace",
    krName: "라플라스",
    bustType: 3,
    property: "철갑",
    fullBodyImage: LaplaceFullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2.33,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 63.11% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "히어로 비전",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 자신에게",
                    description: ["[히어로 비전 : 폭발 범위 3.57% ▲] [5중첩] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "히어로 봄버",
             detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 대상에게",
                    description: ["[공격력 81.66% 추가 대미지]"]
                },
                {
                    activation_condition: "보스 파츠 명중 시 대상에게",
                    description: ["[공격력 14.78% 추가 대미지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "라플라스 버스터",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[사용 무기 변경]:",
                        "최초 대미지 : 공격력 897.6% 대미지",
                        "지속 대미지 : 공격력 14.52% 대미지",
                        "유지 시간 : 5초",
                        "추가 효과 : 관통 특화",
                    ]
                },
                {
                    activation_condition: "자신이 히어로 비전 최대 중첩 상태라면 동일 적 대상에게",
                    description: ["[공격력 11.9% 방어력 무시 대미지]"]
                }
            ]
        }
    ]
}
export const anne_miracleFairy: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "리콜 & 릴리즈",
    class: "지원형",
    enName: "anne_miracleFairy",
    krName: "앤:미라클 페어리",
    bustType: 2,
    property: "수냉",
    fullBodyImage: AnneMiracleFairyFullBodyShot,
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
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "춤추는 요정",
            detail: [
                {
                    activation_condition: "일반 공격 3회 공격 시 지원형 아군 전체에게",
                    description: ["[공격 대미지 비례 6.07% 회복] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "요정의 장난",
             detail: [
                {
                    activation_condition: "자신의 체력이 90% 이상일 때 한하여 아군 전체에게",
                    description: ["[체력 회복량 23.46% ▲] [지속]"]
                },
                {
                    activation_condition: "마지막 탄환 명중 시 자신의 체력이 90% 이상이라면 적 전체에게",
                    description: ["[체력 회복량 78.93% ▼] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "파란 나비의 꿈",
            cooldown_time: 60,
            detail: [
                {
                    activation_condition: "화력형 아군 전체에게",
                    description: [
                        "[시전자 최대 체력 비례 38.61% 회복]",
                        "[공격력 77.22% ▲] [10초 유지]"
                    ]
                },
                {
                    activation_condition: "사망한 화력형 아군 무작위 1기에게",
                    description: ["[체력 99%로 부활] [전투 중 1회 발동]"]
                }
            ]
        }
    ]
}
export const jackal: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "이그조틱",
    class: "방어형",
    enName: "jackal",
    krName: "자칼",
    bustType: 1,
    property: "철갑",
    fullBodyImage: JackalFullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 65.02% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "해피 자칼",
            detail: [
                {
                    activation_condition: "10회 피격 시 최대 체력이 가장 높은 적 1기에게",
                    description: [
                        "[받는 데미지 9.09% ▲] [10초 유지]",
                        "[공격력 9.09% ▼] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "치얼업 자칼",
             detail: [
                {
                    activation_condition: "전투 시작 시 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[피격 대미지 분배] [120초 유지]",
                        "[방어력 8.27% ▲] [120초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "크레이지 자칼",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: [
                        "[대상 설명이 '~ 적 1기에게'로 끝나는 버스트 스킬 공격 대미지 38.91% ▲] [15초 유지] (추가 대미지 제외)",
                        "[방어력 14.69% ▲] [10초 유지]"
                    ]
                },
                {
                    activation_condition: "사망한 화력형 아군 무작위 1기에게",
                    description: ["[체력 99%로 부활] [전투 중 1회 발동]"]
                }
            ]
        }
    ]
}
export const guilty: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "리얼 카인드니스",
    class: "화력형",
    enName: "guilty",
    krName: "길티",
    bustType: 2,
    property: "풍압",
    fullBodyImage: GuiltyFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 2.67,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 231.4% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "빌려 갈게에···.",
            detail: [
                {
                    activation_condition: "일반 공격 6회 적중시 자신에게",
                    description: ["[빌려갈게···. : 공격력이 가장 높은 아군 1기의 공격력 8.81% 복제][5중첩][10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "같이 놀자···.",
             detail: [
                {
                    activation_condition: "일반 공격 12회 명중시 풍압코드 아군 전체에게",
                    description: [
                        "[중첩가능 이로운 효과 중첩량 1개 ▲]",
                        "[공격력 4.13% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "잡았다아···.",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["[공격력 284.32% 대미지]"]
                },
                {
                    activation_condition: "자신이 빌려 갈게에.... 최대 충첩 상태라면 동일 적 대상에게",
                    description: [
                        "[방어력 20.25%▼][5초 유지]",
                        "[공격력277.71% 추가 대미지]"
                    ]
                }
            ]
        }
    ]
}
export const sin: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "리얼 카인드니스",
    class: "방어형",
    enName: "sin",
    krName: "신",
    bustType: 2,
    property: "전격",
    fullBodyImage: SinFullBodyShot,
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
            name: "센텐스 엔딩스",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: [
                        "[최대 체력이 가장 높은 아군 1기의 최대 체력 15.03% 복제] [5초 유지]",
                        "[주목:적 전체를 도발][5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "허리 온",
             detail: [
                {
                    activation_condition: "풀 버스트 타임 종료 시 자신에게",
                    description: ["[버스트 게이지 충전 속도 16.17% ▲] [5초 유지]"]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 자신에게",
                    description: [
                        "[사용 횟수 별 효과][하위 효과 중복 적용]:",
                        "1회 : [공격 대미지 비례 15.3% 회복] [5초 유지]",
                        "2회 : [체력 회복량 51% ▲] [5초 유지]",
                        "3회 : [방어력 43.2% ▲] [5초 유지]",
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "워드 오브 킬",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "니케를 제외한 적이 4기 이상이라면 모든 적에게",
                    description: ["[받는 대미지 12.23% ▲] [5초 유지]"]
                },
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: ["공격력 176.32% 대미지"]
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
        // elysion
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
        neon,
        delta,
    ]
export default nikkesArray;



export const drawingLightWeightArray = nikkesArray.map(nikke => ({
        company: nikke.company,
        grade: nikke.grade,
        krName: nikke.krName,
        fullBodyImage: nikke.fullBodyImage,
}))

export const elysionNikkes = drawingLightWeightArray.filter(nikke => nikke.company === "elysion");
export const tetraNikkes = drawingLightWeightArray.filter(nikke => nikke.company === "tetra");
export const missilisNikkes = drawingLightWeightArray.filter(nikke => nikke.company === "missilis");
export const pilgrimNikkes = drawingLightWeightArray.filter(nikke => nikke.company === "pilgrim");

export const ssrNikkes = drawingLightWeightArray.filter(nikke => nikke.grade === "SSR");
export const srNikkes = drawingLightWeightArray.filter(nikke => nikke.grade === "SR");
export const rNikkes = drawingLightWeightArray.filter(nikke => nikke.grade === "R");