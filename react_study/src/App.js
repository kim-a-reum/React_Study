import { useState } from "react";
import { Counter } from "./features/counter/Counter";

const Container = () => {
  console.log("컨테이너 업로드");
  const [state, setState] = useState(1);
  return (
    <>
      <div>컨테이너 {state}</div>
      <button onClick={() => setState((prev) => prev + 1)}></button>
    </>
  );
};

function App() {
  return (
    <>
      <Container />
      <Counter />
    </>
  );
}

export default App;
