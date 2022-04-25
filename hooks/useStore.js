import create from "zustand";

const useStore = create(set => ({
  cards: [],
  exploreLocations: [],
  viewState: { longitude: 23, latitude: 37, zoom: 11 },
  setGlobalState: data => set({ ...data })
}));

export default useStore;
