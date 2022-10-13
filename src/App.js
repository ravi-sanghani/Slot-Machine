import React from "react";
import SlotMachine from "./components/SlotMachine";

const App = () => {
  return (
    <div>
      <h1>Welcome to slot machine app</h1>
      <SlotMachine x='😀' y='😀' z='😀' />
      <SlotMachine x='😀' y='😁' z='😋' />
      <SlotMachine x='🥭' y='🍇' z='🍊' />
      <SlotMachine x='🥭' y='🥭' z='🥭' />
    </div>
  );
};

export default App;
