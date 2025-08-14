import { create } from 'zustand';
const useStore = create((set) => ({

	events: [],
	limit: 10,
	offset: 0,
	showOptionsMore:true,
	showBtnToTop:false,
	setEvents: (newEvents) => set({ events: newEvents }),
	setLimit: (newLimit) => set({ limit: newLimit }),
	setOffset: (newOffset) => set({ offset: newOffset }),
	setSowOptionsMore: (newValue) => set({showOptionsMore:newValue}),
	setShowBtnToTop: (newValue) => set({showBtnToTop:newValue})
}));

export default useStore;