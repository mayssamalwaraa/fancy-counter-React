import { Dispatch, SetStateAction } from "react";

export type ButtonContainerProps = {
  locked: boolean;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};
