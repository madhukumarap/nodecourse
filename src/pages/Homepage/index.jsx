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
import C01HomepageBannar from "components/C01HomepageBannar";
import C01HomepageBannar1 from "components/C01HomepageBannar1";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C01HomepageBigproducts from "components/C01HomepageBigproducts";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C01HomepageDiscountbannar from "components/C01HomepageDiscountbannar";
import C01HomepageFeatured from "components/C01HomepageFeatured";
import C01HomepageHeading from "components/C01HomepageHeading";
import C01HomepageProduct5n from "components/C01HomepageProduct5n";
import C01HomepageProduct5n1 from "components/C01HomepageProduct5n1";
import C01HomepageProduct5n2 from "components/C01HomepageProduct5n2";
import Footer from "components/Footer";

const HomepagePage = () => {
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <header className="bg-white-A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center pb-2 px-2 w-full">
            <Img
              className="md:flex-1 h-[79px] sm:h-auto md:ml-[0] ml-[78px] object-cover w-[24%] md:w-full"
              src="images/img_traceworkstrademarked.png"
              alt="traceworkstrade"
            />
            <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[185px] rounded-md w-auto sm:w-full">
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
        </header>
        <div className="flex flex-col max-w-[1864px] mt-1.5 mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 flex flex-col gap-7 items-center justify-end mx-auto p-8 sm:px-5 w-full">
            <div className="h-[564px] sm:h-[600px] md:h-[911px] mt-9 relative w-[86%] md:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[88%]">
                <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                  <div className="h-[564px] relative w-[59%] md:w-full">
                    <Img
                      className="h-[564px] m-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image_One"
                    />
                    <div className="absolute bg-deep_orange-500 flex flex-col h-[100px] items-center justify-start p-[15px] right-[5%] rounded-[50%] top-[27%] w-[100px]">
                      <div className="flex flex-col items-center justify-start mb-[5px] w-[65px]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                          size="txtPoppinsSemiBold32"
                        >
                          70%
                        </Text>
                        <Text
                          className="text-base text-center text-white-A700 tracking-[0.32px] uppercase w-auto"
                          size="txtPoppinsMedium16"
                        >
                          off
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start w-2/5 md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase w-auto"
                        size="txtSegoeScript14"
                      >
                        Welcome to shopery
                      </Text>
                      <Text
                        className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-black-900_01"
                        size="txtPoppinsSemiBold56"
                      >
                        <>
                          Fresh & Healthy
                          <br />
                          Organic Food
                        </>
                      </Text>
                    </div>
                    <Text
                      className="mt-[21px] text-gray-600_01 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      Free shipping on all your order. we deliver, you enjoy
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[191px] mt-[29px] rounded-[25px]"
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
              <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
                <Button
                  className="border border-deep_orange-500 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_arrowdown.svg" alt="arrowdown" />
                </Button>
                <Button
                  className="border border-deep_orange-500 border-solid flex h-[45px] items-center justify-center w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowleft_black_900_01.svg"
                    alt="arrowleft"
                  />
                </Button>
              </div>
            </div>
            <PagerIndicator
              className="flex gap-2 h-2 items-center justify-start w-12"
              count={3}
              activeCss="inline-block cursor-pointer h-2 bg-deep_orange-500 w-4 rounded"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100_01 w-2"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <C01HomepageFeatured className="bg-white-A700 border border-gray-300 border-solid sm:flex-col flex-row md:gap-10 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-between max-w-[1320px] mt-[-32px] mx-auto rounded-lg shadow-bs2 w-full z-[1]" />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[45px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <C01HomepageHeading className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full" />
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Fresh Fruit
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_130x190.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-deep_orange-500 text-lg w-auto"
                  size="txtPoppinsMedium18Deeporange500"
                >
                  Fresh Vegetables
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_1.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Meat & Fish
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_2.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Snacks
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_3.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Beverages
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_4.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Beauty & Health
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_5.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Bread & Bakery
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_6.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Baking Needs
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_7.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Cooking
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_8.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Diabetic Food
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_9.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Dish Detergents
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 rounded-[5px] hover:shadow-bs3 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_10.png"
                  alt="imageOne"
                />
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Oil
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-12 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
            <C01HomepageHeading
              className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Popular Products"
            />
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n className="md:h-[317px] h-[327px] mx-auto w-full" />
                <C01HomepageProduct5n1 className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]" />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_3.png"
                  productname="Fresh Indian Malta"
                />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_4.png"
                  productname="Corn"
                />
              </div>
              <div className="h-[654px] relative w-full">
                <C01HomepageProduct5n2 className="md:h-[317px] h-[327px] mb-[-0.5px] mx-auto w-full z-[1]" />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-auto mx-auto w-full"
                  productimage="images/img_image_5.png"
                  productname="Fresh Cauliflower"
                  productprice="$12.00"
                />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_7.png"
                  productname="Green Lettuce"
                  productprice="$9.00"
                />
                <C01HomepageProduct5n
                  className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  image="images/img_image_8.png"
                  greenapple="Green Capsicum"
                  price="$9.00"
                />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_9.png"
                  productname="Eggplant"
                  productprice="$34.00"
                />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_10.png"
                  productname="Green Chili"
                  productprice="$34.00"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1320px] mt-[59px] mx-auto md:px-5 w-full">
          <C01HomepageBannar className="h-[536px] relative w-[33%] md:w-full" />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
            orientation="horizontal"
          >
            <C01HomepageBannar1 className="h-[536px] relative w-full" />
            <C01HomepageBannar2 className="h-[536px] relative w-full" />
          </List>
        </div>
        <div className="bg-gray-100_01 flex flex-col items-center justify-start mt-[60px] p-[54px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1320px] mb-[5px] mx-auto w-full">
            <C01HomepageHeading
              className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Hot Deals"
            />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-2/5 md:w-full">
                <div className="flex h-[654px] md:h-[655px] justify-end relative w-full">
                  <Text
                    className="ml-[194px] mt-auto text-base text-center text-gray-600"
                    size="txtPoppinsRegular16"
                  >
                    :
                  </Text>
                  <C01HomepageBigproducts className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto outline outline-[0.5px] outline-deep_orange-500 shadow-bs3 w-auto" />
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_20.png"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <C01HomepageProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_21.png"
                    productname="Corn"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </List>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_5.png"
                    productname="Fresh Cauliflower"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <C01HomepageProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_22.png"
                    productname="Red Chili"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_6.png"
                    productname="Chinese cabbage"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </div>
                <div className="flex flex-col sm:ml-[0] relative w-full">
                  <div className="flex flex-col mx-auto w-full">
                    <C01HomepageProduct5n1
                      className="h-[327px] mx-auto w-full"
                      productimage="images/img_image_7.png"
                      productname="Green Lettuce"
                      productprice="$9.00"
                      closeOne="images/img_close_blue_gray_100.svg"
                    />
                    <C01HomepageProduct5n
                      className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                      image="images/img_image_8.png"
                      greenapple="Green Capsicum"
                      price="$9.00"
                      close="images/img_close_blue_gray_100.svg"
                    />
                  </div>
                  <C01HomepageProduct5n
                    className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                    image="images/img_image_23.png"
                    greenapple="Red Tomatos"
                    price="$9.00"
                    close="images/img_close_blue_gray_100.svg"
                  />
                </div>
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_10.png"
                    productname="Green Chili"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <C01HomepageProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_24.png"
                    productname="Surjapur Mango"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_9.png"
                    productname="Eggplant"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <C01HomepageDiscountbannar
          className="bg-cover bg-no-repeat flex flex-col gap-7 h-[358px] items-start justify-center max-w-[1320px] mt-[60px] mx-auto p-[51px] md:px-5 rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
          offer={
            <Text className="font-semibold md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-auto">
              <span className="text-deep_orange-500 font-poppins text-left">
                37%
              </span>
              <span className="text-white-A700 font-poppins text-left"> </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                OFF
              </span>
            </Text>
          }
        />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[54px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <C01HomepageHeading
              className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Featured Products"
            />
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <C01HomepageProduct5n
                className="md:h-[317px] h-[327px] relative w-full"
                close="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_3.png"
                productname="Fresh Indian Malta"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n2
                className="md:h-[317px] h-[327px] relative w-full"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_7.png"
                productname="Green Lettuce"
                productprice="$9.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_9.png"
                productname="Eggplant"
                productprice="$34.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
            </List>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-8 items-center justify-center mt-[683px] py-[60px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
              size="txtPoppinsSemiBold32Black900"
            >
              Client Testimonials
            </Text>
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
                  alt="arrowdown_One"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft_Five" />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1320px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {c01HomepageColumnuserPropList.map((props, index) => (
              <React.Fragment key={`C01HomepageColumnuser${index}`}>
                <C01HomepageColumnuser
                  className="bg-white-A700 flex sm:flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Footer className="flex items-center justify-center mt-[482px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
