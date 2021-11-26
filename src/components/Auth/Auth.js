import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startSesion,
  registerUser,
  resetErrors,
} from "../../Store/Actions/actionLogin";
import { useNavigate } from "react-router-dom";
import "firebase/auth";
import Logo from "../logo/Logo";
import { Formik, Form, Field } from "formik";

import { MdModeNight, MdLightMode } from "react-icons/md";

import {
  Flex,
  Input,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Wrap,
} from "@chakra-ui/react";

function Auth(props) {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100, gray.700");
  const [pageStatus, setPageStatus] = useState(true);
  const userOn = useSelector((state) => state.login.active);
  const error = useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let colorModeInfo = useColorMode();
  const toast = useToast();

  const changeStatus = (e) => {
    e.preventDefault();
    dispatch(resetErrors());
    setPageStatus(!pageStatus);
  };
  const changeColorMode = (e) => {
    e.preventDefault();
    dispatch(resetErrors());
    toggleColorMode();
  };

  useEffect(() => {
    if (userOn) {
      navigate("/");
    }
  }, [userOn, navigate]);

  const validation = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      errors.email = "Email is not valid";
    }
    if (!value.password) {
      errors.password = "Password is required";
    } else if (value.password.length < 6) {
      errors.password = "Password must have 6 characters";
    }
    return errors;
  };

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(false);
    if (!pageStatus) {
      dispatch(registerUser(value));
    } else {
      dispatch(startSesion(value));
      setTimeout(() => {
        if (userOn) {
          navigate("/");
        }
      }, 2000);
    }
  };

  return (
    !userOn && (
      <Flex
        height="100vh"
        direction="column"
        background={formBackground}
        p={{ base: "2", md: "5" }}
        rounded={6}
      >
        {error ? (
          <Wrap position="absolute">
            {toast({
              title: "ERROR",
              description: error,
              status: "error",
              position: "top",
              duration: 3000,
            })}
            {setTimeout(() => {
              dispatch(resetErrors());
            }, 3000)}
          </Wrap>
        ) : null}
        <Flex
          height="2vh"
          background={formBackground}
          p={5}
          rounded={6}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            onClick={(e) => changeColorMode(e)}
            bg="transparent"
            position="absolute"
            border="2px"
          >
            {colorModeInfo.colorMode === "light" ? (
              <MdModeNight />
            ) : (
              <MdLightMode />
            )}
          </Button>
        </Flex>
        <Flex
          height="90vh"
          alignItems="center"
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <Logo id={2} />
          {pageStatus ? (
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={validation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
                  <Flex
                    direction="column"
                    background={formBackground}
                    p={{ base: "4", md: "12" }}
                    rounded={6}
                  >
                    <Heading mb={{ base: "2", md: "6" }} align="center">
                      Log in
                    </Heading>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel
                            htmlFor="email"
                            display={{ base: "none", md: "block" }}
                          >
                            Email address
                          </FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="email"
                            variant="filled"
                            mb="2"
                          />
                          <FormErrorMessage mb="2" display={{ base: "none", md: "block" }}>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password" display={{ base: "none", md: "block" }}>Password</FormLabel>
                          <FormHelperText
                            mb="2"
                            display={{ base: "none", md: "block" }}
                          >
                            We'll never share your password.
                          </FormHelperText>
                          <Input
                            {...field}
                            id="password"
                            placeholder="*******"
                            variant="filled"
                            mb={{ base: "0", md: "2" }}
                          />

                          <FormErrorMessage mb="2" display={{ base: "none", md: "block" }}>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type="submit"
                      mt="4"
                      mb={{ base: "2", md: "3" }}
                      colorScheme="blue"
                      disabled={isSubmitting || !isValid}
                    >
                      Log in
                    </Button>
                    <Button
                      onClick={(e) => changeStatus(e)}
                      mb={{ base: "0", md: "3" }}
                      colorScheme="green"
                    >
                      Register
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                email: "",
                password: "",
                repeatpassword: "",
              }}
              validate={validation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
                  <Flex
                    direction="column"
                    background={formBackground}
                    p={{ base: "0", md: "12" }}
                    rounded={6}
                  >
                    <Heading mb={{ base: "2", md: "6" }} align="center">
                      Register
                    </Heading>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel htmlFor="email" display={{ base: "none", md: "block" }}>Email address</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="Email"
                            variant="filled"
                            mb={2}
                          />
                          <FormErrorMessage mb={2} display={{ base: "none", md: "block" }}>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password" display={{ base: "none", md: "block" }}>Password</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="*******"
                            variant="filled"
                            mb={2}
                          />

                          <FormErrorMessage mb={2} display={{ base: "none", md: "block" }}>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="repeatpassword">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.repeatpassword &&
                            form.touched.repeatpassword
                          }
                        >
                          <FormLabel htmlFor="repeatpassword" display={{ base: "none", md: "block" }}>
                            Repeat Password
                          </FormLabel>
                          <Input
                            {...field}
                            id="repeatpassword"
                            placeholder="Repeat Password"
                            variant="filled"
                            mb={{ base: "0", md: "2" }}
                          />
                          <FormErrorMessage mb={2} display={{ base: "none", md: "block" }}>
                            {form.errors.repeatpassword}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type="submit"
                      mt={{ base: "3", md: "4" }}
                      mb={{ base: "1", md: "3" }}
                      colorScheme="blue"
                      disabled={isSubmitting || !isValid}
                    >
                      Register
                    </Button>
                    <Button
                      onClick={(e) => changeStatus(e)}
                      mb={{ base: "0", md: "3" }}
                      colorScheme="green"
                    >
                      Log in
                    </Button>
                  </Flex>
                </Form>
              )}
            </Formik>
          )}
        </Flex>
      </Flex>
    )
  );
}

export default Auth;
