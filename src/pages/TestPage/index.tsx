import React from "react";
import Counter from "../../components/Count";

import Greetings from "../../components/Greetings";
import MyForm from "../../components/MyForm";
import ReducerSample from "../../components/ReducerSample";
import { SampleProvider } from "../../components/SampleContext";

const TestPage: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="Han" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
};

export default TestPage;
