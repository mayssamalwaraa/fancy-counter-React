import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ButtonContainerProps } from "../types/ButtonContainerProps";
import CountButton from "./CountButton";
const ButtonContainer = ({ count, setCount }: ButtonContainerProps) => {
  return (
    <div className="button-container">
      <CountButton count={count} type="minus" setCount={setCount} />
      <CountButton count={count} type="plus" setCount={setCount} />
    </div>
  );
};
export default ButtonContainer;
