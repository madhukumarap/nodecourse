import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import C01HomepageBannar from "components/C01HomepageBannar";
import C01HomepageBannar1 from "components/C01HomepageBannar1";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutBannar1 from "components/C02HomepageBoxLayoutBannar1";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C03HomepageCategories from "components/C03HomepageCategories";
import C03HomepageColumnThree from "components/C03HomepageColumnThree";
import Header from "components/Header";

const Homepage1Page = () => {
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
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];
  const c01HomepageColumnuserPropList1 = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col max-w-[1520px] mx-auto md:px-5 relative w-full">
            <div className="bg-deep_orange-500_3f flex flex-col md:gap-10 gap-[71px] items-center justify-center mx-auto p-[52px] md:px-10 sm:px-5 rounded-lg w-full">
              <div className="h-[503px] md:h-[549px] mt-[65px] relative w-[97%] md:w-full">
                <div className="absolute md:h-[484px] h-[503px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
                  <Img
                    className="absolute h-[484px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow"
                  />
                  <div className="absolute h-[484px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[484px] m-auto object-cover w-full"
                      src="images/img_image_484x819.png"
                      alt="image_One"
                    />
                    <Img
                      className="absolute h-[484px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image_484x819.png"
                      alt="highlight"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[44%]">
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
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[5px] mt-[25px] w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
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
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Free shipping on all your order. we deliver, you enjoy
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
              <PagerIndicator
                className="flex gap-2 h-2 items-center justify-start mb-[51px] w-12"
                count={3}
                activeCss="inline-block cursor-pointer h-2 bg-deep_orange-500 w-4 rounded"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100_01 w-2"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1400px] mt-[-64px] mx-auto p-10 sm:px-5 rounded-lg shadow-bs10 w-full z-[1]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_deliverytruck1.svg"
                    alt="deliverytruckOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Free Shipping
                    </Text>
                    <Text
                      className="text-red-A700 text-sm w-auto"
                      size="txtPoppinsRegular14RedA700"
                    >
                      Free shipping on all your order
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_headphones1.svg"
                    alt="headphonesOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Customer Support 24/7
                    </Text>
                    <Text
                      className="text-red-A700 text-sm w-auto"
                      size="txtPoppinsRegular14RedA700"
                    >
                      Instant access to Support
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_bag_deep_orange_500.svg"
                    alt="bag"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      100% Secure Payment
                    </Text>
                    <Text
                      className="text-red-A700 text-sm w-auto"
                      size="txtPoppinsRegular14RedA700"
                    >
                      We ensure your money is save
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_package.svg"
                    alt="package"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Money-Back Guarantee
                    </Text>
                    <Text
                      className="text-red-A700 text-sm w-auto"
                      size="txtPoppinsRegular14RedA700"
                    >
                      30 Days Money-Back Guarantee
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
              size="txtPoppinsSemiBold40"
            >
              Featured Products
            </Text>
            <PagerIndicator
              className="flex gap-1 h-1 items-start justify-start w-[72px]"
              count={3}
              activeCss="inline-block cursor-pointer h-1 bg-deep_orange-500 w-10"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer h-1 bg-deep_orange-500_75 w-3"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
                productimage="images/img_image_230x254.png"
                productname="Green Apple"
              />
              <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full" />
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
                productimage="images/img_image_32.png"
                productname="Green Lettuce"
              />
              <C02HomepageBoxLayoutProductsx1
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                image="images/img_image_8.png"
              />
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
                productimage="images/img_image_33.png"
                productname="Corn"
              />
            </List>
            <div className="flex relative w-[1320px] md:w-full">
              <div className="flex my-auto w-[84%] md:w-full">
                <div className="flex my-auto w-[70%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start my-auto w-auto">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Hot Deals
                    </Text>
                    <C02HomepageBoxLayoutProduct
                      className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                      image="images/img_image_230x254.png"
                      text="Green Apple"
                    />
                    <C02HomepageBoxLayoutProduct1 className="md:h-[115px] h-[116px] relative w-[424px] sm:w-full" />
                    <C02HomepageBoxLayoutProduct
                      className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                      image="images/img_image_7.png"
                      text="Green Lettuce"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
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
                    className="text-black-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
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
              <C02HomepageBoxLayoutBannar1
                className="h-[426px] ml-[-88px] my-auto w-[24%] z-[1]"
                imageTwo="images/img_image_426x312.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1490px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Top Category
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-deep_orange-500 w-10"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-deep_orange-500_75 w-3"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Button
                className="border border-gray-300 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[82px] rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown_Six"
                />
              </Button>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 shadow-bs3 w-auto hover:w-full">
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
                <C03HomepageCategories className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full" />
                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
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
                      River Fish
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      34 Products
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
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
                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
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
                <div className="bg-white-A700 border hover:border-0 border-gray-200 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs3 w-auto hover:w-full">
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
              </List>
              <Button
                className="border border-gray-300 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[82px] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft_black_900.svg" alt="arrowleft" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <C01HomepageBannar className="h-[536px] relative w-[33%] md:w-full" />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
            orientation="horizontal"
          >
            <C01HomepageBannar1
              className="h-[536px] relative w-full"
              rectanglefiftyfour="images/img_rectangle54_4.png"
            />
            <C01HomepageBannar2
              className="h-[536px] relative w-full"
              rectanglefiftyfour="images/img_rectangle54_5.png"
            />
          </List>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[1320px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Newest Products
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-deep_orange-500 w-10"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-deep_orange-500_75 w-3"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex flex-row gap-3 items-center justify-center w-auto">
              <a
                href="javascript:"
                className="text-base text-deep_orange-500 w-auto"
              >
                <Text size="txtPoppinsMedium16Deeporange500">View All</Text>
              </a>
              <Img
                className="h-3 w-[15px]"
                src="images/img_arrowleft_deep_orange_500.svg"
                alt="arrowleft_One"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start max-w-[1320px] mx-auto w-full"
            orientation="horizontal"
          >
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
              productimage="images/img_image_230x254.png"
              productname="Green Appl"
            />
            <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full" />
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
              productimage="images/img_image_246x246.png"
              productname="Green Lettuce"
            />
            <C02HomepageBoxLayoutProductsx1
              className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
              image="images/img_image_8.png"
            />
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs3 hover:w-full w-full"
              productimage="images/img_image_21.png"
              productname="Corn"
            />
          </List>
        </div>
        <div className="bg-deep_orange-500_3f flex flex-col gap-[50px] items-center justify-start py-[100px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Client Testimonial
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-deep_orange-500 w-10"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer h-1 bg-deep_orange-500_75 w-3"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
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
                  alt="arrowdown_Seven"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft_Two" />
              </Button>
            </div>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="max-w-[1320px] mx-auto md:px-5 w-full"
            items={[...Array(5)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                  orientation="horizontal"
                >
                  {c01HomepageColumnuserPropList1.map((props, index) => (
                    <React.Fragment key={`C01HomepageColumnuser${index}`}>
                      <C01HomepageColumnuser
                        className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs12 w-auto sm:w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-2 bg-deep_orange-500 w-4 rounded" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100_01 w-2"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-2 h-2 items-center justify-start w-20"
            count={5}
            activeCss="inline-block cursor-pointer h-2 bg-deep_orange-500 w-4 rounded"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100_01 w-2"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <C03HomepageColumnThree className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full" />
      </div>
    </>
  );
};

export default Homepage1Page;
