import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import { Grid, GridItem, Text, AspectRatio, Box } from "@chakra-ui/react";
import "./App.css"; // Ensure to create and import the App.css file
import Login from "./components/Login";

const App: React.FC = () => {
  const [currentComponent, setCurrentComponent] =
    useState<string>("Calculator");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Login":
        return <Login />;
      case "Calculator":
        return <Calculator />;
      case "Admin":
        return <Admin />;
      default:
        return null;
    }
  };

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "main main"', // 1024px
      }}
      flex="1"
    >
      <GridItem area="nav">
        <NavBar setCurrentComponent={setCurrentComponent} />
      </GridItem>
      <GridItem
        area="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxW="300px"
        padding="10px"
        margin="0 auto"
      >
        {renderComponent()}
      </GridItem>
    </Grid>
  );
};

export default App;
