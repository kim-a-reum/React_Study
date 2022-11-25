import { atom } from "recoil";

export const deptRecoilState = atom({
  key: "deptRecoilState",
  default: "",
});

export const renderRecoilState = atom({
  key: "renderRecoilState",
  default: false,
});
