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
  CardFooter,
  Flex,
  Text,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Card>
      <CardBody>
        <Text fontSize="md" p="10px">
          Username:
        </Text>
        <Input></Input>
        <Text fontSize="md" p="10px">
          Password:
        </Text>
        <Input></Input>
        <Divider p="10px" />
      </CardBody>
      <CardBody p="0px">
        <HStack justifyContent="center">
          <Button fontSize="sm" size="xs">
            Login
          </Button>
          <Button fontSize="sm" size="xs">
            Create Account
          </Button>
        </HStack>
      </CardBody>
      <CardFooter justifyContent="center">
        <Text fontSize="xs">Forgot Username | Password</Text>
      </CardFooter>
    </Card>
  );
};

export default Login;
