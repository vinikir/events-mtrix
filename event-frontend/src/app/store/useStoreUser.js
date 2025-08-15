import { create } from 'zustand';
const useStoreUser = create((set) => ({

    user: {},
    setUser: (user) => set({ user: user }),

}));

export default useStoreUser;