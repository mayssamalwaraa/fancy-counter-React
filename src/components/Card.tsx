import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import RestButton from "./RestButton";
import Title from "./Title";

const Card = () => {
  const [count, setCount] = useState(8);
  const locked = count === 5 ? true : false;
  return (
    <div className={`card ${locked ? `card--limit` : ``}`}>
      <Title locked={locked} />
      <Count count={count} />
      <RestButton setCount={setCount} />
      <ButtonContainer count={count} setCount={setCount} locked={locked} />
    </div>
  );
};
export default Card;
