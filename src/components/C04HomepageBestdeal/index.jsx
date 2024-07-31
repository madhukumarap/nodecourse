import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageBestdeal = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[308px] sm:h-auto md:ml-[0] ml-[114px] object-cover w-[29%] md:w-full"
          src="images/img_image_484x819.png"
          alt="image_One"
        />
        <div className="h-[495px] sm:h-[582px] relative w-[62%] md:w-full">
          <Img
            className="absolute h-[495px] inset-y-[0] my-auto object-cover right-[0] w-[63%]"
            src="images/img_image_495x704.png"
            alt="image_Two"
          />
          <div className="absolute flex flex-col gap-3 items-center justify-start left-[0] top-[13%] w-auto">
            <Text
              className="text-base text-center text-deep_orange-500 tracking-[0.32px] uppercase w-auto"
              size="txtPoppinsMedium16Deeporange500"
            >
              {props?.bestdeals}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[508px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 text-center"
              size="txtPoppinsSemiBold40Black90001"
            >
              {props?.ourspecialproduOne}
            </Text>
          </div>
          <div className="absolute bottom-[37%] flex sm:flex-col flex-row gap-2 items-center justify-start left-[3%] w-auto">
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-deep_orange-500 w-auto"
                size="txtPoppinsRegular32Deeporange500"
              >
                {props?.zero}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14Gray60001"
              >
                {props?.days}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.seventeen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-deep_orange-500 w-auto"
                size="txtPoppinsRegular32Deeporange500"
              >
                {props?.two}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.hours}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.eighteen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-deep_orange-500 w-auto"
                size="txtPoppinsRegular32Deeporange500"
              >
                {props?.eighteenTwo}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.mins}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.nineteen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-deep_orange-500 w-auto"
                size="txtPoppinsRegular32Deeporange500"
              >
                {props?.fortysix}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.secs}
              </Text>
            </div>
          </div>
          <Button
            className="bottom-[20%] cursor-pointer flex items-center justify-center left-[14%] min-w-[191px] rounded-[25px]"
            rightIcon={
              <Img
                className="mt-1 mb-[7px] ml-4 left-[1%] absolute inset-y-[1%]"
                src="images/img_arrowleft.svg"
                alt="arrow_left"
              />
            }
            color="deep_orange_500"
            size="lg"
            variant="fill"
          >
            <div className="font-poppins font-semibold text-base text-left">
              {props?.shopNow}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageBestdeal.defaultProps = {
  bestdeals: "Best Deals",
  ourspecialproduOne: "Our Special Products Deal of the Month",
  zero: "00",
  days: "Days",
  seventeen: ":",
  two: "02",
  hours: "Hours",
  eighteen: ":",
  eighteenTwo: "18",
  mins: "Mins",
  nineteen: ":",
  fortysix: "46",
  secs: "Secs",
  shopNow: "Shop now",
};

export default C04HomepageBestdeal;
