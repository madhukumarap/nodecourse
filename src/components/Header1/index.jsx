import React from "react";

import { Button, Img, Line, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-black-900 flex flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
          <Img
            className="h-[18px] w-[15px]"
            src="images/img_linkedin_white_a700.svg"
            alt="linkedin"
          />
          <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
            <li>
              <div className="flex flex-row gap-1.5 items-center justify-start">
                <Text
                  className="text-center text-white-A700 text-xs w-auto"
                  size="txtPoppinsRegular12WhiteA700"
                >
                  Eng
                </Text>
                <Img
                  className="h-[3px]"
                  src="images/img_arrowdown_white_a700_3x7.svg"
                  alt="arrowdown"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-1.5 items-center justify-start">
                <Text
                  className="text-center text-white-A700 text-xs w-auto"
                  size="txtPoppinsRegular12WhiteA700"
                >
                  USD
                </Text>
                <Img
                  className="h-[3px]"
                  src="images/img_arrowdown_white_a700_3x7.svg"
                  alt="arrowdown_One"
                />
              </div>
            </li>
            <li>
              <Line className="bg-gray-300 h-[15px] w-px" />
            </li>
            <li>
              <ul className="flex flex-row gap-1 items-start justify-start">
                <li>
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtPoppinsRegular12WhiteA700"
                  >
                    Sign In
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtPoppinsRegular12WhiteA700"
                  >
                    /
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtPoppinsRegular12WhiteA700"
                  >
                    Sign Up
                  </Text>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 w-full">
          <Img
            className="md:flex-1 h-[73px] sm:h-auto mb-2 md:ml-[0] ml-[111px] object-cover w-1/5 md:w-full"
            src="images/img_traceworkstrademarked_73x378.png"
            alt="traceworkstrade"
          />
          <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[216px] rounded-md w-auto sm:w-full">
            <div className="flex flex-row gap-2 items-center justify-start px-[17px] py-3 w-[400px] sm:w-full">
              <Img
                className="h-5 w-5"
                src="images/img_search_white_a700.svg"
                alt="search"
              />
              <Text
                className="text-[15px] text-white-A700 w-auto"
                size="txtPoppinsRegular15WhiteA700"
              >
                Search
              </Text>
            </div>
            <Button
              className="!text-black-900 cursor-pointer font-poppins font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
              color="deep_orange_500"
              size="lg"
              variant="fill"
            >
              Search
            </Button>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_favorite.svg"
              alt="favorite"
            />
            <Line className="bg-blue_gray-100 h-6 w-px" />
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <div className="h-9 md:h-[34px] relative w-9">
                <Img
                  className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                  src="images/img_bag_white_a700.svg"
                  alt="bag"
                />
                <Text
                  className="absolute bg-deep_orange-500 flex h-[18px] items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                  size="txtPoppinsMedium10"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                <Text
                  className="text-[11px] text-gray-400_01 w-auto"
                  size="txtPoppinsRegular11Gray40001"
                >
                  Shopping cart:
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  $57.00
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
          <ul className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
            <li>
              <div className="flex flex-row gap-1 items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Home
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_white_a700.svg"
                  alt="arrowdown_Two"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-1 items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Shop
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_white_a700.svg"
                  alt="arrowdown_Three"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-1 items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Pages
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_white_a700.svg"
                  alt="arrowdown_Four"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-1 items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Blog
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_white_a700.svg"
                  alt="arrowdown_Five"
                />
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  About Us
                </Text>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  Contact Us
                </Text>
              </div>
            </li>
          </ul>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img className="h-7 w-7" src="images/img_call.svg" alt="call" />
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtPoppinsMedium14WhiteA700"
            >
              (219) 555-0114
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
