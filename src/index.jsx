import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";



const StyleText = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}




// React components should start with an uppercase letter. This helps React distinguish between components and HTML tags.
// example: text is a HTML tag, Text is a React component (t , T).

const Text = () => (
  <div className="flex justify-center items-center content-center h-dvh">
    <div className="bg-red-700 rounded-md flex justify-center w-40 hover:shadow-2xl transform hover:scale-110  hover:animate-swing transition-transform duration-300">
      <h1 className="text-white m-3">Hello, React!</h1>
    </div>
  </div>
);



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Text />);

