import React from "react";

import { Button, Img, List, Text } from "components";

const PopularProductsBigproducts = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[446px] h-[448px] relative w-full">
          <div className="absolute h-[446px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[446px] m-auto object-cover w-full"
              src="images/img_image_446x525.png"
              alt="image"
            />
            <div className="absolute flex flex-row gap-2 items-center justify-start left-[5%] top-[5%] w-auto">
              <div className="bg-deep_orange-500 flex flex-row gap-1 items-center justify-center px-2 py-[3px] rounded w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  {props?.sale}
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  {props?.fifty}
                </Text>
              </div>
              <Text
                className="bg-blue-A400 justify-center px-2 py-0.5 rounded text-sm text-white-A700 w-auto"
                size="txtPoppinsRegular14WhiteA700"
              >
                {props?.tag}
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[5%] flex sm:flex-col flex-row gap-2 inset-x-[0] items-center justify-start mx-auto sm:px-5 px-6 w-auto">
            <Button
              className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
              shape="circle"
              color="gray_100"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center w-[371px]"
              rightIcon={
                <div className="h-[15px] mt-[3px] mb-0.5 w-[15px] outline-white-A700 outline-[0.5px] outline">
                  <Img
                    className="h-[15px]"
                    src="images/img_bag_white_a700.svg"
                    alt="bag"
                  />
                </div>
              }
              shape="round"
              color="deep_orange_500"
              size="lg"
              variant="fill"
            >
              <div className="font-poppins font-semibold text-left text-sm">
                {props?.addToCart}
              </div>
            </Button>
            <Button
              className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
              shape="circle"
              color="gray_100"
              size="lg"
              variant="fill"
            >
              <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start pt-1.5 sm:px-5 px-6 w-auto md:w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start w-[34%] md:w-full">
            <Text
              className="text-center text-deep_orange-500 text-lg w-auto"
              size="txtPoppinsRegular18Deeporange500"
            >
              {props?.language}
            </Text>
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                {props?.price}
              </Text>
              <Text
                className="line-through text-2xl md:text-[22px] text-red-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24RedA700"
              >
                {props?.priceOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-auto">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starOne"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starTwo"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starThree"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starFour"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starFive"
            />
            <Text
              className="text-gray-600 text-xs w-auto"
              size="txtPoppinsRegular12Gray600"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center justify-center pb-6 pt-[18px] w-auto">
          <Text
            className="text-center text-red-A700 text-sm w-auto"
            size="txtPoppinsRegular14RedA700"
          >
            {props?.hurryupoffer}
          </Text>
          <div className="flex flex-row items-start justify-start w-auto">
            <List
              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[48%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  {props?.one}
                </Text>
                <Text
                  className="text-[10px] text-center text-red-A700 tracking-[0.30px] uppercase w-auto"
                  size="txtPoppinsMedium10RedA700"
                >
                  {props?.days}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-black-900 text-center text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  {props?.twentythree}
                </Text>
                <Text
                  className="text-[10px] text-center text-red-A700 tracking-[0.30px] uppercase w-auto"
                  size="txtPoppinsMedium10RedA700"
                >
                  {props?.hours}
                </Text>
              </div>
            </List>
            <Text
              className="text-center text-gray-600 text-xl w-auto"
              size="txtPoppinsRegular20Gray600"
            >
              {props?.ninetyfour}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtPoppinsMedium18"
              >
                {props?.thirtyfour}
              </Text>
              <Text
                className="text-[10px] text-center text-red-A700 tracking-[0.30px] uppercase w-auto"
                size="txtPoppinsMedium10RedA700"
              >
                {props?.mins}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600 text-xl w-auto"
              size="txtPoppinsRegular20Gray600"
            >
              {props?.ninetyfive}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtPoppinsMedium18"
              >
                {props?.fiftyseven}
              </Text>
              <Text
                className="text-[10px] text-center text-red-A700 tracking-[0.30px] uppercase w-auto"
                size="txtPoppinsMedium10RedA700"
              >
                {props?.secs}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PopularProductsBigproducts.defaultProps = {
  sale: "Sale",
  fifty: "50%",
  tag: "Best Sale",
  addToCart: "Add to Cart",
  language: "Chinese cabbage",
  price: "$12.00",
  priceOne: "$24.00",
  languageOne: " (524 Feedback)",
  hurryupoffer: "Hurry up! Offer ends In:",
  one: "01",
  days: "Days",
  twentythree: "23",
  hours: "Hours",
  ninetyfour: ":",
  thirtyfour: "34",
  mins: "Mins",
  ninetyfive: ":",
  fiftyseven: "57",
  secs: "Secs",
};

export default PopularProductsBigproducts;
