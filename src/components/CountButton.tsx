import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { CountButtonProps } from "../types/CountButtonProps";

const CountButton = ({ type, setCount }: CountButtonProps) => {
  const handleClick = () => {
    if (type === "minus") {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};
export default CountButton;
