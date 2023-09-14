import { create } from "zustand";

export const useStore = create((set) => ({
  productCart: [],
  selectedProduct: {},
  showPreviewProduct: false,
  showSideCart: true,
}));
