import { create } from 'zustand';
const useStore = create((set) => ({

	events: [],
	limit: 10,
	offset: 0,
	setEvents: (newEvents) => set({ events: newEvents }),
	setLimit: (newLimit) => set({ limit: newLimit }),
	setOffset: (newOffset) => set({ offset: newOffset })
	
}));

export default useStore;