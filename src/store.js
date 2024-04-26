import { create } from 'zustand'

export const useExperience = create((set) => ({
    count: 100,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 < 0 ? 0 : state.count - 1})),
}))

