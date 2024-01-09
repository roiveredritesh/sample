import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center text-violet-800 font-sans underline">
        Cards with Props Examples
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        <Cards
          uName="Ritesh"
          uDetails="I am a .net developer."
          uImage="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="View Linkedin Profile"
        />
        <Cards
          uName="Hitesh"
          uDetails="I am a quality analyst."
          uImage="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="View Git Profile"
        />
        <Cards
          uName="Ankur"
          uDetails="I am a full stack developer."
          uImage="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="Click here to see details"
        />
        <Cards
          uName="Ankit"
          uDetails="I am a business analyst."
          uImage="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="Click here to message me"
        />
        <Cards
          uName="Darshan"
          uDetails="I am a php developer."
          uImage="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="Visit my website"
        />
        {/* <Cards
          uName="Aman"
          uDetails="I am a android developer."
          uImage="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
          bText="View my portfolio"
        /> */}
        <Cards />
      </div>
    </>
  );
}

export default App;
