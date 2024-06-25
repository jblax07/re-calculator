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
  CardBody,
  Divider,
  Checkbox,
  AbsoluteCenter,
  HStack,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import PasteButton from "./PasteButton";

const Admin: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [totalJobPrice, setTotalJobPrice] = useState<number>(0);
  const [hasAssistant, setHasAssistant] = useState<boolean>(false);
  const [hasVideographer, setHasVideographer] = useState<boolean>(false);
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

  const updateTotalJobPrice = (value: string) => {
    const total = parseFloat(value || "0");
    setTotalJobPrice(total);
  };

  const photographerBasePay = hasVideographer
    ? (totalJobPrice * 0.7) / 2
    : totalJobPrice * 0.7;
  const assistPay = hasAssistant ? photographerBasePay * 0.2 : 0;
  const photographerPay = photographerBasePay - assistPay;
  const editorPay = totalJobPrice * 0.06;
  const videographerPay = hasVideographer ? photographerBasePay : 0;
  const videoEditorPay = hasVideographer ? videographerPay * 0.1 + 75 : 0;
  const companyProfit =
    totalJobPrice -
    (photographerPay +
      assistPay +
      editorPay +
      videographerPay +
      videoEditorPay);

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
              <Input
                ref={inputRef}
                onChange={(e) => updateTotalJobPrice(e.target.value)}
              />
              <PasteButton inputRef={inputRef} onPaste={updateTotalJobPrice} />
            </InputGroup>
          </CardHeader>

          <Box position="relative" padding="5">
            <Divider />
            <AbsoluteCenter px="4">Optional</AbsoluteCenter>
          </Box>

          <CardBody>
            <VStack spacing={4}>
              <Checkbox
                isChecked={hasAssistant}
                onChange={(e) => setHasAssistant(e.target.checked)}
              >
                Assistant
              </Checkbox>
              <Checkbox
                isChecked={hasVideographer}
                onChange={(e) => setHasVideographer(e.target.checked)}
              >
                Videographer
              </Checkbox>
            </VStack>
          </CardBody>

          <Box p="15px">
            <Divider />
          </Box>

          <CardBody>
            <VStack spacing={4} align="start">
              <HStack justify="space-between" width="100%">
                <Heading size="sm">Photographer Pay:</Heading>
                <Heading size="sm">${photographerPay.toFixed(2)}</Heading>
              </HStack>
              <HStack justify="space-between" width="100%">
                <Heading size="sm">Photo Editor Pay:</Heading>
                <Heading size="sm">${editorPay.toFixed(2)}</Heading>
              </HStack>
              {hasVideographer && (
                <>
                  <HStack justify="space-between" width="100%">
                    <Heading size="sm">Videographer Pay:</Heading>
                    <Heading size="sm">${videographerPay.toFixed(2)}</Heading>
                  </HStack>
                  <HStack justify="space-between" width="100%">
                    <Heading size="sm">Video Editor Pay:</Heading>
                    <Heading size="sm">${videoEditorPay.toFixed(2)}</Heading>
                  </HStack>
                </>
              )}
              {hasAssistant && (
                <HStack justify="space-between" width="100%">
                  <Heading size="sm">Assistant Pay:</Heading>
                  <Heading size="sm">${assistPay.toFixed(2)}</Heading>
                </HStack>
              )}
              <HStack justify="space-between" width="100%">
                <Heading size="md">Company Profit:</Heading>
                <Heading size="md">${companyProfit.toFixed(2)}</Heading>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Admin;
