import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function FoodCard(props) {
  return (
    <Flex flexDirection={"column"}>
      <Card maxW="sm" margin={10} height={500}>
        <CardBody>
          <Image
            height={300}
            width={450}
            src={props.url}
            alt="Green double couch with wooden legs"
            borderRadius="5px"
          />
          <Flex marginTop={6}>
            <Flex flex={1} justifyContent={"center"}>
              <Heading size="md" mt={2}>
                {props.name}
              </Heading>
            </Flex>
            <Flex>
              <Text color="blue.600" fontSize="2xl">
                {props.price}
              </Text>
            </Flex>
          </Flex>
          <CardFooter
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Flex flexDirection={"column"} padding={"10px"}>
              <Button
                backgroundColor={"#70a2e0"}
                color={"white"}
                onClick={() => {
                  props.increaseCounter();
                  props.addCartCard(props.name, props.price, props.url);
                }}
              >
                Add to cart
              </Button>
            </Flex>
          </CardFooter>
        </CardBody>
      </Card>
    </Flex>
  );
}
