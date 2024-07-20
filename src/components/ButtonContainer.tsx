import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ButtonContainerProps } from "../types/ButtonContainerProps";
import CountButton from "./CountButton";
const ButtonContainer = ({ locked, count, setCount }: ButtonContainerProps) => {
  return (
    <div className="button-container">
      <CountButton
        count={count}
        type="minus"
        setCount={setCount}
        locked={locked}
      />
      <CountButton
        count={count}
        type="plus"
        setCount={setCount}
        locked={locked}
      />
    </div>
  );
};
export default ButtonContainer;
