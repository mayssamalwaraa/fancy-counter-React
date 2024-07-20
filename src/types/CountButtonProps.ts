import { Dispatch, SetStateAction } from "react";

export type CountButtonProps = {
  locked: boolean;
  count: number;
  type: String;
  setCount: Dispatch<SetStateAction<number>>;
};
