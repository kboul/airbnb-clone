import create from "zustand";

const useStore = create(set => ({
  appartmentLat: null,
  appartmentLng: null,
  changeCoordinates: (appartmentLat, appartmentLng) =>
    set({ appartmentLat, appartmentLng })
}));

export default useStore;
