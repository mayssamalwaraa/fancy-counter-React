import { Dispatch, SetStateAction } from "react";

export type CountButtonProps = {
  count: number;
  type: String;
  setCount: Dispatch<SetStateAction<number>>;
};
