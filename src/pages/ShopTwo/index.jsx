import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C08ShopTwoBreadcumb from "components/C08ShopTwoBreadcumb";
import Footer from "components/Footer";
import Header from "components/Header";

const ShopTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start mt-6 md:px-10 sm:px-5 px-[300px] w-full">
          <C08ShopTwoBreadcumb className="flex flex-row gap-3 items-center justify-start w-auto" />
        </div>
        <div
          className="bg-cover bg-no-repeat md:h-[266px] h-[358px] max-w-[1320px] mt-[21px] mx-auto p-[57px] md:px-5 relative rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
        >
          <div className="absolute bg-deep_orange-500 flex flex-col items-center justify-end left-[36%] py-[25px] rounded-[50%] top-[16%] w-[100px]">
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
              size="txtPoppinsSemiBold24WhiteA700"
            >
              56%
            </Text>
            <Text
              className="text-center text-sm text-white-A700_cc tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14WhiteA700cc"
            >
              Off
            </Text>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[5%] my-auto w-[33%]">
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    Best Deals
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold40WhiteA700"
                  >
                    Sale of the Month
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      00
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Days
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      02
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Hours
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      18
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Mins
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      46
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Secs
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[162px]"
                rightIcon={
                  <Img
                    className="mt-[3px] mb-[5px] ml-3"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-justify text-sm">
                  Shop Now
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start mt-10 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <List
              className="sm:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 justify-start w-auto sm:w-full"
              orientation="horizontal"
            >
              <div className="border border-gray-300 border-solid flex flex-row gap-5 items-center justify-start px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Category
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300 border-solid flex flex-row gap-[52px] items-center justify-start px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Price
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Rating
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
            </List>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
              <div className="border border-gray-300 border-solid flex flex-row gap-[35px] items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Sort by: Latest
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Show: 16
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark.svg"
                  alt="checkmark_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 shadow-bs7 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1320px] mx-auto w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Active Filters:
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Wing Chair
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-[44%] sm:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtPoppinsMedium14"
                  >
                    Min $300 - Max 500
                  </Text>
                  <div className="h-[26px] md:h-[27px] mt-[3px] relative w-[14%]">
                    <Img
                      className="absolute h-3 left-[0] top-[0] w-3"
                      src="images/img_close_blue_gray_900.svg"
                      alt="close_One"
                    />
                    <Img
                      className="absolute bottom-[0] h-6 inset-x-[0] mx-auto w-6"
                      src="images/img_hand3.svg"
                      alt="handThree"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="text-black-900 text-right text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                <span className="text-black-900 font-poppins font-medium">
                  2,547
                </span>
                <span className="text-black-900 font-poppins font-normal">
                  {" "}
                </span>
                <span className="text-gray-600 font-poppins font-normal">
                  Results found.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_50.png"
              productname="Red Chili"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_42.png"
              productname="Big Potatos"
            />
            <C05HomepageProductx2
              className="md:h-[397px] h-[407px] relative w-full"
              image="images/img_image_6.png"
              productname="Chanise Cabbage"
            />
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              image="images/img_image_21.png"
              greenapple="Ladies Finger"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_51.png"
              productname="Red Tomato"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_9.png"
              productname="Eggplant"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_43.png"
              productname="Fresh Cauliflower"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_44.png"
              productname="Green Apple"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_52.png"
              productname="Fresh Mango"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_8.png"
              productname="Green Capsicum"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_45.png"
              productname="Green Chili"
            />
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              image="images/img_image_46.png"
              sale="Sale"
              fifty="50%"
              greenapple="Green Cucumber"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_21.png"
              productname="Green Littuce"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_47.png"
              productname="Green Littuce"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_48.png"
              productname="Ladies Finger"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_49.png"
              productname="Green Capsicum"
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start mt-[39px] md:px-5 w-auto">
          <Button
            className="flex h-9 items-center justify-center rounded-[50%] w-9"
            shape="circle"
            color="gray_100"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_arrowleft_gray_400.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-row items-start justify-start w-auto">
            <Text
              className="bg-deep_orange-500 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
              size="txtPoppinsMedium16"
            >
              1
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              2
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              3
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              4
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              5
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              ...
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              21
            </Text>
          </div>
          <Button
            className="border border-gray-300 border-solid flex h-9 items-center justify-center rotate-[180deg] rounded-[50%] w-9"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShopTwoPage;
