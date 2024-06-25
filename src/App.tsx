import React from "react";
import Calculator from "./components/Calculator"; // Adjust the import path as necessary
import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        padding: "50px",
        minHeight: "100vh",
      }}
    >
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"', //1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
      <Heading>Real Estate Calculator</Heading>
      <Calculator />
      <br></br>
    </div>
  );
};

export default App;
