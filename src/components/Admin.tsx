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
  Flex,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import PasteButton from "./PasteButton";
import DateCopy from "./dateCopy";
import Calculator from "./Calculator";

const Admin: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [totalJobPrice, setTotalJobPrice] = useState<number>(0);
  const [hasAssistant, setHasAssistant] = useState<boolean>(false);
  const [hasVideographer, setHasVideographer] = useState<boolean>(false);
  const [mileage, setMileage] = useState<number>(0);
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

  const updateMileage = (value: string) => {
    const miles = parseFloat(value || "0");
    setMileage(miles);
  };

  const roundDownToNearest5 = (value: number): number => {
    return Math.floor(value / 5) * 5;
  };

  const mileageCost = mileage * 1;
  const totalJobWithMileage = totalJobPrice + mileageCost;

  const photographerBasePay = hasVideographer
    ? (totalJobWithMileage * 0.7) / 2
    : totalJobWithMileage * 0.7;
  const assistPay = hasAssistant ? photographerBasePay * 0.2 : 0;
  const roundedAssistPay = roundDownToNearest5(assistPay);
  const photographerPay = photographerBasePay - roundedAssistPay;
  const roundedPhotographerPay = roundDownToNearest5(photographerPay);
  const videographerPay = hasVideographer ? photographerBasePay : 0;
  const roundedVideographerPay = roundDownToNearest5(videographerPay);
  const editorPay = hasVideographer
    ? Math.max((totalJobPrice - roundedVideographerPay) * 0.06, 15)
    : Math.max(totalJobPrice * 0.06, 15);
  const roundedEditorPay = roundDownToNearest5(editorPay);
  const videoEditorPay = hasVideographer
    ? Math.max(
        (totalJobPrice -
          (roundedPhotographerPay +
            roundedAssistPay +
            roundedEditorPay +
            roundedVideographerPay)) *
          0.5 +
          5,
        15
      )
    : 0;
  const roundedVideoEditorPay = roundDownToNearest5(videoEditorPay);
  const totalRoundedPayout =
    roundedPhotographerPay +
    roundedAssistPay +
    roundedEditorPay +
    roundedVideographerPay +
    roundedVideoEditorPay;
  const companyProfit = totalJobWithMileage - totalRoundedPayout;

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
        <Card maxW="100%">
          <CardHeader>
            <Calculator />
            <InputGroup>
              <InputLeftAddon
                pointerEvents="none"
                fontSize="1.2em"
                paddingRight="30px"
              >
                Price
              </InputLeftAddon>
              <Input
                ref={inputRef}
                value={totalJobPrice} // Bind input value to state
                onChange={(e) => updateTotalJobPrice(e.target.value)}
              />
              <PasteButton inputRef={inputRef} onPaste={updateTotalJobPrice} />
            </InputGroup>
            <InputGroup paddingTop="20px">
              <InputLeftAddon
                pointerEvents="none"
                fontSize="1.2em"
                paddingRight="7px"
              >
                Mileage
              </InputLeftAddon>
              <Input
                value={mileage} // Bind input value to state
                onChange={(e) => updateMileage(e.target.value)}
              />
            </InputGroup>
          </CardHeader>

          <Box position="relative" padding="5">
            <Divider />
            <AbsoluteCenter px="4">Optional</AbsoluteCenter>
          </Box>

          <CardBody>
            <HStack justify="center" spacing={4}>
              <Checkbox
                size="sm"
                isChecked={hasVideographer}
                onChange={(e) => setHasVideographer(e.target.checked)}
              >
                Videographer
              </Checkbox>
              <Checkbox
                size="sm"
                isChecked={hasAssistant}
                onChange={(e) => setHasAssistant(e.target.checked)}
              >
                Assistant
              </Checkbox>
            </HStack>
          </CardBody>

          <Box p="15px">
            <Divider />
          </Box>

          <CardBody>
            <VStack spacing={4} align="start">
              <HStack justify="space-between" width="100%">
                <Heading size="sm">Photographer Pay:</Heading>
                <Heading size="sm">
                  ${roundedPhotographerPay.toFixed(2)}
                </Heading>
              </HStack>
              <HStack justify="space-between" width="100%">
                <Heading size="sm">Mileage Pay:</Heading>
                <Heading size="sm">${mileageCost.toFixed(2)}</Heading>
              </HStack>
              <HStack justify="space-between" width="100%">
                <Heading size="sm">Photo Editor Pay:</Heading>
                <Heading size="sm">${roundedEditorPay.toFixed(2)}</Heading>
              </HStack>
              {hasVideographer && (
                <>
                  <HStack justify="space-between" width="100%">
                    <Heading size="sm">Videographer Pay:</Heading>
                    <Heading size="sm">
                      ${roundedVideographerPay.toFixed(2)}
                    </Heading>
                  </HStack>
                  <HStack justify="space-between" width="100%">
                    <Heading size="sm">Video Editor Pay:</Heading>
                    <Heading size="sm">
                      ${roundedVideoEditorPay.toFixed(2)}
                    </Heading>
                  </HStack>
                </>
              )}
              {hasAssistant && (
                <HStack justify="space-between" width="100%">
                  <Heading size="sm">Assistant Pay:</Heading>
                  <Heading size="sm">${roundedAssistPay.toFixed(2)}</Heading>
                </HStack>
              )}
              <HStack justify="space-between" width="100%">
                <Heading size="md">Company Profit:</Heading>
                <Heading size="md">${companyProfit.toFixed(2)}</Heading>
              </HStack>
            </VStack>
          </CardBody>
          <DateCopy />
        </Card>
      )}
    </div>
  );
};

export default Admin;
