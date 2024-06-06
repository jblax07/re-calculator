import React from "react";
import Calculator from "./"; // Adjust the import path as necessary
import "./index.css";

const App: React.FC = () => {
  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#333",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1>Real Estate Calculator</h1>
      <Calculator />
      <br></br>
      <hr></hr>
    </div>
  );
};

export default App;
