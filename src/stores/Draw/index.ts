import create from 'zustand';
import { NikkeInfo_Light } from '@src/datas/interfaces';
import { ssrNikkes, srNikkes, rNikkes } from '@src/datas';

const gradeDraw = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.04) {
    return 'SSR';
  } else if (randomNumber < 0.47) {
    return 'SR';
  } else {
    return 'R';
  }
}

const convertGradeToNikke = (grade: "SSR" | "SR" | "R") => {
  const targetNikkes = grade === "SSR" ? ssrNikkes : grade === "SR" ? srNikkes : rNikkes;
  const randomIndex = Math.floor(Math.random() * targetNikkes.length);

  return targetNikkes[randomIndex]
}


interface DrawState {
  populateDrawList: NikkeInfo_Light[]

  setRandomDraw: () => void;
  setTenRandomDraw: () => void;
}

const useCounter = create<DrawState>(set => ({
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