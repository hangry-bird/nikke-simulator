import create from 'zustand';

interface MainState {
    squadNikkes: Set<string>;
    popNikke: (enName: string) => void;
    removeNikke: (enName: string) => void;
    // increment: (value: number) => void;
    // decrement: () => void;
}

const useCounter = create<MainState>(set => ({
    squadNikkes: new Set<string>(),
    
    popNikke: (enName: string) => {
        set((state) => {
            state.squadNikkes.add(enName);
            return { ...state, squadNikkes: new Set(state.squadNikkes) };
        });
    },

    removeNikke: (enName: string) => {
        set((state) => {
            state.squadNikkes.delete(enName);
            return { ...state, squadNikkes: new Set(state.squadNikkes) };
        });
    },

    // popNikke: (enName: string) => set(state => ({ squadNikkes: [...state.squadNikkes, enName]  })),
    

    // increment: (value: number) => set(state => ({ count: state.count + value })),
    // decrement: () => set(state => ({ count: state.count - 1 }))
  
}));

export default useCounter;