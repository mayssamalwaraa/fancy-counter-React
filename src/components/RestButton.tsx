import { ResetIcon } from "@radix-ui/react-icons";
import { RestButtonProps } from "../types/RestButtonProps";

const RestButton = ({ setCount }: RestButtonProps) => {
  const handleClick = () => {
    setCount(0);
  };
  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};
export default RestButton;
