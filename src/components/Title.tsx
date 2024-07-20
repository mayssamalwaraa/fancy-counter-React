import { TitleProps } from "../types/TitleProps";

const Title = ({ locked }: TitleProps) => {
  return <>{locked ? <h1>Limit Buy pro</h1> : <h1>Fancy Counter</h1>}</>;
};
export default Title;
