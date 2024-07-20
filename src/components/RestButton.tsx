import { ResetIcon } from "@radix-ui/react-icons";
import { RestButtonProps } from "../types/RestButtonProps";

const RestButton = ({ setCount }: RestButtonProps) => {
  return (
    <button className="reset-btn" onClick={() => setCount(0)}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};
export default RestButton;
