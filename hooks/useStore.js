import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useStore = create(set => ({
  appartmentLat: null,
  appartmentLng: null,
  changeCoordinates: (appartmentLat, appartmentLng) =>
    set({ appartmentLat, appartmentLng })
}));

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}

export default useStore;
