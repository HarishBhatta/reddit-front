"use client";
import { useGetUserQuery } from "@/gql/graphql";
import { Box, Button, Flex, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const [{ data, fetching }] = useGetUserQuery();
  let body = null;

  // Data is loadin
  if (fetching) {
  }
  // User not logged in
  else if (!data?.getUser) {
    body = (
      <>
        <Link href={"/register"}>
          <LinkBox mr={4}>Register</LinkBox>
        </Link>
        <Link href={"/login"}>
          <LinkBox>Login</LinkBox>
        </Link>
      </>
    );
  } // User logged in
  else {
    body = (
      <>
        <Box mr={"4"} pt={"1"}>
          {data.getUser.user?.username}
        </Box>
        <Button variant={"link"}>Logout</Button>
      </>
    );
  }
  return (
    <div>
      <Flex bg={"tomato"} p={4} ml={"auto"}>
        <Box ml={"auto"} display={"flex"}>
          {body}
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
