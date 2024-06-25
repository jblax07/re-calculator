import React from "react";
import Calculator from "./components/Calculator"; // Adjust the import path as necessary
import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "main"', //1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem area="main" padding="20px">
          <Calculator />
        </GridItem>
      </Grid>
      <br></br>
    </div>
  );
};

export default App;
