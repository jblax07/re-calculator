import React, { useState } from "react";
import Calculator from "./components/Calculator";
import Admin from "./components/Admin";
import NavBar from "./components/NavBar";
import { Box, GridItem, Text, AspectRatio } from "@chakra-ui/react";
import Login from "./components/Login";
import UserDash from "./components/UserDash";
import Form from "./components/Form";

const App: React.FC = () => {
  const [currentComponent, setCurrentComponent] = useState<string>("Calculator");
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleTotalChange = (total: number) => {
    setTotalCost(total);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "Calculator":
        return <Calculator onTotalChange={() => {}} />;
      case "Admin":
        return <Admin />;
      case "Login":
        return <Login />;
      case "Form":
        return <Form />;
      default:
        return null;
    }
  };

  return (
    <Box flex="1">
      <GridItem area="nav">
        <NavBar setCurrentComponent={setCurrentComponent} />
      </GridItem>
      <GridItem
        area="main"
        justifyContent="center"
        alignItems="center"
        padding="20px"
        margin="0 auto"
      >
        {renderComponent()}
      </GridItem>
    </Box>
  );
};

export default App;
