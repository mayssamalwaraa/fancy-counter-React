import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import RestButton from "./RestButton";
import Title from "./Title";

const Card = () => {
  return (
    <div className="card">
      <Title />
      <Count />
      <RestButton />
      <ButtonContainer />
    </div>
  );
};
export default Card;
