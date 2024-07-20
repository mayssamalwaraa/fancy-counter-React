import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { CountButtonProps } from "../types/CountButtonProps";

const CountButton = ({ type, count, setCount, locked }: CountButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (type === "minus") {
      if (count <= 0) return 0;
      setCount((prev) => prev - 1);
    } else {
      if (count >= 5) return 5;
      setCount((prev) => prev + 1);
    }
    // event.currentTarget.blur();
  };
  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};
export default CountButton;
