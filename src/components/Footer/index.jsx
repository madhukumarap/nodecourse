import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[33px] items-center justify-center w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[38px] sm:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start md:ml-[0] ml-[261px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  Subcribe our Newsletter
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-md text-red-A700 text-sm"
                  size="txtPoppinsRegular14RedA700"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna.
                </Text>
              </div>
              <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                <Input
                  name="inputfield"
                  placeholder="Your email address"
                  className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-base text-left w-full"
                  wrapClassName="absolute border border-gray-300 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
                <Button
                  className="absolute cursor-pointer font-poppins font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                  color="deep_orange_500"
                  size="lg"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start ml-10 md:ml-[0] w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="round"
                  color="deep_orange_500"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_facebook1.svg"
                    alt="facebookOne"
                  />
                </Button>
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  size="md"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_twitter1.svg"
                    alt="twitterOne"
                  />
                </Button>
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_user_gray_800.svg"
                  alt="user"
                />
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1910px] w-full">
              <Img
                className="md:flex-1 h-[97px] sm:h-auto object-cover w-[454px] md:w-full"
                src="images/img_traceworkstrademarked_97x454.png"
                alt="traceworkstrade_One"
              />
              <div className="flex flex-col gap-9 h-[191px] md:h-auto items-start justify-between w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtQuicksandSemiBold24"
                >
                  Other apps
                </Text>
                <ul className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Food Delivery
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Meat Delivery
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Track Order
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Shipping Details
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtQuicksandSemiBold24"
                >
                  Useful links
                </Text>
                <ul className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Conact
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Hot deals
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      Promotions
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900"
                      size="txtQuicksandMedium16"
                    >
                      New products
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[62px] sm:h-[76px] relative w-full">
              <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
              <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1920px] w-full">
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtQuicksandMedium16"
                >
                  © 2022, All rights reserved
                </Text>
                <div className="flex flex-row gap-7 items-start justify-between p-1.5 w-[237px]">
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_orange_500"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_svgexport64.svg"
                      alt="svgexportSixtyFour"
                    />
                  </Button>
                  <div className="bg-deep_orange-500 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-11">
                    <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                      <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                        <Img
                          className="h-[19px] w-[19px]"
                          src="images/img_link.svg"
                          alt="link"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_orange_500"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_svgexport65.svg"
                      alt="svgexportSixtyFive"
                    />
                  </Button>
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_orange_500"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_svgexport66.svg"
                      alt="svgexportSixtySix"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
