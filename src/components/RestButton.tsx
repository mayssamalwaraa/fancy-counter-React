import { ResetIcon } from "@radix-ui/react-icons";
import { RestButtonProps } from "../types/RestButtonProps";

const RestButton = ({ setCount }: RestButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(0);
    event.currentTarget.blur();
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};
export default RestButton;
