// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import BrokenPhone from "./components/phone/BrokenPhone";
import NabBar from "./components/NabBar/NabBar";
import PriceOption from "./components/priceOption/PriceOption";
import LineChart from "./components/lineChart/LineChart";
function App() {
  return (
    <div>
      <NabBar></NabBar>

      <div>
        <PriceOption></PriceOption>
      </div>

      <div>
        <LineChart></LineChart>
      </div>
      <div>
        <BrokenPhone></BrokenPhone>
      </div>
    </div>
  );
}

export default App;
