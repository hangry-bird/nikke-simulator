import create from 'zustand';
import { NikkeInfo } from '@src/datas/interfaces';


interface MainState {
    squadNikkes: NikkeInfo[];

    addNikke: (nikke: NikkeInfo) => void;
    deleteNikke: (index: number) => void;
}

const useCounter = create<MainState>(set => ({
    squadNikkes: [],
    addNikke: (nikke: NikkeInfo) => set(state => ({ squadNikkes: [...state.squadNikkes, nikke]  })),
    deleteNikke: (index: number) => set(state => {
        const tempNikkes = [...state.squadNikkes]
        tempNikkes.splice(index, 1);
        return { ...state, squadNikkes: tempNikkes }
    }),
}));

export default useCounter;