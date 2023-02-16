import { NikkeInfo, NikkeInfo_Light } from './interfaces'
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
import Soldier_EGFullBodyShot from '@images/nikke/fullBody/soldier_EG.png'
import Soldier_OWFullBodyShot from '@images/nikke/fullBody/soldier_OW.png'
import Soldier_FAFullBodyShot from '@images/nikke/fullBody/soldier_FA.png'

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
import QuencyFullBodyShot from '@images/nikke/fullBody/quency.png'
import MiharaFullBodyShot from '@images/nikke/fullBody/mihara.png'
import N102FullBodyShot from '@images/nikke/fullBody/n102.png'
import EtherFullBodyShot from '@images/nikke/fullBody/ether.png'
import Product08FullBodyShot from '@images/nikke/fullBody/product_08.png'
import Product12FullBodyShot from '@images/nikke/fullBody/product_12.png'
import Product23FullBodyShot from '@images/nikke/fullBody/product_23.png'
// tetra
import SugarFullBodyShot from '@images/nikke/fullBody/sugar.png'
import ExiaFullBodyShot from '@images/nikke/fullBody/exia.png'
import AliceFullBodyShot from '@images/nikke/fullBody/alice.png'
import FrimaFullBodyShot from '@images/nikke/fullBody/frima.png'
import MaryFullBodyShot from '@images/nikke/fullBody/mary.png'
import MilkFullBodyShot from '@images/nikke/fullBody/milk.png'
import YulhaFullBodyShot from '@images/nikke/fullBody/yulha.png'
import LudmilaFullBodyShot from '@images/nikke/fullBody/ludmila.png'
import RupeeFullBodyShot from '@images/nikke/fullBody/rupee.png'
import YanFullBodyShot from '@images/nikke/fullBody/yan.png'
import DollaFullBodyShot from '@images/nikke/fullBody/dolla.png'
import NovelFullBodyShot from '@images/nikke/fullBody/novel.png'
import FolkwangFullBodyShot from '@images/nikke/fullBody/folkwang.png'
import AriaFullBodyShot from '@images/nikke/fullBody/aria.png'
import NoiseFullBodyShot from '@images/nikke/fullBody/noise.png'
import VolumeFullBodyShot from '@images/nikke/fullBody/volume.png'
import Rupee_winterShopperFullBodyShot from '@images/nikke/fullBody/rupee_winterShopper.png'
import ViperFullBodyShot from '@images/nikke/fullBody/viper.png'
import CocoaFullBodyShot from '@images/nikke/fullBody/cocoa.png'
import AnisFullBodyShot from '@images/nikke/fullBody/anis.png'
import BelortaFullBodyShot from '@images/nikke/fullBody/belorta.png'
import MicaFullBodyShot from '@images/nikke/fullBody/mica.png'
import NeveFullBodyShot from '@images/nikke/fullBody/neve.png'
import IdollFlowerFullBodyShot from '@images/nikke/fullBody/idoll_flower.png'
import IdollOceanFullBodyShot from '@images/nikke/fullBody/idoll_ocean.png'
import IdollSunFullBodyShot from '@images/nikke/fullBody/idoll_sun.png'


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
export const soldierEG: NikkeInfo = {
    company: "elysion",
    grade: "R",
    squad: "리플레이스",
    class: "화력형",
    enName: "Soldier E.G.",
    krName: "솔져 E.G.",
    bustType: 3,
    property: "전격",
    fullBodyImage: Soldier_EGFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1.17,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 14.01% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "이글 아이",
            detail: [
                {
                    activation_condition: "일반 공격 명중 시 5% 확률로 자신에게",
                    description: ["[공격력 7.92% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "이글 택틱",
            cooldown_time: 9,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[최대 장탄 수 112.77% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "이글 샷",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: ["[공격력 720% 대미지]"]
                }
            ]
        }
    ]
}
export const soldierOW: NikkeInfo = {
    company: "elysion",
    grade: "R",
    squad: "리플레이스",
    class: "지원형",
    enName: "Soldier O.W.",
    krName: "솔져 O.W.",
    bustType: 1,
    property: "작열",
    fullBodyImage: Soldier_OWFullBodyShot,
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 2,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 9.36% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "오울 크로",
            detail: [
                {
                    activation_condition: "일반 공격 시 10% 확률로 대상에게",
                    description: ["[공격력 75.6% 추가 대미지 ▲]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "오울 윈드",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 3기에게",
                    description: ["[재장전 속도 128.57% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "오울 페더",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "작열 코드 아군 전체에게",
                    description: ["[최대 장탄 수 280% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const soldierFA: NikkeInfo = {
    company: "elysion",
    grade: "R",
    squad: "리플레이스",
    class: "방어형",
    enName: "Soldier F.A.",
    krName: "솔져 F.A.",
    bustType: 2,
    property: "철갑",
    fullBodyImage: Soldier_FAFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 2,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 214.3% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "팔콘 윙",
            detail: [
                {
                    activation_condition: "피격 시 10% 확률로 자신에게",
                    description: ["[방어력 9.09%▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "팔콘 네스트",
            cooldown_time: 15,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[공격 대미지 비례 20.19% 회복] [8초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "팔콘 부스트",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[최대 체력 112.5%▲] [10초 유지]"]
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
export const quency: NikkeInfo = {
    company: "missilis",
    grade: "SSR",
    squad: "리얼 카인드니스",
    class: "지원형",
    enName: "quency",
    krName: "퀀시",
    bustType: 2,
    property: "전격",
    fullBodyImage: QuencyFullBodyShot,
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
            name: "새로운 루트",
            detail: [
                {
                    activation_condition: "일반 공격 60회 공격 시 자신에게",
                    description: ["[최대 체력이 가장 높은 니케의 최대 체력 12.42% 복제][10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "은밀한 공범자",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: ["[공격력 16.11%▲][5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "위대한 탈출",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[최대 체력 43.87% ▲] [5초 유지]",
                        "[크리티컬 대미지 29.9% ▲][10초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const mihara: NikkeInfo = {
    company: "missilis",
    grade: "SR",
    squad: "워드리스",
    class: "화력형",
    enName: "mihara",
    krName: "미하라",
    bustType: 3,
    property: "수냉",
    fullBodyImage: MiharaFullBodyShot,
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1.67,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 15.07% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "인듀어",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: ["[크리티컬 대미지 18.7% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "페인 로드",
            detail: [
                {
                    activation_condition: "버스트 스킬 사용 시 자신에게",
                    description: ["[페인 로드 1: 공격력 15.56% ▲] [30초 유지]"]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 자신이 페인로드 1 상태라면 자신에게",
                    description: ["[페인 로드 2: 크리티컬 확률 11.28% ▲] [30초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "센스 쉐어링",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[풀 버스트 타임 지속 시간 5초 ▼]"]
                },
                {
                    activation_condition: "적 전체에게",
                    description: ["[공격력 399.6% 대미지]"]
                },
                {
                    activation_condition: "자신이 페인 로드 2 상태라면 적 전체에게",
                    description: ["[공격력 266.4% 추가 대미지]"]
                }
            ]
        }
    ]
}
export const n102: NikkeInfo = {
    company: "missilis",
    grade: "SR",
    squad: "리콜 & 릴리즈",
    class: "지원형",
    enName: "n102",
    krName: "N102",
    bustType: 3,
    property: "수냉",
    fullBodyImage: N102FullBodyShot,
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1.5초",
            "풀 차지 대미지: 350% 대미지",
        ]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "노트 위의 기억",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 공격력이 가장 높은 아군 1기에게",
                    description: [
                        "[최대 장탄수 3발 ▲] [10초 유지]",
                        "[크리티컬 대미지 10.34% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            cooldown_time: 15,
            name: "부상하는 기억",
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 1기에게",
                    description: ["[차지 대미지 25.84% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "파란 나비의 기억",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[공격력 25.86% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const ether: NikkeInfo = {
    company: "missilis",
    grade: "SR",
    squad: "M.M.R",
    class: "방어형",
    enName: "ether",
    krName: "에테르",
    bustType: 3,
    property: "전격",
    fullBodyImage: EtherFullBodyShot,
    attack: {
        gun_type: "샷건",
        max_shots: 9,
        reload_time: 2,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 214.3% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "노트 위의 기억",
            detail: [
                {
                    activation_condition: "부식물질 탑재탄환",
                    description: [
                        "[체력이 가장 낮은 아군 1기에게]",
                        "[받는 대미지 52.5% ▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "예후 반응 실험",
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 3기에게",
                    description: ["[공격력 56.32% 대미지]"]
                },
                {
                    activation_condition: "풀 버스트 타임 지속 시간 중 발동 시 동일 적 대상에게",
                    description: ["[방어력 9.38% ▼] [6초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "초거대 단세포",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 아군 3기에게",
                    description: ["[시전자 최대 체력 비례 96% 보호막] [5초 유지]"]
                }
            ]
        }
    ]
}
export const product08: NikkeInfo = {
    company: "missilis",
    grade: "R",
    squad: "리플레이스",
    class: "지원형",
    enName: "Product 08",
    krName: "Product 08",
    bustType: 1,
    property: "전격",
    fullBodyImage: Product08FullBodyShot,
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
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "전술: 장갑 보강",
            detail: [
                {
                    activation_condition: "일반 공격 명중 시 20% 확률로 체력이 가장 낮은 아군 1기에게",
                    description: ["[방어력 9.09% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "전술: 정밀 사격",
            cooldown_time: 17,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 1기에게",
                    description: ["[크리티컬 확률 22.99% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "전술: 출력 상승",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[공격력 19.39% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const product12: NikkeInfo = {
    company: "missilis",
    grade: "R",
    squad: "리플레이스",
    class: "화력형",
    enName: "Product 12",
    krName: "Product 12",
    bustType: 3,
    property: "작열",
    fullBodyImage: Product12FullBodyShot,
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2.67,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 5.67% 대미지]"]
    },
    skills:[
        {
            order_type: "one",
            type: "패시브",
            name: "행동: 공격 상승",
            detail: [
                {
                    activation_condition: "일반 공격 2회 공격 시 자신에게",
                    description: ["[공격력 8.28%▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "행동: 화력 집중",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 적 1기에게",
                    description: ["[공격력 109.09% 대미지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "행동: 정밀 타격",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: ["[공격력 720% 대미지]"]
                }
            ]
        }
    ]
}
export const product23: NikkeInfo = {
    company: "missilis",
    grade: "R",
    squad: "리플레이스",
    class: "지원형",
    enName: "Product 23",
    krName: "Product 23",
    bustType: 3,
    property: "풍압",
    fullBodyImage: Product23FullBodyShot,
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
            name: "명령: 출력 보강",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: ["[방어력 8.1% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "명령: 응급 조치",
            cooldown_time: 15,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[공격 대미지 비례 16.15% 회복] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "명령: 특수 탄환",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 2기에게",
                    description: ["[방어력 48.75% ▼] [5초 유지]"]
                }
            ]
        }
    ]
}
// tetra
export const sugar: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "카페 스위티",
    class: "화력형",
    enName: "sugar",
    krName: "슈가",
    bustType: 3,
    fullBodyImage: SugarFullBodyShot,
    property: "철갑",
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
            name: "블랙 타이푼",
            detail: [
                {
                    activation_condition: "엄폐물 피격 시 20% 확률로 자신에게",
                    description: [
                        "[크리티컬 대미지 16.39% ▲] [10초 유지]",
                        "[재장전 속도 12.12% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "느와르 센서",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: ["[크리티컬 확률 13.02%▲] [10초 유지]"]
                },
                {
                    activation_condition: "풀 버스트 타임 시작 시 샷건 소지 아군 전체에게",
                    description: ["[최대 장탄 수 83.8% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "트러불 슈터",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[공격 속도 66% ▲] [15초 유지]", 
                        "[명중률 33%▲] [15초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const exia: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "프로토콜",
    class: "지원형",
    enName: "exia",
    krName: "엑시아",
    bustType: 1,
    fullBodyImage: ExiaFullBodyShot,
    property: "전격",
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
            name: "인베이젼",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신이 해킹 코드 수집 상태라면 대상에게",
                    description: [
                        "[공격력 13.77% ▼] [5초 유지]",
                        "[방어력 13.77% ▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "시크릿 코드",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 자신에게",
                    description: [
                        "[공격력 13.77% ▼] [5초 유지]",
                        "[방어력 13.77% ▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "원사이드 프로토콜",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 10기에게",
                    description: [
                        "[공격력 122.32% 대미지]", 
                        "[방어력 2.71% ▼] [5초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const alice: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "언리미티드",
    class: "지원형",
    enName: "alice",
    krName: "앨리스",
    bustType: 3,
    fullBodyImage: AliceFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 69.04% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 350% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "힘나는 당근",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[차지 속도 11.67% ▲] [10초 유지]",
                        "[차지 대미지 7% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "건강한 당근",
            detail: [
                {
                    activation_condition: "자신의 체력이 80% 이상이라면 자신에게",
                    description: ["[관통 특화] [지속]"]
                },
                {
                    activation_condition: "자신의 체력이 80% 미만이라면 자신에게",
                    description: ["[공격 대미지 비례 8.12% 회복] [지속]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "신기하고 이상한 나라",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[차지 속도 80.15% ▲] [10초 유지]", 
                        "[공격력 55.12% ▲] [10초 유지]"
                    ]
                }
            ]
        }
    ],
}
export const frima: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "카페 스위티",
    class: "지원형",
    enName: "frima",
    krName: "프림",
    bustType: 1,
    fullBodyImage: FrimaFullBodyShot,
    property: "철갑",
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 1.5,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 65.95% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "...자고 싶다",
            detail: [
                {
                    activation_condition: "일반 공격 4회 명중 시 대상에게",
                    description: ["[방어력 15.84% ▼] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "...아",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 아군 전체에게",
                    description: ["[최대 체력 6.09% ▲] [4초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "...귀찮아",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 10기에게",
                    description: [
                        "[공격력 101.66% 대미지]", 
                        "[방어력 9.86% ▼] [10초 유지]"
                    ]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[최대 체력 30.26% ▲] [4초 유지]"]
                }
            ]
        }
    ],
}
export const mary: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "세라핌",
    class: "지원형",
    enName: "mary",
    krName: "메어리",
    bustType: 1,
    fullBodyImage: MaryFullBodyShot,
    property: "수냉",
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
            name: "CPR",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게",
                    description: ["[시전자 최대 체력 비례 8.4% 회복]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "너싱",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[체력 회복량 23.78% ▲]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "백의의 천사",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신의 체력이 50% 이상이라면 아군 전체에게",
                    description: ["[방어력 19.8% ▲] [10초 유지]"]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 39.6% 회복]"]
                }
            ]
        }
    ],
}
export const milk: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "카페 스위티",
    class: "화력형",
    enName: "milk",
    krName: "밀크",
    bustType: 1,
    fullBodyImage: MilkFullBodyShot,
    property: "수냉",
    attack: {
        gun_type: "저격소총",
        max_shots: 9,
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
            type: "액티브",
            name: "승부욕",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: ["[공격력 31.83% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "밀크 도핑",
            detail: [
                {
                    activation_condition: "자신의 체력이 80% 이상일 때 한하여 아군 전체에게",
                    description: ["[크리티컬 대미지 11.13% ▲] [지속]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "투 더 빅토리",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["[공격력 367.34% 대미지]"]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[공격력 대미지 비례 16.16% 회복] [10초 유지]"]
                }
            ]
        }
    ],
}
export const yulha: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "트라이앵글",
    class: "화력형",
    enName: "yulha",
    krName: "율하",
    bustType: 3,
    fullBodyImage: YulhaFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "저격소총",
        max_shots: 6,
        reload_time: 1.87,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 68.23% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "바이팅 리더십",
            detail: [
                {
                    activation_condition: "30회 피격 시 자신에게",
                    description: ["[평정심: 크리티컬 확률 24.53% ▲] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "위크 메이커",
            cooldown_time: 30,
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 아군 5기에게",
                    description: [
                        "[공격력 90.75% ▲] [5초 유지]",
                        "[피격 대미지 분배] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "히스테릭 워커",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: ["[공격력 457.87% 대미지]"]
                },
                {
                    activation_condition: "자신이 평정심 상태라면 동일 적 대상에게",
                    description: ["[공격력 457.87% 대미지]"]
                }
            ]
        }
    ],
}
export const ludmila: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "언리미티드",
    class: "방어형",
    enName: "ludmila",
    krName: "루드밀라",
    bustType: 1,
    fullBodyImage: LudmilaFullBodyShot,
    property: "수냉",
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 2.76,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 10.32% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "노블레스 오블리주",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 대상에게",
                    description: [
                        "[방어력 8.4% ▼] [10초 유지]",
                        "[공격력 8.4% ▼] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "여왕의 품격",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 적 전체에게",
                    description: ["[도발] [15.09초 유지]"]
                },
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: ["[받는 대미지 57.86% ▼] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "눈의 여왕",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 10기에게",
                    description: ["[공격력 163.1% 대미지]"]
                },
                {
                    activation_condition: "자신의 체력이 50% 이상이라면 아군 전체에게",
                    description: ["[방어력 12.93% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const rupee: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "달란트",
    class: "화력형",
    enName: "rupee",
    krName: "루피",
    bustType: 2,
    fullBodyImage: RupeeFullBodyShot,
    property: "철갑",
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
            name: "프라이즈",
            detail: [
                {
                    activation_condition: "일반 공격 100회 명중 시 철갑 코드 아군 전체에게",
                    description: [
                        "[중첩 가능 이로운 효과 중첩량 1개 ▲]",
                        "[크리티컬 확률 2.24% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "마일리지",
            detail: [
                {
                    activation_condition: "30회 공격 시 자신에게",
                    description: ["[마일리지: 공격력 13.8% ▲] [5중첩] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "싱글 페이먼트",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: ["[공격력 274.28% 대미지]"]
                },
                {
                    activation_condition: "자신이 마일리지 최대 중첩 상태라면 아군 전체에게",
                    description: ["[공격력 19.8% ▲] [5초 유지]"]
                }
            ]
        }
    ]
}
export const yan: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "달란트",
    class: "지원형",
    enName: "yan",
    krName: "얀",
    bustType: 1,
    fullBodyImage: YanFullBodyShot,
    property: "작열",
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1.5초",
            "풀 차지 대미지: 350% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "풍비박산",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[차지 대미지 21.55% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "다다익선",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 아군 전체에게",
                    description: [
                        "[공격력 2.77% ▲] [5초 유지]",
                        "[크리티컬 확률 1.33% ▲] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "일확천금",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격범위 내 적들에게",
                    description: [
                        "[공격력 348.73% 대미지]",
                        "[공격범위 중심으로 강제 이동] [2초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const dolla: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "달란트",
    class: "지원형",
    enName: "dolla",
    krName: "도라",
    bustType: 2,
    fullBodyImage: DollaFullBodyShot,
    property: "풍압",
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
            type: "액티브",
            name: "기업가 정신",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[공격력 16.16% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "리스크 공유",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: [
                        "[시작 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [버스트 스킬 재사용 시간 1.82초 ▼]",
                        "2회: [버스트 스킬 재사용 시간 2.2초 ▼]",
                        "3회: [버스트 스킬 재사용 시간 2.6초 ▼]"
                    ]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 아군 전체에게",
                    description: [
                        "[시작 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [공격력 7.72% ▲] [5초 유지]",
                        "2회: [크리티컬 확률 4.21% ▲] [5초 유지]",
                        "3회: [크리티컬 대미지 13.22% ▲] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "R&D 샷",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 1기에게",
                    description: ["[공격력 734.69% 대미지]"]
                }
            ]
        }
    ]
}
export const novel: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "프로토콜",
    class: "방어형",
    enName: "novel",
    krName: "노벨",
    bustType: 2,
    fullBodyImage: NovelFullBodyShot,
    property: "철갑",
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
            type: "액티브",
            name: "수상한 것입니다!",
            cooldown_time: 10,
            detail: [
                {
                    activation_condition: "방어력이 가장 높은 적 3기에게",
                    description: [
                        "[공격력 52.36% 대미지]",
                        "[방어력 7.05% ▼] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "탐정 도구인 것입니다!",
            detail: [
                {
                    activation_condition: "일반 공격 100회 명중 시 자신에게",
                    description: ["[증거품 수집 : 방어력 13.5% ▲] [5 중첩] [15초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "사건 해결인 것입니다!",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 330.61% 대미지]"]
                },
                {
                    activation_condition: "자신의 증거품 수집 최대 중첩 상태라면 추가로 적 1기에게",
                    description: ["[받는 대미지 67.5% ▲] [5초 유지]"]
                }
            ]
        }
    ]
}
export const folkwang: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "라이프 토닉",
    class: "방어형",
    enName: "folkwang",
    krName: "폴크방",
    bustType: 2,
    fullBodyImage: FolkwangFullBodyShot,
    property: "수냉",
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
            type: "액티브",
            name: "스타팅 휘슬",
            cooldown_time: 30,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[시전자 최대 체력 비례 13.71% 보호막] [10초 유지]",
                        "[체력 회복량 45.7% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "페이스 다운",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[도발] [5초 유지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[최대 체력 44.96% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "스플린트",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[시전자 최대 체력 비례 32.9% 보호막] [10초 유지]",
                        "[공격 대미지 비례 65.81% 회복] [10초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const aria: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "프리마돈나",
    class: "화력형",
    enName: "aria",
    krName: "아리아",
    bustType: 2,
    fullBodyImage: AriaFullBodyShot,
    property: "수냉",
    attack: {
        gun_type: "머신건",
        max_shots: 300,
        reload_time: 2.33,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 5.47% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "알레그로",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 아군 전체에게",
                    description: ["[크리티컬 대미지 26.99%▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "라크리모소",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 아군 전체에게",
                    description: ["[크리티컬 확률 7.03% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "아리아 디 캄포",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 37.86% 보호막] [10초 유지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[명중률 30.37% ▲] [15초 유지]"]
                }
            ]
        }
    ]
}
export const noise: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "프리마돈나",
    class: "지원형",
    enName: "noise",
    krName: "노이즈",
    bustType: 1,
    fullBodyImage: NoiseFullBodyShot,
    property: "전격",
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
            name: "코러스",
            detail: [
                {
                    activation_condition: "20회 피격 시 아군 전체에게",
                    description: ["[피격 대미지 10.66% ▼] [20초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "싱잉 투게더",
            detail: [
                {
                    activation_condition: "풀 차지 공격 시 대상에게",
                    description: ["[도발] [2초 유지]"]
                },
                {
                    activation_condition: "자신에게",
                    description: ["[최대 체력 15.16% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "에너제틱 노이즈",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 2.47% 지속 회복] [1초 간격] [10초 유지]"]
                }
            ]
        }
    ]
}
export const volume: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "프리마돈나",
    class: "화력형",
    enName: "volume",
    krName: "볼륨",
    bustType: 1,
    fullBodyImage: VolumeFullBodyShot,
    property: "풍압",
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.73% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "프리스타일",
            detail: [
                {
                    activation_condition: "적 처치 시 자신에게",
                    description: ["[공격력 12.6% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "드랍 더 비트",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: [
                        "[시작 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [버스트 스킬 재사용 시간 2.34초 ▼]",
                        "2회: [버스트 스킬 재사용 시간 2.7초 ▼]",
                        "3회: [버스트 스킬 재사용 시간 3.17초 ▼]"
                    ]
                },
                {
                    activation_condition: "버스트 스킬 사용 시 아군 전체에게",
                    description: [
                        "[시작 횟수 별 효과] [하위 효과 중복 적용]:",
                        "1회: [크리티컬 대미지 10.77% ▲] [5초 유지]",
                        "2회: [크리티컬 대미지 12.46% ▲] [5초 유지]",
                        "3회: [크리티컬 대미지 14.42% ▲] [5초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "볼륨 업, 가이즈!",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[크리티컬 확률 31.9% ▲] [5초 유지]"]
                }
            ]
        }
    ]
}
export const rupee_winterShopper: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "달란트",
    class: "방어형",
    enName: "rupee: Winter Shopper",
    krName: "루피: 윈터 쇼퍼",
    bustType: 1,
    fullBodyImage: Rupee_winterShopperFullBodyShot,
    property: "전격",
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
            name: "윈터 프리미엄",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 아군 전체에게",
                    description: ["[방어력 19.02% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "VIP 기프트",
            detail: [
                {
                    activation_condition: "아군이 버스트 스킬 사영 시 아군 전체에게",
                    description: ["[쇼핑: 방어력 1.33% ▲] [4중첩] [20초 유지]"]
                },
                {
                    activation_condition: "풀 버스트 타임 종료 시 자신이 쇼핑 최대 중첩 상태라면 아군전체에게",
                    description: ["[버스트 게이지 충전 속도 7.9% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "쇼퍼홀릭 데이트",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[주목 : 적 전체 도발] [5초 유지]",
                        "[공격 데미지 비례 50.47% 회복] [10초 유지]"
                    ]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[재장전 속도 63.17% ▲] [10초유지] [버스트 1단계 재진입]"]
                }
            ]
        }
    ]
}
export const viper: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "이그조틱",
    class: "화력형",
    enName: "viper",
    krName: "바이퍼",
    bustType: 2,
    fullBodyImage: ViperFullBodyShot,
    property: "수냉",
    attack: {
        gun_type: "샷건",
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
            name: "스네이크 센스",
            detail: [
                {
                    activation_condition: "타겟이 출현했다면 아군 전체에게",
                    description: [
                        "[공격력 25.98% ▲] [10초 유지]",
                        "[명중률 11.13% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "스네이크 스케일",
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[명중률 3.43% ▲] [지속]"]
                },
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: [
                        "[애교 : 1인 공격 대상에서 제외. 직접 피격 시 해제] [10초 유지]",
                        "[무적] [1초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "스네이크 바이트",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "지정한 적 대상 1기에게",
                    description: ["[공격력 462.85% 대미지]"]
                },
                {
                    activation_condition: "대상이 타겟이라면 동일 적 대상에게",
                    description: ["[방어력 19.83% ▲] [10초유지]"]
                }
            ]
        }
    ]
}
export const cocoa: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "메이드 포 유",
    class: "지원형",
    enName: "cocoa",
    krName: "코코아",
    bustType: 1,
    fullBodyImage: CocoaFullBodyShot,
    property: "작열",
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
            name: "프로 종이접기",
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[엄폐물 체력 17.76% 회복]"]
                },
                {
                    activation_condition: "해로운 효과 소지 아군 중 무작위 아군 2기에게",
                    description: ["[해로운 효과 1개 해제]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "프로 케첩",
            detail: [
                {
                    activation_condition: "풀차지 공격 시 자신에게",
                    description: ["[프로 케첩 : 피격 대미지 4.37% ▼] [15 중첩] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "프로 메이드장",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[해로운 효과 1개 해제]"]
                },
                {
                    activation_condition: "자신이 프로 케첩 최대 중첩 상태라면 적 전체에게",
                    description: ["[공격력 13.59% ▼] [10초 유지]"]
                }
            ]
        }
    ]
}
export const soda: NikkeInfo = {
    company: "tetra",
    grade: "SSR",
    squad: "메이드 포 유",
    class: "지원형",
    enName: "soda",
    krName: "소다",
    bustType: 1,
    fullBodyImage: CocoaFullBodyShot,
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
            name: "자리 청소 메이드",
            detail: [
                {
                    activation_condition: "일반 공격 180회 공격 시 자기 자신에게",
                    description: ["[메이드정신 : 최대 체력 13% ▲] [5 중첩] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "바닥 청소 메이드",
            cooldown_time: 12,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 3.23% 회복]"]
                },
                {
                    activation_condition: "자신이 메이드 정신 최대 중첩 상태라면 아군 전체에게",
                    description: ["[시전자 최대 체력 비례 12.71% 회복]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "대청소 메이드",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "무작위 적 2기에게",
                    description: ["[공격력 321.28% 대미지] [기절] [1초 유지]"]
                },
                {
                    activation_condition: "작열 코드 아군 전체에게",
                    description: ["[중첩 가능 이로운 효과 중첩량 ▲]"]
                }
            ]
        }
    ]
}
export const anis: NikkeInfo = {
    company: "tetra",
    grade: "SR",
    squad: "카운터스",
    class: "방어형",
    enName: "anis",
    krName: "아니스",
    bustType: 2,
    fullBodyImage: AnisFullBodyShot,
    property: "철갑",
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2.03,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 65.02% 대미지]",
            "차지 시간: 1초",
            "풀 차지 대미지: 250% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "포메이션 D.H",
            detail: [
                {
                    activation_condition: "40회 피격 시 자신에게",
                    description: ["[방어력 120% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "포메이션 C.H",
            cooldown_time: 30,
            detail: [
                {
                    activation_condition: "자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[방어력 80% ▲] [5초 유지]",
                        "[피격 대미지 분배] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "핀 포인트 미사일",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: [
                        "[공격력 156.73% 대미지]",
                        "[방어력 32% ▼] [5초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const belorta: NikkeInfo = {
    company: "tetra",
    grade: "SR",
    squad: "리틀 캐논",
    class: "화력형",
    enName: "belorta",
    krName: "벨로타",
    bustType: 2,
    fullBodyImage: BelortaFullBodyShot,
    property: "전격",
    attack: {
        gun_type: "런처",
        max_shots: 6,
        reload_time: 2,
        operation_type: "차지형",
        activation_condition: "대상에게",
        description: [
            "[공격력 61.3% 대미지]",
            "차지 시간: 1.5초",
            "풀 차지 대미지: 350% 대미지"
        ]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "서프라이즈",
            detail: [
                {
                    activation_condition: "풀 차지 공격 명중 시 자신에게",
                    description: ["[폭발범위 9.55%▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "그리디",
            cooldown_time: 30,
            detail: [
                {
                    activation_condition: "일반 공격 시 4기 이상을 동시에 명중시켰다면 대상에게",
                    description: [
                        "[방어력 3.52% ▼] [5초 유지]",
                        "[공격력 14.96% 추가 대미지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "트릭키 봄버",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격 범위 내 적들에게",
                    description: ["[공격력 192% 대미지]"]
                },
                {
                    activation_condition: "아군 전체에게",
                    description: ["[차지 속도 2.82% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}
export const mica: NikkeInfo = {
    company: "tetra",
    grade: "SR",
    squad: "리틀 캐논",
    class: "지원형",
    enName: "mica",
    krName: "미카",
    bustType: 1,
    fullBodyImage: MicaFullBodyShot,
    property: "풍압",
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
            name: "맛있는 별님",
            detail: [
                {
                    activation_condition: "20회 피격 시 자신에게",
                    description: ["[방어력 39.18% ▲] [10초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "용감한 별님",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 아군 2기에게",
                    description: [
                        "[최대 장탄 수 2발 ▲] [10초 유지]",
                        "[방어력 19.89% ▲] [10초 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "반짝반짝 별님",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "적 전체에게",
                    description: [
                        "[공격력 152.22% 대미지]",
                        "[방어력 13.32% ▼] [5초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const neve: NikkeInfo = {
    company: "tetra",
    grade: "SR",
    squad: "언리미티드",
    class: "화력형",
    enName: "neve",
    krName: "네베",
    bustType: 3,
    fullBodyImage: NeveFullBodyShot,
    property: "수냉",
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
            name: "북극곰의 힘",
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 1기에게",
                    description: ["[공격력 145.45% 대미지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "북극곰의 겨울잠",
            detail: [
                {
                    activation_condition: "풀 버스트 타임 시작 시 자신에게",
                    description: [
                        "[관통 특화] [2발 유지]",
                        "[공격력 124.8% ▲] [2발 유지]"
                    ]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "북극곰의 포효",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: [
                        "[크리티컬 확률 31.95% ▲] [20초 유지]",
                        "[명중 22.04% ▲] [20초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const idollFlower: NikkeInfo = {
    company: "tetra",
    grade: "R",
    squad: "리플레이스",
    class: "방어형",
    enName: "iDoll Flower",
    krName: "idoll 플라워",
    bustType: 2,
    fullBodyImage: IdollFlowerFullBodyShot,
    property: "풍압",
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
            name: "플라워 리프",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 대상에게",
                    description: ["[공격력 16.52%▼] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "플라워 컬러",
            cooldown_time: 15,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: ["[공격력 39.37%▼] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "플라워 퍼퓸",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "공격력이 가장 높은 적 1기에게",
                    description: [
                        "[공격력 330.61% 대미지]",
                        "[도발] [2초 유지]"
                    ]
                }
            ]
        }
    ]
}
export const idollOcean: NikkeInfo = {
    company: "tetra",
    grade: "R",
    squad: "리플레이스",
    class: "지원형",
    enName: "iDoll Ocean",
    krName: "idoll 오션",
    bustType: 1,
    fullBodyImage: IdollOceanFullBodyShot,
    property: "수냉",
    attack: {
        gun_type: "기관단총",
        max_shots: 120,
        reload_time: 1.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 8.73% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "오션 샤워",
            detail: [
                {
                    activation_condition: "마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게",
                    description: ["[시전자 최대 체력 비례 4.86% 회복]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "액티브",
            name: "오션 클렌징",
            cooldown_time: 15,
            detail: [
                {
                    activation_condition: "체력이 가장 낮은 아군 1기에게",
                    description: ["[시전자 최대 체력 비례 9.69% 회복]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "오션 다이브",
            cooldown_time: 20,
            detail: [
                {
                    activation_condition: "아군 전체에게",
                    description: ["[시전자 최대 체력 비례 29.7% 회복]"]
                }
            ]
        }
    ]
}
export const idollSun: NikkeInfo = {
    company: "tetra",
    grade: "R",
    squad: "리플레이스",
    class: "지원형",
    enName: "iDoll Sun",
    krName: "idoll 썬",
    bustType: 3,
    fullBodyImage: IdollSunFullBodyShot,
    property: "철갑",
    attack: {
        gun_type: "소총",
        max_shots: 60,
        reload_time: 1.5,
        operation_type: "일반형",
        activation_condition: "대상에게",
        description: ["[공격력 14.71% 대미지]"]
    },
    skills: [
        {
            order_type: "one",
            type: "패시브",
            name: "썬샤인",
            detail: [
                {
                    activation_condition: "일반 공격 10회 명중 시 자신에게",
                    description: ["[방어력 7.56% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "two",
            type: "패시브",
            name: "썬라이트",
            detail: [
                {
                    activation_condition: "피격 시 20% 확률로 자신에게",
                    description: ["[공격력 9.09% ▲] [5초 유지]"]
                }
            ]
        },
        {
            order_type: "bust",
            type: "액티브",
            name: "썬셋",
            cooldown_time: 40,
            detail: [
                {
                    activation_condition: "자신에게",
                    description: ["[최대 장탄 수 787.5% ▲] [10초 유지]"]
                }
            ]
        }
    ]
}


const nikkesArray: NikkeInfo[] =
    [
        // elysion
        // SSR
        emma, eunhwa, vesti,
        privaty, signal, 
        poli, miranda,
        brid, soline, diesel,
        guillotine, maiden, 
        helm,
        // SR
        rapi, neon, delta,
        // R
        soldierEG, soldierOW, soldierFA,

        // misilis
        // SSR
        liter, centi,
        maxwell, drake, laplace,
        yuni,
        julia, 
        crow, jackal,
        pepper, admi,
        epinel, 
        anne_miracleFairy,
        guilty, sin, quency,
        // SR
        mihara, n102, ether,
        // R
        product08, product12, product23,

        // tetra
        // SSR
        sugar,
        exia, novel,
        alice, ludmila,
        frima, milk,
        mary,
        yulha,
        rupee, yan, dolla, rupee_winterShopper,
        folkwang,
        aria, noise, volume,
        viper,
        cocoa, soda,
        // SR
        anis, belorta, mica, neve,
        // R
        idollFlower, idollOcean, idollSun
    ]
export default nikkesArray;


export const nikkesObject: {
    [index: string]: NikkeInfo,
} = {
    // elysion
    // SSR
    emma, eunhwa, vesti,
    privaty, signal,
    poli, miranda,
    brid, soline, diesel,
    guillotine, maiden,
    helm,
    // SR
    rapi, neon, delta,
    // R
    soldierEG, soldierOW, soldierFA,

    // misilis
    // SSR
    liter, centi,
    maxwell, drake, laplace,
    yuni,
    julia,
    crow, jackal,
    pepper, admi,
    epinel,
    anne_miracleFairy,
    guilty, sin, quency,
    // SR
    mihara, n102, ether,
    // R
    product08, product12, product23,

    // tetra
    // SSR
    sugar,
    exia, novel,
    alice, ludmila,
    frima, milk,
    mary,
    yulha,
    rupee, yan, dolla, rupee_winterShopper,
    folkwang,
    aria, noise, volume,
    viper,
    cocoa, soda,
    // SR
    anis, belorta, mica, neve,
    // R
    idollFlower, idollOcean, idollSun
}


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