import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ButtonContainerProps } from "../types/ButtonContainerProps";
import CountButton from "./CountButton";
const ButtonContainer = ({ setCount }: ButtonContainerProps) => {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount} />
      <CountButton type="plus" setCount={setCount} />
    </div>
  );
};
export default ButtonContainer;
