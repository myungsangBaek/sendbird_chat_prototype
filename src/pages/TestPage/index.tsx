import React, { useState } from "react";

import Greetings from "../../components/Greetings";

const TestPage: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  const onIncrease = () => setCount(count + 1);
  const onDncrease = () => setCount(count - 1);

  return (
    <>
      <Greetings name="Han" onClick={onClick} />
      <button onClick={onIncrease}>{"+1"}</button>
      <button onClick={onDncrease}>{"-1"}</button>
      <div>{count}</div>
    </>
  );
};

export default TestPage;
