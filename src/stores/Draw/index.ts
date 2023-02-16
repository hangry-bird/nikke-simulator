import create from 'zustand';
import { NikkeInfo } from '@src/datas/interfaces';
import nikkesArray from '@src/datas';


interface DrawState {
    randomDraw: string[]

    setRandomDraw: () => void;
}

const useCounter = create<DrawState>(set => ({
    randomDraw: [],

    setRandomDraw: () => set(state => {
        const randomDraw = Array(10).fill(undefined).map(_ => {
            const randomNumber = Math.random();
            if (randomNumber < 0.04) {
              return 'SSR';
            } else if (randomNumber < 0.47) {
              return 'SR';
            } else {
              return 'R';
            }
        })
        return { ...state, randomDraw: randomDraw }
    })
}));

export default useCounter;