import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";

const SignInPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-20 items-center justify-end mx-auto py-2.5 w-full">
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end mt-[184px] p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homesiximage="images/img_home.svg"
          vectoroneimage="images/img_vector_red_a700.svg"
          vegetablestext="Account"
          vectortwoimage="images/img_vector_gray_600.svg"
          languagetext="Login"
        />
        <div className="bg-blue_gray-900_02 border border-gray-900 border-solid flex flex-col gap-5 items-center justify-start pb-8 pt-6 md:px-5 px-6 rounded-lg shadow-bs17 w-auto sm:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
            size="txtPoppinsSemiBold32"
          >
            Sign In
          </Text>
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Input
                  name="inputfield"
                  placeholder="Email"
                  className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-700 border-solid w-full"
                  type="email"
                  shape="round"
                  color="blue_gray_900_02"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="inputfield_One"
                  placeholder="Password"
                  className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-700 border-solid flex w-auto sm:w-full"
                  type="password"
                  suffix={
                    <Img
                      className="mt-0.5 mb-px h-5 ml-[35px]"
                      src="images/img_eyeopen_1.svg"
                      alt="eye-open 1"
                    />
                  }
                  shape="round"
                  color="blue_gray_900_02"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row items-start justify-between w-[472px] sm:w-full">
                <CheckBox
                  className="text-left text-sm"
                  inputClassName="border border-gray-700_01 border-solid h-5 mr-[5px] rounded-[3px] w-5"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                  color="blue_gray_900_02"
                  variant="fill"
                ></CheckBox>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14Gray500"
                >
                  Forget Password
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-[472px]"
              shape="round"
              color="deep_orange_500"
              size="lg"
              variant="fill"
            >
              Login
            </Button>
            <div className="flex flex-row items-start justify-start pt-1 w-auto">
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtPoppinsRegular14Gray500"
              >
                Don’t have account?
              </Text>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtPoppinsMedium14WhiteA700"
              >
                {" "}
                Register
              </Text>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignInPage;
