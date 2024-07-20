import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import CountButton from "./CountButton";
import RestButton from "./RestButton";
import Title from "./Title";

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  useEffect(() => {
    const handleClick = (event: KeyboardEvent) => {
      if (event.code == "Space") {
        if (count === 5) return 5;
        setCount((prev) => prev + 1);
      }
    };
    window.addEventListener("keydown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? `card--limit` : ``}`}>
      <Title locked={locked} />
      <Count count={count} />
      <RestButton setCount={setCount} />
      <ButtonContainer>
        <CountButton
          count={count}
          type="minus"
          setCount={setCount}
          locked={locked}
        />
        <CountButton
          count={count}
          type="plus"
          setCount={setCount}
          locked={locked}
        />
      </ButtonContainer>
    </div>
  );
};
export default Card;
