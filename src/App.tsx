import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import { Grid, GridItem, AspectRatio } from "@chakra-ui/react";
import "./App.css"; // Ensure to create and import the App.css file

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
    <div className="app-container">
      <div className="video-overlay">
        <AspectRatio ratio={16 / 9} className="video-frame" opacity=".50">
          <iframe
            src="https://www.youtube.com/embed/C0AxsCv-u9Y?autoplay=1&mute=1&loop=1&playlist=C0AxsCv-u9Y&controls=0&showinfo=0&autohide=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </AspectRatio>
      </div>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "main"', // 1024px
        }}
      >
        <GridItem area="nav">
          <NavBar setCurrentComponent={setCurrentComponent} />
        </GridItem>
        <GridItem area="main" padding="10px">
          {renderComponent()}
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
