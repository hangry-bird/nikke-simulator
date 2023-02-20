import create from 'zustand';
import { NikkeInfo_Light } from '@src/datas/interfaces';
import { pilgrimNikkes, ssrDrawNikkes, srDrawNikkes, rDrawNikkes } from '@src/datas';


const SSR_PERCENTAGE = 0.034995 // 4%
const SR_PERCENTAGE = 0.43 // 47%
const R_PERCENTAGE = 0.53 // 47%
const PILGRIM_PERCENTAGE = 0.004998 // 0.4%


const gradeDraw = () => {
  const randomNumber = Math.random();

  if (randomNumber < PILGRIM_PERCENTAGE) {
    return 'PILGRIM'
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
  const targetNikkes = grade === "PILGRIM" ? pilgrimNikkes : grade === "SSR" ? ssrDrawNikkes : grade === "SR" ? srDrawNikkes : rDrawNikkes;
  const randomIndex = Math.floor(Math.random() * targetNikkes.length);

  return targetNikkes[randomIndex]
}


interface DrawState {
  totalDrawCount: number;
  ssrProbabilityCount: number;
  pilgrimProbabilityCount: number;

  populateDrawList: NikkeInfo_Light[];

  setRandomDraw: () => void;
  setTenRandomDraw: () => void;
}

const useCounter = create<DrawState>(set => ({
  totalDrawCount: 0,
  ssrProbabilityCount: 0,
  pilgrimProbabilityCount: 0,

  populateDrawList: [],


  setRandomDraw: () => set(state => {
    const grade = gradeDraw();
    const drawNikke = [convertGradeToNikke(grade)]

    const totalDrawCount = state.totalDrawCount + 1;
    const ssrProbabilityCount = state.ssrProbabilityCount + ((grade === "SSR" || grade === "PILGRIM") ? 1 : 0);
    const pilgrimProbabilityCount = state.pilgrimProbabilityCount + (grade === "PILGRIM" ? 1 : 0);

    return { 
      ...state,
      totalDrawCount: totalDrawCount,
      ssrProbabilityCount: ssrProbabilityCount,
      pilgrimProbabilityCount: pilgrimProbabilityCount,
      populateDrawList: drawNikke 
    }
  }),

  setTenRandomDraw: () => set(state => {
    let totalDrawCount = 10;
    let ssrCount = 0;
    let pilgrimCount = 0;

    const randomDrawList = Array(10).fill(undefined).map(_ => {
      const grade = gradeDraw();
      const drawNikke = convertGradeToNikke(grade);

      ssrCount += (grade === "SSR" || grade === "PILGRIM") ? 1 : 0;
      pilgrimCount += grade === "PILGRIM" ? 1 : 0

      return drawNikke;
    })
    return { 
      ...state, 
      totalDrawCount: state.totalDrawCount + totalDrawCount,
      ssrProbabilityCount: state.ssrProbabilityCount + ssrCount,
      pilgrimProbabilityCount: state.pilgrimProbabilityCount + pilgrimCount,
      populateDrawList: randomDrawList 
    }
  })
}));

export default useCounter;