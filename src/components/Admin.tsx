import {
  Card,
  CardHeader,
  Heading,
  Input,
  VStack,
  InputGroup,
  InputLeftAddon,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import PasteButton from "./PasteButton";

const Admin: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const toast = useToast();

  useEffect(() => {
    const authenticated = sessionStorage.getItem("isAuthenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (password === "0707") {
      // Replace with your desired password
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");
      toast({
        title: "Access Granted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <VStack spacing={4}>
          <Heading size="md">Enter Password to View this Page</Heading>
          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handlePasswordSubmit} colorScheme="blue">
              Submit
            </Button>
          </InputGroup>
        </VStack>
      ) : (
        <Card maxW={{ base: "100%", sm: "1920px" }}>
          <CardHeader>
            <Heading size="md" p="15px">
              Total Job Price:{" "}
            </Heading>
            <InputGroup>
              <InputLeftAddon pointerEvents="none" fontSize="1.2em">
                $
              </InputLeftAddon>
              <Input ref={inputRef} />
              <PasteButton inputRef={inputRef} />
            </InputGroup>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default Admin;
