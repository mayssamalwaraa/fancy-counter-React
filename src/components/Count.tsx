import { CardProps } from "../types/CardProps";

const Count = ({ count }: CardProps) => {
  return <p className="count">{count}</p>;
};
export default Count;
