"use client";
import InputField from "@/components/InputField";
import Wrapper from "@/components/wrapper";
import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";

// interface pageProps {}

export const page: React.FC = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) =>
          console.log("Submitted: ", values.username, values.password)
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              name="username"
              placeholder="Username"
            />
            <Box mt={4}>
              <InputField
                label="password"
                name="password"
                placeholder="password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              bgColor={"teal"}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default page;
