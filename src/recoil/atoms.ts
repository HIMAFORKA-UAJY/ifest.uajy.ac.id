import { atom } from "recoil";

export const navColors = atom({
  key: "navColors",
  default: {
    bg1: "",
    bg2: "",
    fg: "",
  },
});

export const cpColor = atom({
  key: "cpColor",
  default: {
    bg: "",
  },
});

export const footerColor = atom({
  key: "footerColor",
  default: {
    bg: "",
  },
});
