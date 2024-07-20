import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ButtonContainerProps } from "../types/ButtonContainerProps";
import CountButton from "./CountButton";
const ButtonContainer = ({ children }) => {
  return <div className="button-container">{children}</div>;
};
export default ButtonContainer;
