import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Input,
  Flex,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function Loginpage() {
  const router = useRouter();
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      backgroundColor={"#39e369"}
    >
      <Card
        align="center"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          borderRadius: "20px",
        }}
        variant="outline"
        backgroundColor={"white"}
      >
        <CardHeader align="centre">
          <Heading size="md" style={{ fontFamily: "Rubik" }}>
            Welcome to the Canteen
          </Heading>
        </CardHeader>
        <CardBody>
          <FormControl>
            <Input
              type="email"
              placeholder="Email ID"
              borderWidth={"1px"}
              borderColor="grey"
            />
          </FormControl>
          <FormControl marginTop={"15px"}>
            <Input
              type="password"
              placeholder="Password"
              borderWidth={"1px"}
              borderColor="grey"
            />
            <FormHelperText>Forgot Password</FormHelperText>
          </FormControl>
        </CardBody>
        <CardFooter>
          <Button
            style={{ fontFamily: "Rubik" }}
            onClick={() => router.push("/HomePage")}
            colorScheme="blue"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}
export default Loginpage;
