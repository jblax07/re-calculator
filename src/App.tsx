import React from "react";
import Calculator from "./components/Calculator"; // Adjust the import path as necessary
import { Heading } from "@chakra-ui/react";
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
      <Heading>Real Estate Calculator</Heading>
      <Calculator />
      <br></br>
    </div>
  );
};

export default App;
