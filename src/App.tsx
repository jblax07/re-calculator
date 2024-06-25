import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Admin from "./components/Admin"; // Adjust the import path as necessary
import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  const [currentComponent, setCurrentComponent] =
    useState<string>("Calculator");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Calculator":
        return <Calculator />;
      case "Admin":
        return <Admin />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "main"', //1024px
        }}
      >
        <GridItem area="nav">
          <NavBar setCurrentComponent={setCurrentComponent} />
        </GridItem>

        <GridItem area="main" padding="10px">
          {renderComponent()}
        </GridItem>
      </Grid>
      <br></br>
    </div>
  );
};

export default App;
