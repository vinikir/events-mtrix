import { create } from 'zustand';
const useStoreBag = create((set) => ({

    bag: [],
    setBag: (newItem) => set((state) => ({
        bag: [...state.bag, newItem]
    })),
    removeItem: (ItemId) => {
        set({ bag: bag.filter((item) => item.id != ItemId) })
    },
    clearBag: () => set({ bag: [] })
}));

export default useStoreBag;