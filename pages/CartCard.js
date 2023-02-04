import Stepper from "@/components/Stepper";
import {
  Card,
  CardBody,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  HStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

export default function CartCard(props) {
  return (
    <Flex marginY={5} shadow="xl">
      <Card width={"100%"}>
        <CardBody>
          <Flex flexDir={"row"}>
            <Flex marginRight={4}>
              <Image
                src={props.imageUrl}
                alt={props.name}
                width={28}
                height={20}
              />
            </Flex>
            <Flex flexDir={"column"} alignItems="center">
              <Flex style={{ justifyContent: "center", marginBottom: 8 }}>
                <Text style={styles.foodName}>{props.name}</Text>
              </Flex>
              <Flex flexDir={"row"}>
                <Flex flex={1} marginRight={6}>
                  <Text style={styles.foodCost}>{props.price}</Text>
                </Flex>
                <Flex>
                  <Stepper />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

const styles = {
  foodName: {
    fontFamily: "Rubik",
    fontSize: 14,
  },
  foodCost: {
    fontSize: 30,
    marginRight: 6,
  },
};
