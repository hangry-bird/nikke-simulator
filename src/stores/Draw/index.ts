import create from 'zustand';
import { NikkeInfo_Light } from '@src/datas/interfaces';
import { pilgrimNikkes, ssrNikkes, srNikkes, rNikkes } from '@src/datas';


const SSR_PERCENTAGE = 0.034995 // 4%
const SR_PERCENTAGE = 0.43 // 47%
const R_PERCENTAGE = 0.53 // 47%
const PILGRIM_PERCENTAGE = 0.004998 // 0.4%


const gradeDraw = () => {
  const randomNumber = Math.random();

  if (randomNumber < PILGRIM_PERCENTAGE) {
    return 'PILFRIM'
  }
  else if (randomNumber < SSR_PERCENTAGE) {
    return 'SSR';
  } else if (randomNumber < SR_PERCENTAGE) {
    return 'SR';
  } else {
    return 'R';
  }
}


const convertGradeToNikke = (grade: string) => {
  const targetNikkes = grade === "PILGRIM" ? pilgrimNikkes : grade === "SSR" ? ssrNikkes : grade === "SR" ? srNikkes : rNikkes;
  const randomIndex = Math.floor(Math.random() * targetNikkes.length);

  return targetNikkes[randomIndex]
}


interface DrawState {
  totalDrawCount: number;
  ssrProbabilityPercent: number;
  pilgrimProbabilityPercent: number;

  populateDrawList: NikkeInfo_Light[];

  setRandomDraw: () => void;
  setTenRandomDraw: () => void;
}

const useCounter = create<DrawState>(set => ({
  totalDrawCount: 0,
  ssrProbabilityPercent: 0,
  pilgrimProbabilityPercent: 0,

  populateDrawList: [],

  setRandomDraw: () => set(state => {
    const grade = gradeDraw();
    const drawNikke = [convertGradeToNikke(grade)]
    return { ...state, populateDrawList: drawNikke }
  }),

  setTenRandomDraw: () => set(state => {
    const randomGradeList = Array(10).fill(undefined).map(_ => {
      const grade = gradeDraw();
      const drawNikke = convertGradeToNikke(grade)
      return drawNikke;
    })
    return { ...state, populateDrawList: randomGradeList }
  })
}));

export default useCounter;