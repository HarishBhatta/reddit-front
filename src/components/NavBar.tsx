"use client";
import { Box, Flex, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Flex bg={"tomato"} p={4} ml={"auto"}>
        <Box ml={"auto"} display={"flex"}>
          <Link href={"/register"}>
            <LinkBox mr={4}>Register</LinkBox>
          </Link>
          <Link href={"/login"}>
            <LinkBox>Login</LinkBox>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
