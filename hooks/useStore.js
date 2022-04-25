import create from "zustand";

const useStore = create(set => ({
  appartmentLat: null,
  appartmentLng: null,
  cards: [],
  exploreLocations: [],
  changeCoordinates: (appartmentLat, appartmentLng) =>
    set({ appartmentLat, appartmentLng }),
  setGlobalState: data => set({ ...data })
}));

export default useStore;
