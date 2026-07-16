import { MetaState } from "@/types/interface/meta.interface";
import { create } from "zustand";

export const useMetaStore = create<MetaState>((set) => ({
  metadata: null,

  activeTab: "facebook",

  setMetadata: (data) =>
    set({
      metadata: data,
    }),

  updateField: (key, value) =>
    set((state) => ({
      metadata: state.metadata
        ? {
            ...state.metadata,
            [key]: value,
          }
        : null,
    })),

  setActiveTab: (tab) =>
    set({
      activeTab: tab,
    }),
}));