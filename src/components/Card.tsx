import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import RestButton from "./RestButton";
import Title from "./Title";

const Card = () => {
  const [count, setCount] = useState(8);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <RestButton setCount={setCount} />
      <ButtonContainer count={count} setCount={setCount} />
    </div>
  );
};
export default Card;
