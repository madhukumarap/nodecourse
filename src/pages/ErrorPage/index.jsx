import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Header1 from "components/Header1";

const ErrorPagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homesiximage="images/img_home.svg"
          languagetext="404 Error Page"
        />
        <div className="flex flex-col items-center justify-start mt-20 md:px-5 w-[32%] md:w-full">
          <Img
            className="h-[354px]"
            src="images/img_salad_1.svg"
            alt="illustration"
          />
          <Text
            className="mt-[29px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-300"
            size="txtPoppinsSemiBold40Gray300"
          >
            Oops! page not found
          </Text>
          <Text
            className="leading-[150.00%] mt-2.5 text-base text-center text-gray-600 w-full"
            size="txtPoppinsRegular16"
          >
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </Text>
          <Button
            className="cursor-pointer font-semibold min-w-[163px] mt-6 text-center text-sm"
            shape="round"
            color="deep_orange_500"
            size="lg"
            variant="fill"
          >
            Back to Home
          </Button>
        </div>
        <footer className="flex items-center justify-center mt-[199px] md:px-5 w-full">
          <div className="flex flex-col gap-[33px] items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[38px] sm:px-5 w-full">
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    Subcribe our Newsletter
                  </Text>
                  <Text
                    className="leading-[150.00%] md:max-w-full max-w-md text-black-900 text-sm"
                    size="txtPoppinsRegular14"
                  >
                    Pellentesque eu nibh eget mauris congue mattis mattis nec
                    tellus. Phasellus imperdiet elit eu magna.
                  </Text>
                </div>
                <div className="h-[52px] ml-28 md:ml-[0] relative w-[31%] md:w-full">
                  <Input
                    name="inputfield"
                    placeholder="Your email address"
                    className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="absolute inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                    type="email"
                    color="black_900"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Button
                    className="!text-black-900 absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start ml-10 md:ml-[0] mr-48 w-auto">
                  <Button
                    className="flex h-10 items-center justify-center rounded-[50%] w-10"
                    shape="circle"
                    color="black_900"
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
                      src="images/img_svgexport66.svg"
                      alt="twitterOne"
                    />
                  </Button>
                  <Img
                    className="h-10 rounded-[50%] w-10"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Img
                    className="h-10 rounded-[50%] w-10"
                    src="images/img_info_white_a700.svg"
                    alt="info"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-quicksand gap-9 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 h-[226px] md:h-auto items-start justify-between max-w-[1851px] w-full">
                <Img
                  className="md:flex-1 h-[97px] sm:h-auto object-cover w-[454px] md:w-full"
                  src="images/img_traceworkstrademarked_73x378.png"
                  alt="traceworkstrade_One"
                />
                <div className="flex flex-col gap-9 h-[191px] md:h-auto items-start justify-between w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtQuicksandSemiBold24WhiteA700"
                  >
                    Other apps
                  </Text>
                  <ul className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Food Delivery
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Meat Delivery
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Track Order
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Shipping Details
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-9 h-[226px] md:h-auto items-start justify-between w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtQuicksandSemiBold24WhiteA700"
                  >
                    Useful links
                  </Text>
                  <ul className="flex flex-col gap-[15px] h-40 md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">Conact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Hot deals
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          Promotions
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700"
                      >
                        <Text size="txtQuicksandMedium16WhiteA700">
                          New products
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[60px] sm:h-[76px] relative w-full">
                <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
                <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1851px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtQuicksandMedium16WhiteA700"
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
      </div>
    </>
  );
};

export default ErrorPagePage;
