import React from "react";
import Nvbar from "./components/Nvbar";
import Hero from "./components/Hero";
import HeadLineCrads from "./components/HeadLineCrads";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
     <Nvbar/>
     <Hero/>
     <HeadLineCrads/>
     <Food/>
     <Category/>
    </div>
  );
}

export default App;
