import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
const ButtonContainer = () => {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
};
export default ButtonContainer;