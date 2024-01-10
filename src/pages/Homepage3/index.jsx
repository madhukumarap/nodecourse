import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutBannar2 from "components/C02HomepageBoxLayoutBannar2";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C03HomepageCategories from "components/C03HomepageCategories";
import C05HomepageBannar from "components/C05HomepageBannar";
import C05HomepageBannar1 from "components/C05HomepageBannar1";
import C05HomepageColumnlock from "components/C05HomepageColumnlock";
import C05HomepageContactus from "components/C05HomepageContactus";
import C05HomepageOurlocation from "components/C05HomepageOurlocation";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";

const Homepage3Page = () => {
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];
  const c02HomepageBoxLayoutProductPropList = [
    { text: "Eggplant", image: "images/img_image_9.png" },
    {},
    { text: "Red Tomatos", image: "images/img_image_28.png" },
  ];
  const c02HomepageBoxLayoutProductPropList1 = [
    { text: "Big Potatos", image: "images/img_image_2.png" },
    { text: "Corn", image: "images/img_image_4.png" },
    { text: "Fresh cauliflower", image: "images/img_image_5.png" },
  ];

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[6674px] mx-auto relative w-full">
        <div className="sm:h-[6164px] h-[6674px] md:h-[8053px] m-auto md:px-5 w-full">
          <div className="sm:h-[6164px] h-[6674px] md:h-[8053px] m-auto w-full">
            <div className="sm:h-[6164px] h-[6674px] md:h-[8053px] m-auto w-full">
              <div className="bg-white-A700 flex flex-col h-full items-center justify-start m-auto pb-[47px] w-full">
                <div className="sm:h-[960px] md:h-[961px] h-[984px] relative w-full">
                  <div className="md:h-[912px] sm:h-[960px] h-[984px] m-auto w-full">
                    <List
                      className="absolute bg-white-A700 bottom-[0] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-start mx-auto shadow-bs8 w-auto"
                      orientation="horizontal"
                    >
                      <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs14 w-auto hover:w-full">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            Free Shipping
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            Free shipping with discount
                          </Text>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs14 w-auto hover:w-full">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            Great Support 24/7
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            Instant access to Contact
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs14 shadow-bs14 w-auto hover:w-full">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_1.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            100% Sucure Payment
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            We ensure your money is save
                          </Text>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs14 w-auto hover:w-full">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            Money-Back Guarantee
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            30 days money-back
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                      <div className="h-[800px] relative w-full">
                        <header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center mb-[-71px] mx-auto w-full z-[1]">
                          <div className="flex flex-col relative w-full">
                            <div className="bg-white-A700 flex flex-col items-center justify-between max-w-[1920px] mx-auto md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
                              <div className="flex flex-col items-center justify-start w-[9%]">
                                <div className="flex flex-row gap-5 items-center justify-start w-auto">
                                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-center text-gray-700 text-xs w-auto"
                                      size="txtPoppinsRegular12"
                                    >
                                      Eng
                                    </Text>
                                    <Img
                                      className="h-[3px]"
                                      src="images/img_arrowdown_gray_700.svg"
                                      alt="arrowdown_One"
                                    />
                                  </div>
                                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-center text-gray-700 text-xs w-auto"
                                      size="txtPoppinsRegular12"
                                    >
                                      USD
                                    </Text>
                                    <Img
                                      className="h-[3px]"
                                      src="images/img_arrowdown_gray_700.svg"
                                      alt="arrowdown_Two"
                                    />
                                  </div>
                                  <Line className="bg-gray-300 h-[15px] w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mt-[-6px] mx-auto pb-2 px-2 w-full z-[1]">
                              <Img
                                className="md:flex-1 h-[85px] sm:h-auto object-cover w-[24%] md:w-full"
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
                                  className="cursor-pointer font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
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
                              <a
                                href="javascript:"
                                className="md:ml-[0] ml-[35px] md:mt-0 mt-[39px] text-gray-700 text-xs"
                              >
                                <Text size="txtPoppinsRegular12">Sign In</Text>
                              </a>
                              <div className="flex flex-row gap-1 h-9 md:h-auto items-start justify-start md:ml-[0] ml-[49px] mr-[53px] md:mt-0 mt-[37px] w-[115px]">
                                <Text
                                  className="text-gray-700 text-xs w-auto"
                                  size="txtPoppinsRegular12"
                                >
                                  /
                                </Text>
                                <a
                                  href="javascript:"
                                  className="text-gray-700 text-xs w-auto"
                                >
                                  <Text size="txtPoppinsRegular12">
                                    Sign Up
                                  </Text>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="bg-deep_orange-500 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
                            <ul className="flex sm:flex-col flex-row gap-8 sm:hidden items-center justify-start w-auto common-row-list">
                              <li>
                                <a href="javascript:">
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
                                      alt="arrowdown_Three"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
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
                                      alt="arrowdown_Four"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
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
                                      alt="arrowdown_Five"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
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
                                      alt="arrowdown_Six"
                                    />
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-sm text-white-A700 w-auto"
                                      size="txtPoppinsMedium14WhiteA700"
                                    >
                                      About Us
                                    </Text>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="javascript:">
                                  <div className="flex flex-col items-center justify-start">
                                    <a
                                      href="javascript:"
                                      className="text-sm text-white-A700 w-auto"
                                    >
                                      <Text size="txtPoppinsMedium14WhiteA700">
                                        Contact Us
                                      </Text>
                                    </a>
                                  </div>
                                </a>
                              </li>
                            </ul>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-7 w-7"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="text-sm text-white-A700 w-auto"
                                size="txtPoppinsMedium14WhiteA700"
                              >
                                (219) 555-0114
                              </Text>
                            </div>
                          </div>
                        </header>
                        <div className="sm:h-[640px] h-[680px] md:h-[912px] mt-auto mx-auto w-full">
                          <div className="md:h-[640px] h-[680px] m-auto w-full">
                            <div className="absolute bg-deep_orange-500_3f h-[640px] inset-x-[0] mx-auto top-[0] w-full"></div>
                            <Img
                              className="absolute bottom-[0] h-28 object-cover right-[9%] w-[5%]"
                              src="images/img_top.png"
                              alt="top"
                            />
                          </div>
                          <div className="absolute h-[640px] md:h-[912px] inset-x-[0] mx-auto top-[0] w-full">
                            <div className="h-[640px] m-auto w-full">
                              <Img
                                className="h-[640px] m-auto object-cover w-full"
                                src="images/img_bg.png"
                                alt="bg_One"
                              />
                              <PagerIndicator
                                className="absolute bottom-[4%] flex gap-2 h-3 inset-x-[0] items-center justify-center mx-auto w-[52px]"
                                count={3}
                                activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-deep_orange-500 w-3 relative"
                                activeIndex={1}
                                inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-100_01 w-3 relative"
                                selectedWrapperCss="inline-block"
                                unselectedWrapperCss="inline-block"
                              />
                              <div className="absolute flex flex-row flex-wrap md:gap-10 h-max inset-[0] items-center justify-between m-auto max-w-[1920px] md:px-10 sm:px-5 px-[190px] w-full">
                                <Button
                                  className="border border-gray-300 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  <Img
                                    src="images/img_arrowdown_black_900.svg"
                                    alt="arrowdown"
                                  />
                                </Button>
                                <Button
                                  className="border border-gray-300 border-solid flex h-[45px] items-center justify-center w-[45px]"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  <Img
                                    src="images/img_arrowleft_black_900.svg"
                                    alt="arrowleft"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="absolute flex md:flex-col flex-row gap-[38px] h-max inset-[0] items-start justify-center m-auto w-[72%]">
                              <Img
                                className="h-[498px] sm:h-auto object-cover w-[54%] md:w-full"
                                src="images/img_image_498x742.png"
                                alt="image"
                              />
                              <div className="flex flex-col items-start justify-start md:mt-0 mt-[81px] w-[44%] md:w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="md:ml-[0] ml-[5px] text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase"
                                    size="txtPoppinsMedium14Deeporange500"
                                  >
                                    Welcome to shopery
                                  </Text>
                                  <Text
                                    className="leading-[120.00%] mt-1 md:text-5xl text-7xl text-black-900"
                                    size="txtPoppinsSemiBold72"
                                  >
                                    <>
                                      Fresh & Healthy
                                      <br />
                                      Organic Food
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[25px]">
                                  <Text
                                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                                    size="txtPoppinsRegular32"
                                  >
                                    <span className="text-black-900 font-poppins text-left font-normal">
                                      Sale up to{" "}
                                    </span>
                                    <span className="text-deep_orange-500 font-poppins text-left font-semibold">
                                      30% OFF
                                    </span>
                                  </Text>
                                  <Text
                                    className="mt-1 text-gray-600 text-sm"
                                    size="txtPoppinsRegular14Gray600"
                                  >
                                    Free shipping on all your order. we deliver,
                                    you enjoy
                                  </Text>
                                </div>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[191px] md:ml-[0] ml-[5px] mt-[30px] rounded-[25px]"
                                  rightIcon={
                                    <Img
                                      className="mt-1 mb-[7px] ml-4"
                                      src="images/img_arrowleft.svg"
                                      alt="arrow_left"
                                    />
                                  }
                                  color="deep_orange_500"
                                  size="lg"
                                  variant="fill"
                                >
                                  <div className="font-semibold text-base text-left">
                                    Shop now
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row gap-6 inset-x-[0] items-center justify-center mx-auto shadow-bs8 w-auto">
                    <List
                      className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-4 items-center justify-start py-10 w-auto">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            Free Shipping
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            Free shipping with discount
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start py-10 w-auto">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            Great Support 24/7
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            Instant access to Contact
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="h-56 md:h-[223px] relative w-[24%] md:w-full">
                      <div className="absolute bg-white-A700 flex flex-col gap-4 h-full inset-[0] items-center justify-start m-auto py-10 shadow-bs14 w-auto">
                        <Img
                          className="md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_icon_72x72.png"
                          alt="icon"
                        />
                        <div className="flex flex-col gap-2 items-start justify-center w-auto">
                          <Text
                            className="text-black-900 text-center text-lg w-auto"
                            size="txtPoppinsSemiBold18"
                          >
                            100% Sucure Payment
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsRegular14RedA700"
                          >
                            We ensure your money is save
                          </Text>
                        </div>
                      </div>
                      <Line className="absolute bg-deep_orange-500 bottom-[0] h-1 inset-x-[0] mx-auto w-full" />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start py-10 w-auto">
                      <Img
                        className="md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_icon_72x72.png"
                        alt="icon_One"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-auto">
                        <Text
                          className="text-black-900 text-center text-lg w-auto"
                          size="txtPoppinsSemiBold18"
                        >
                          Money-Back Guarantee
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsRegular14RedA700"
                        >
                          30 days money-back
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1040px] mt-[73px] relative w-full">
                  <div className="flex flex-col items-center justify-start mb-[-44px] w-[85%] z-[1]">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                            size="txtPoppinsSemiBold40"
                          >
                            Featured Products
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center w-auto">
                          <a
                            href="javascript:"
                            className="text-base text-deep_orange-500 w-auto"
                          >
                            <Text size="txtPoppinsMedium16Deeporange500">
                              View All
                            </Text>
                          </a>
                          <Img
                            className="h-3 w-[15px]"
                            src="images/img_arrowleft_deep_orange_500.svg"
                            alt="arrowleft_Three"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-full">
                        <div className="md:h-[226px] h-[434px] md:mt-0 mt-[22px] relative w-[9%] md:w-full">
                          <div className="absolute bottom-[18%] md:h-[110px] h-[116px] left-[0] w-1/4">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[89%]">
                              <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[59%] md:w-full">
                                  <Img
                                    className="h-[17px] ml-0.5 md:ml-[0]"
                                    src="images/img_contrast.svg"
                                    alt="contrast"
                                  />
                                  <Img
                                    className="h-[9px] ml-0.5 md:ml-[0] mt-1.5"
                                    src="images/img_contrast.svg"
                                    alt="contrast_One"
                                  />
                                  <Img
                                    className="h-2.5 mt-3"
                                    src="images/img_contrast.svg"
                                    alt="contrast_Two"
                                  />
                                </div>
                                <Img
                                  className="h-3.5 mt-[3px] w-[15px]"
                                  src="images/img_contrast_gray_100.svg"
                                  alt="contrast_Three"
                                />
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-[13px] w-[78%] md:w-full">
                                  <Img
                                    className="h-[9px]"
                                    src="images/img_contrast_gray_100.svg"
                                    alt="contrast_Four"
                                  />
                                  <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                                    <Img
                                      className="h-[11px] mt-[3px]"
                                      src="images/img_user_gray_100.svg"
                                      alt="user_One"
                                    />
                                    <Img
                                      className="h-[9px]"
                                      src="images/img_vector.svg"
                                      alt="vector"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[13px] right-[0] top-[14%] w-3"
                              src="images/img_contrast_gray_100_13x12.svg"
                              alt="contrast_Five"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[41%] h-[19px] left-[17%]"
                            src="images/img_contrast_gray_100_13x12.svg"
                            alt="contrast_Six"
                          />
                          <Img
                            className="absolute bottom-[15%] h-3.5 left-[17%] w-[13px]"
                            src="images/img_user_gray_100_14x13.svg"
                            alt="user_Two"
                          />
                          <div className="absolute bottom-[19%] flex flex-row gap-[5px] items-start justify-center left-[31%] w-[29%]">
                            <Img
                              className="h-[97px] mt-1"
                              src="images/img_close_gray_100.svg"
                              alt="close"
                            />
                            <div className="flex flex-col items-start justify-start w-[52%]">
                              <Img
                                className="h-3.5"
                                src="images/img_contrast_gray_100_13x12.svg"
                                alt="contrast_Seven"
                              />
                              <Img
                                className="h-3 ml-0.5 md:ml-[0]"
                                src="images/img_contrast.svg"
                                alt="contrast_Eight"
                              />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex md:h-[226px] h-[434px] inset-[0] justify-end m-auto sm:pr-5 pr-[33px] py-[33px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group262.svg')",
                            }}
                          >
                            <div className="h-[207px] md:h-[226px] mb-[19px] mt-auto w-[77%]">
                              <div className="absolute flex inset-y-[0] left-[0] my-auto w-[88%]">
                                <div className="flex h-[207px] justify-end my-auto w-[47%]">
                                  <Img
                                    className="h-[58px] mt-auto"
                                    src="images/img_close_gray_100_58x20.svg"
                                    alt="close_One"
                                  />
                                  <Img
                                    className="absolute h-[207px] inset-[0] justify-center m-auto"
                                    src="images/img_vector_gray_100.svg"
                                    alt="vector_One"
                                  />
                                </div>
                                <Img
                                  className="h-[122px] mb-[23px] ml-[-6.93px] mt-auto z-[1]"
                                  src="images/img_vector_gray_100_122x57.svg"
                                  alt="vector_Two"
                                />
                              </div>
                              <Img
                                className="absolute h-[166px] inset-y-[0] my-auto right-[0]"
                                src="images/img_vector_gray_100_166x52.svg"
                                alt="vector_Three"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[13%] h-[15px] inset-x-[0] mx-auto"
                              src="images/img_user_gray_100_14x13.svg"
                              alt="user_Three"
                            />
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[82%] md:w-full"
                          orientation="horizontal"
                        >
                          <C05HomepageProductx
                            className="md:h-[397px] h-[407px] relative w-full"
                            sale="Sale"
                            fifty="50%"
                          />
                          <C05HomepageProductx1 className="h-[407px] relative w-full" />
                          <C05HomepageProductx2 className="md:h-[397px] h-[407px] relative w-full" />
                          <C05HomepageProductx1
                            className="h-[407px] relative w-full"
                            image="images/img_image_302x302.png"
                            productname="Ladies Finger"
                          />
                        </List>
                      </div>
                      <Img
                        className="h-[70px] md:h-auto mt-1 object-cover w-[5%]"
                        src="images/img_growthcloseup.png"
                        alt="growthcloseup"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                    <div className="flex md:h-[1136px] h-[459px] sm:h-[510px] justify-end relative w-full">
                      <div className="bg-gradient2  flex flex-col h-full items-center justify-end mt-auto mx-auto p-[27px] sm:px-5 shadow-bs7 w-full">
                        <div className="flex flex-col items-center justify-start mt-[50px] w-4/5 md:w-full">
                          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                                <Text
                                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                                  size="txtPoppinsSemiBold40"
                                >
                                  Shop by Top Categories
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                                <a
                                  href="javascript:"
                                  className="text-base text-deep_orange-500 w-auto"
                                >
                                  <Text size="txtPoppinsMedium16Deeporange500">
                                    View All
                                  </Text>
                                </a>
                                <Img
                                  className="h-3 w-[15px]"
                                  src="images/img_arrowleft_deep_orange_500.svg"
                                  alt="arrowleft_One"
                                />
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                              <Button
                                className="border border-gray-300 border-solid flex h-[45px] items-center justify-center mb-[163px] md:mt-0 mt-[84px] rotate-[180deg] w-[45px]"
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              >
                                <Img
                                  src="images/img_arrowdown_black_900.svg"
                                  alt="arrowdown_Seven"
                                />
                              </Button>
                              <List
                                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5"
                                orientation="horizontal"
                              >
                                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs3 shadow-bs3 w-auto hover:w-full">
                                  <Img
                                    className="h-20 w-20"
                                    src="images/img_vegetable.svg"
                                    alt="vegetable"
                                  />
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-center text-deep_orange-500 text-lg w-auto"
                                      size="txtPoppinsMedium18Deeporange500"
                                    >
                                      Vegetables
                                    </Text>
                                    <Text
                                      className="text-center text-gray-600 text-sm w-auto"
                                      size="txtPoppinsRegular14Gray600"
                                    >
                                      165 Products
                                    </Text>
                                  </div>
                                </div>
                                <C03HomepageCategories className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full" />
                                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
                                  <Img
                                    className="h-20 w-20"
                                    src="images/img_salad_1.svg"
                                    alt="fishOne"
                                  />
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-black-900 text-center text-lg w-auto"
                                      size="txtPoppinsMedium18"
                                    >
                                      Fish
                                    </Text>
                                    <Text
                                      className="text-center text-gray-600 text-sm w-auto"
                                      size="txtPoppinsRegular14Gray600"
                                    >
                                      34 Products
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
                                  <Img
                                    className="h-20 w-20"
                                    src="images/img_meat1.svg"
                                    alt="meatOne"
                                  />
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-black-900 text-center text-lg w-auto"
                                      size="txtPoppinsMedium18"
                                    >
                                      Meat
                                    </Text>
                                    <Text
                                      className="text-center text-gray-600 text-sm w-auto"
                                      size="txtPoppinsRegular14Gray600"
                                    >
                                      165 Products
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
                                  <Img
                                    className="h-20 w-20"
                                    src="images/img_vegetable.svg"
                                    alt="softdrinkOne"
                                  />
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-black-900 text-center text-lg w-auto"
                                      size="txtPoppinsMedium18"
                                    >
                                      Water and Drinks
                                    </Text>
                                    <Text
                                      className="text-center text-gray-600 text-sm w-auto"
                                      size="txtPoppinsRegular14Gray600"
                                    >
                                      48 Products
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <div className="md:h-[210px] h-[291px] relative w-1/5 md:w-full">
                                <Img
                                  className="absolute bottom-[0] h-[91px] object-cover right-[15%] w-[31%]"
                                  src="images/img_1903.png"
                                  alt="1903"
                                />
                                <div className="absolute bg-white-A700 border border-gray-200 border-solid flex flex-col gap-5 items-center justify-end left-[0] pb-6 pt-8 rounded-md top-[0] w-auto">
                                  <Img
                                    className="h-20 w-20"
                                    src="images/img_salad_1.svg"
                                    alt="snacksOne"
                                  />
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                                    <Text
                                      className="text-black-900 text-center text-lg w-auto"
                                      size="txtPoppinsMedium18"
                                    >
                                      Snacks
                                    </Text>
                                    <Text
                                      className="text-center text-gray-600 text-sm w-auto"
                                      size="txtPoppinsRegular14Gray600"
                                    >
                                      165 Products
                                    </Text>
                                  </div>
                                </div>
                                <Button
                                  className="absolute border border-gray-300 border-solid flex h-[45px] items-center justify-center right-[0] top-[29%] w-[45px]"
                                  shape="round"
                                  color="white_A700"
                                  size="lg"
                                  variant="fill"
                                >
                                  <Img
                                    src="images/img_arrowleft_black_900.svg"
                                    alt="arrowleft_Two"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[9%] h-[139px] object-cover right-[0]"
                        src="images/img_group7.png"
                        alt="groupSeven"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient3  sm:h-[3653px] md:h-[4156px] h-[504px] mt-[3211px] pt-[61px] relative w-full">
                  <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start right-[3%] w-[89%]">
                    <Img
                      className="h-[111px] sm:h-auto md:mt-0 mt-[368px] object-cover w-[7%] md:w-full"
                      src="images/img_38.png"
                      alt="ThirtyEight"
                    />
                    <div className="h-[294px] md:h-[602px] sm:h-[880px] mb-[70px] md:ml-[0] ml-[9px] md:mt-0 mt-[78px] relative w-[82%] md:w-full">
                      <Img
                        className="absolute h-[90px] object-cover right-[0] top-[0] w-[8%]"
                        src="images/img_growthcloseup_90x102.png"
                        alt="growthcloseup_One"
                      />
                      <List
                        className="absolute bottom-[0] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start left-[0] w-auto"
                        orientation="horizontal"
                      >
                        {c01HomepageColumnuserPropList.map((props, index) => (
                          <React.Fragment key={`C01HomepageColumnuser${index}`}>
                            <C01HomepageColumnuser
                              className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                    <Img
                      className="h-48 ml-24 md:ml-[0]"
                      src="images/img_group12.svg"
                      alt="groupTwelve"
                    />
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1920px] mx-auto md:px-10 sm:px-5 px-[300px] top-[13%] w-full">
                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-base text-deep_orange-500 uppercase w-auto"
                        size="txtSegoeScript16"
                      >
                        Testimonial
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                        size="txtPoppinsSemiBold40"
                      >
                        What Our Customer Says
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <Button
                        className="border border-gray-300 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrowdown_Eight"
                        />
                      </Button>
                      <Button
                        className="flex h-[45px] items-center justify-center w-[45px]"
                        shape="round"
                        color="deep_orange_500"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          alt="arrowleft_Four"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-center mt-[197px] w-[69%] md:w-full">
                  <C05HomepageOurlocation className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto" />
                  <C05HomepageContactus className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto" />
                  <C05HomepageColumnlock className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-3.5 items-start justify-start p-5 rounded-lg w-auto md:w-full" />
                </div>
                <div className="flex flex-col font-quicksand items-center justify-start mt-[107px] w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1908px] w-full">
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
                        <div className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto">
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Food Delivery
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Meat Delivery
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Track Order
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Shipping Details
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                          size="txtQuicksandSemiBold24"
                        >
                          Useful links
                        </Text>
                        <div className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto">
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            About Us
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Conact
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Hot deals
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            Promotions
                          </Text>
                          <Text
                            className="text-base text-black-900 w-auto"
                            size="txtQuicksandMedium16"
                          >
                            New products
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[62px] sm:h-[76px] relative w-full">
                      <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
                      <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1918px] w-full">
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
              </div>
              <div className="absolute bottom-[33%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[157px] md:mt-0 mt-[370px]"
                    src="images/img_group10.svg"
                    alt="groupTen"
                  />
                  <Img
                    className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[120px] md:mt-0 mt-[480px] object-cover w-[4%] md:w-full"
                    src="images/img_1902.png"
                    alt="1902"
                  />
                  <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start ml-6 md:ml-[0] w-[72%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                      <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                              size="txtPoppinsSemiBold40"
                            >
                              Best Seller Products
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-center w-auto">
                            <a
                              href="javascript:"
                              className="text-base text-deep_orange-500 w-auto"
                            >
                              <Text size="txtPoppinsMedium16Deeporange500">
                                View All
                              </Text>
                            </a>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft_deep_orange_500.svg"
                              alt="arrowleft_Five"
                            />
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                          orientation="horizontal"
                        >
                          <C02HomepageBoxLayoutProductsx1
                            className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                            image="images/img_image_230x254.png"
                            greenappletextprops="Green Apple"
                          />
                          <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs3 hover:w-full w-full" />
                          <C02HomepageBoxLayoutProductsx
                            className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs3 hover:w-full w-full"
                            productimage="images/img_image_246x246.png"
                            productname="Green Lettuce"
                          />
                          <C02HomepageBoxLayoutProductsx1 className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
                          <C02HomepageBoxLayoutProductsx
                            className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs3 hover:w-full w-full"
                            productimage="images/img_image_21.png"
                            productname="Corn"
                          />
                        </List>
                      </div>
                    </div>
                    <div className="md:h-[432px] h-[436px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-20 object-cover right-[0] w-[7%]"
                        src="images/img_growthcloseup_90x102.png"
                        alt="growthcloseup_Two"
                      />
                      <div className="absolute flex inset-[0] m-auto w-[1320px] md:w-full">
                        <div className="flex my-auto w-[84%] md:w-full">
                          <div className="flex my-auto w-[70%] md:w-full">
                            <div className="flex flex-col gap-4 items-start justify-start my-auto w-auto">
                              <Text
                                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                size="txtPoppinsMedium24"
                              >
                                Hot Deals
                              </Text>
                              <C02HomepageBoxLayoutProduct
                                className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                image="images/img_image_230x254.png"
                                text="Green Apple"
                              />
                              <div className="flex flex-col items-center justify-start w-full">
                                <C02HomepageBoxLayoutProduct1
                                  className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                  bagone="images/img_bag_white_a700.svg"
                                  eyeoneone="images/img_eye1.svg"
                                  favoriteone="images/img_favorite.svg"
                                />
                              </div>
                              <C02HomepageBoxLayoutProduct
                                className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                image="images/img_image_7.png"
                                text="Green Lettuce"
                              />
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                              <Text
                                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                                size="txtPoppinsMedium24"
                              >
                                Best Seller
                              </Text>
                              <List
                                className="flex flex-col gap-4 items-center w-full"
                                orientation="vertical"
                              >
                                {c02HomepageBoxLayoutProductPropList.map(
                                  (props, index) => (
                                    <React.Fragment
                                      key={`C02HomepageBoxLayoutProduct${index}`}
                                    >
                                      <C02HomepageBoxLayoutProduct
                                        className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                        {...props}
                                      />
                                    </React.Fragment>
                                  ),
                                )}
                              </List>
                            </div>
                          </div>
                          <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtPoppinsMedium24"
                            >
                              Top Rated
                            </Text>
                            <List
                              className="flex flex-col gap-4 items-center w-full"
                              orientation="vertical"
                            >
                              {c02HomepageBoxLayoutProductPropList1.map(
                                (props, index) => (
                                  <React.Fragment
                                    key={`C02HomepageBoxLayoutProduct${index}`}
                                  >
                                    <C02HomepageBoxLayoutProduct
                                      className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                      {...props}
                                    />
                                  </React.Fragment>
                                ),
                              )}
                            </List>
                          </div>
                        </div>
                        <C02HomepageBoxLayoutBannar2
                          className="h-[432px] ml-[-88px] my-auto w-[24%] z-[1]"
                          startingat2399={
                            <Text className="font-semibold leading-[120.00%] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center">
                              <span className="text-black-900 font-poppins">
                                Save 37%
                              </span>
                              <span className="text-black-900 font-poppins font-normal">
                                <>
                                  {" "}
                                  on
                                  <br />
                                  Every Order
                                </>
                              </span>
                            </Text>
                          }
                          rectanglefiftyfourOne="images/img_rectangle54_432x312.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[139px] md:h-auto md:ml-[0] ml-[111px] md:mt-0 mt-[427px] object-cover"
                    src="images/img_group1.png"
                    alt="groupOne"
                  />
                </div>
              </div>
            </div>
            <div className="absolute h-[791px] md:h-[911px] inset-[0] justify-center m-auto sm:pr-5 pr-[21px] w-[98%] md:w-full">
              <Img
                className="h-[791px] m-auto object-cover"
                src="images/img_bg_gray_300.png"
                alt="bg_Two"
              />
              <div className="absolute bottom-[15%] flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-center right-[5%] w-[79%]">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mb-[50px] w-[90%] md:w-full">
                  <C05HomepageBannar className="h-[360px] relative w-1/2 md:w-full" />
                  <C05HomepageBannar1 className="h-[360px] relative w-1/2 md:w-full" />
                </div>
                <Img
                  className="h-[77px] sm:h-auto md:mt-0 mt-[333px] object-cover w-[6%] md:w-full"
                  src="images/img_184.png"
                  alt="OneHundredEightyFour"
                />
              </div>
            </div>
          </div>
          <div className="absolute md:h-[331px] sm:h-[408px] h-[454px] inset-x-[0] mx-auto top-[39%] w-full">
            <Img
              className="absolute h-[146px] object-cover right-[5%] top-[0] w-[6%]"
              src="images/img_objects2.png"
              alt="objectsTwo"
            />
            <div className="absolute bottom-[0] md:h-[331px] h-[348px] sm:h-[408px] inset-x-[0] mx-auto w-full">
              <div className="absolute h-[331px] sm:h-[408px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[331px] m-auto object-cover w-full"
                  src="images/img_bg_331x1920.png"
                  alt="bg_Three"
                />
                <div className="absolute gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-max inset-[0] items-center justify-center m-auto w-auto">
                  <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-deep_orange-500 top-[18%] w-max"
                      size="txtPoppinsLight56"
                    >
                      37+
                    </Text>
                    <Text
                      className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Years of Hard Work
                    </Text>
                  </div>
                  <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-deep_orange-500 w-auto"
                      size="txtPoppinsLight56"
                    >
                      500k+
                    </Text>
                    <Text
                      className="text-center text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Happy Customer
                    </Text>
                  </div>
                  <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-deep_orange-500 top-[18%] w-max"
                      size="txtPoppinsLight56"
                    >
                      28
                    </Text>
                    <Text
                      className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Qualified Team Member
                    </Text>
                  </div>
                  <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                    <Text
                      className="md:text-5xl sm:text-[42px] text-[56px] text-deep_orange-500 w-auto"
                      size="txtPoppinsLight56"
                    >
                      750k+
                    </Text>
                    <Text
                      className="text-center text-lg text-white-A700 w-auto"
                      size="txtPoppinsRegular18WhiteA700"
                    >
                      Monthly Orders
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[169px] object-cover right-[0] top-[4%]"
                src="images/img_group8.png"
                alt="groupEight"
              />
              <Img
                className="absolute bottom-[0] h-[95px] right-[5%]"
                src="images/img_globe.svg"
                alt="globe"
              />
              <Img
                className="absolute h-[233px] left-[0] object-cover top-[7%] w-[12%]"
                src="images/img_pawelczerwinsk.png"
                alt="pawelczerwinsk"
              />
            </div>
          </div>
        </div>
        <div className="absolute sm:h-[558px] h-[617px] md:h-[950px] inset-x-[0] max-w-[1885px] mx-auto md:px-5 py-6 top-[31%] w-full">
          <div className="flex flex-col gap-[26px] h-full items-start justify-start ml-auto mr-[261px] my-auto w-auto">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="leading-[120.00%] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtPoppinsSemiBold40"
              >
                <>
                  100% Trusted
                  <br />
                  Organic Food Store
                </>
              </Text>
            </div>
            <List
              className="flex flex-col gap-[26px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="deep_orange_500"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_check1.svg"
                      alt="checkOne"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Healthy & natural food for lovers of healthy food.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:pl-5 pl-[34px] w-auto sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[500px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Ut quis tempus erat. Phasellus euismod bibendum magna non
                    tristique. Pellentesque semper vestibulum elit sed
                    condimentum. Nunc pretium fermentum interdum.{" "}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="deep_orange_500"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_check1.svg"
                      alt="checkOne"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Every day fresh and quality products for you.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:pl-5 pl-8 w-auto sm:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[504px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Maecenas vehicula a justo quis laoreet. Sed in placerat
                    nibh, a posuere ex. Morbi sem neque, aliquam sed orci et,
                    rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.
                  </Text>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[192px] rounded-[25px]"
              rightIcon={
                <Img
                  className="ml-4"
                  src="images/img_arrowleft.svg"
                  alt="arrow_left"
                />
              }
              color="deep_orange_500"
              size="lg"
              variant="fill"
            >
              <div className="font-semibold text-base text-left">Shop Now</div>
            </Button>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto pb-[45px] md:px-10 sm:px-5 px-[45px] w-full"
            style={{ backgroundImage: "url('images/img_group264.png')" }}
          >
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[190px] w-[46%] md:w-full">
              <div className="md:h-[424px] h-[488px] mb-6 relative w-[43%] md:w-full">
                <div className="absolute md:h-[400px] h-[456px] right-[0] top-[0] w-[81%]">
                  <Img
                    className="absolute h-[100px] object-cover right-[1%] top-[0] w-[33%]"
                    src="images/img_image_100x91.png"
                    alt="image_Eighteen"
                  />
                  <Img
                    className="absolute bottom-[0] h-[400px] inset-x-[0] mx-auto object-cover rounded-lg w-full"
                    src="images/img_image_400x276.png"
                    alt="image_Nineteen"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[104px] left-[0] object-cover w-[104px]"
                  src="images/img_image_104x104.png"
                  alt="image_Twenty"
                />
              </div>
              <Img
                className="h-[457px] sm:h-auto md:mt-0 mt-14 object-cover rounded-lg w-[55%] md:w-full"
                src="images/img_image_457x444.png"
                alt="image_TwentyOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage3Page;
