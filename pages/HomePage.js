/* eslint-disable react/no-children-prop */
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import CartCard from "./CartCard";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allChecked, setAllChecked] = useState([]);
  const [vegCheckDisabled, setVegCheckDisabled] = useState(false);
  const [nonVegCheckDisabled, setNonVegCheckDisabled] = useState(false);
  const [searchItems, setSearchItems] = useState("");
  const [flag, setFlag] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  const btnRef = React.useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  function setQuantity() {
    setItemQuantity();
  }
  function updateFinalPrice(amount) {
    const newAmount = currAmount + amount;
    setFinalPrice(newAmount);
  }

  async function getData() {
    try {
      const response = await axios.get("http://localhost:5000/api/foods");
      setData(response.data);
      setfilteredData(response.data);
    } catch (error) {
      console.log("data cannot be loaded");
    }
  }

  useEffect(() => {
    const result = data.filter((item) => {
      const temp = item.name.toLowerCase();
      if (temp.includes(searchItems.toLowerCase())) return true;
      return false;
    });
    setfilteredData(result);
  }, [data, searchItems]);

  function changeCategory(category) {
    const temp = data.filter((item) => {
      if (item.category === category) return true;
      return false;
    });
    setfilteredData(temp);
  }
  useEffect(() => {
    if (allChecked.length == 0 || allChecked.length == 2) setfilteredData(data);
  }, [allChecked, data, flag]);

  function increaseCartNumber() {
    setCount(count + 1);
  }

  function addCartCard(name, price, imageUrl) {
    setCartData([
      ...cartData,
      {
        x: name,
        y: price,
        z: imageUrl,
      },
    ]);
  }

  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <Flex flex={1}>
          <Flex style={styles.input}>
            <InputGroup borderColor={"#C3F8FF"}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
                border={"10px"}
              />
              <Input
                placeholder="Search"
                borderColor={"#ABD9FF"}
                onChange={(event) => {
                  setSearchItems(event.target.value);
                }}
              />
            </InputGroup>
          </Flex>

          <Flex marginRight={"2%"}>
            <Stack spacing={5} direction="row">
              <Checkbox
                colorScheme="red"
                borderColor={"grey"}
                isDisabled={nonVegCheckDisabled}
                onChange={(e) => {
                  setVegCheckDisabled(!vegCheckDisabled);
                  setFlag(!flag);
                  if (e.target.checked) {
                    changeCategory("non-veg");
                    const temp = allChecked;
                    temp.push(1);
                    setAllChecked(temp);
                  } else {
                    const temp = allChecked;
                    temp.pop();
                    setAllChecked(temp);
                  }
                }}
              >
                Non-veg
              </Checkbox>
              <Checkbox
                colorScheme="green"
                borderColor={"grey"}
                isDisabled={vegCheckDisabled}
                onChange={(e) => {
                  setNonVegCheckDisabled(!nonVegCheckDisabled);
                  setFlag(!flag);
                  if (e.target.checked) {
                    changeCategory("veg");
                    const temp = allChecked;
                    temp.push(1);
                    setAllChecked(temp);
                  } else {
                    const temp = allChecked;
                    temp.pop();
                    setAllChecked(temp);
                  }
                }}
              >
                Veg
              </Checkbox>
            </Stack>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} marginRight={"2%"}>
          <Flex style={{ cursor: "pointer" }}>
            <AiOutlineShoppingCart size={30} ref={btnRef} onClick={onOpen} />
            <Flex style={styles.cartStyle}>
              <Text>{count}</Text>
            </Flex>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Your Cart is here</DrawerHeader>
              <DrawerBody>
                {cartData.length > 0 &&
                  cartData.map((item, index) => (
                    <CartCard
                      key={index}
                      name={item.x}
                      price={item.y}
                      imageUrl={item.z}
                    />
                  ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} wrap={"wrap"} backgroundColor={"#ABD9FF"}>
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
            <Grid gap={6} key={index}>
              <FoodCard
                name={item.name}
                price={item.price}
                url={item.imageUrl}
                increaseCounter={increaseCartNumber}
                addCartCard={addCartCard}
              />
            </Grid>
          ))}
      </Flex>
    </Flex>
  );
}

const styles = {
  cartStyle: {
    backgroundColor: "red",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "100%",
    color: "white",
    fontFamily: "Rubik",
    marginLeft: -10,
    marginBottom: 18,
  },
  input: {
    margin: "1%",
    borderColor: "grey",
    width: "50%",
  },
};
