import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Stepper() {
  return (
    <Flex flexDir={"row"} alignItems="center" cursor={"pointer"}>
      <Flex style={styles.mathSymbolContainer}>+</Flex>
      <Flex style={styles.numberContainer}>2</Flex>
      <Flex style={styles.mathSymbolContainer}>-</Flex>
    </Flex>
  );
}

const styles = {
  mathSymbolContainer: {
    fontSize: 12,
    padding: 5,
    backgroundColor: "grey",
    fontFamily: "Rubik",
    borderColor: "grey",
    borderWidth: 0.5,
  },
  numberContainer: {
    fontSize: 12,
    padding: 5,
    backgroundColor: "white",
    fontFamily: "Rubik",
    borderColor: "grey",
    borderWidth: 0.5,
  },
};
