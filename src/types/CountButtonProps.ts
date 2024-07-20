import { Dispatch, SetStateAction } from "react";

export type CountButtonProps = {
  type: String;
  setCount: Dispatch<SetStateAction<number>>;
};
