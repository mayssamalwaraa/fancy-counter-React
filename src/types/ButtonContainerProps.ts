import { Dispatch, SetStateAction } from "react";

export type ButtonContainerProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
