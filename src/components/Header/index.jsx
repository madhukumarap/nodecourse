import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col relative w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1920px] mx-auto md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[18px] w-[15px]"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
              <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
                <li>
                  <div className="flex flex-row gap-1.5 items-center justify-start">
                    <Text
                      className="text-center text-gray-700 text-xs w-auto"
                      size="txtPoppinsRegular12"
                    >
                      Eng
                    </Text>
                    <Img
                      className="h-[3px]"
                      src="images/img_arrowdown_gray_700.svg"
                      alt="arrowdown"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-1.5 items-center justify-start">
                    <Text
                      className="text-center text-gray-700 text-xs w-auto"
                      size="txtPoppinsRegular12"
                    >
                      USD
                    </Text>
                    <Img
                      className="h-[3px]"
                      src="images/img_arrowdown_gray_700.svg"
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
                        className="text-gray-700 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Sign In
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        /
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-gray-700 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        Sign Up
                      </Text>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-6px] mx-auto pb-2 px-2 w-full z-[1]">
            <Img
              className="md:flex-1 h-[85px] sm:h-auto md:ml-[0] ml-[78px] object-cover w-[24%] md:w-full"
              src="images/img_traceworkstrademarked_97x454.png"
              alt="traceworkstrade"
            />
            <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[185px] md:mt-0 mt-[30px] rounded-md w-auto sm:w-full">
              <div className="flex flex-row gap-2 items-center justify-start px-[17px] py-3 w-[400px] sm:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtPoppinsRegular15"
                >
                  Search
                </Text>
              </div>
              <Button
                className="cursor-pointer font-poppins font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                Search
              </Button>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] md:mt-0 mt-[33px] w-auto">
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
                    src="images/img_bag.svg"
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
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtPoppinsRegular11"
                  >
                    Shopping cart:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    $57.00
                  </Text>
                </div>
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

Header.defaultProps = {};

export default Header;
