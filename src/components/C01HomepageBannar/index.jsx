import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[536px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          src="images/img_rectangle54.png"
          alt="rectangleFiftyFour"
        />
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[84%]">
          <Text
            className="text-center text-sm text-white-A700 tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14WhiteA700"
          >
            {props?.bestdealstext}
          </Text>
          <Text
            className="mt-1 sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
            size="txtPoppinsSemiBold40WhiteA700"
          >
            {props?.saleofthemonthtext}
          </Text>
          <div className="flex flex-row gap-2 items-start justify-start mt-0.5 w-auto">
            <div className="flex flex-col gap-1 items-center justify-start w-14">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24WhiteA700"
              >
                {props?.zerotext}
              </Text>
              <Text
                className="text-center text-white-A700_cc text-xs tracking-[0.36px] uppercase w-auto"
                size="txtPoppinsRegular12WhiteA700cc"
              >
                {props?.daystext}
              </Text>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700_99 sm:text-xl w-auto"
              size="txtPoppinsRegular24WhiteA70099"
            >
              {props?.one}
            </Text>
            <div className="flex flex-col gap-1 items-center justify-start w-14">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24WhiteA700"
              >
                {props?.twotext}
              </Text>
              <Text
                className="text-center text-white-A700_cc text-xs tracking-[0.36px] uppercase w-auto"
                size="txtPoppinsRegular12WhiteA700cc"
              >
                {props?.hourstext}
              </Text>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700_99 sm:text-xl w-auto"
              size="txtPoppinsRegular24WhiteA70099"
            >
              {props?.three}
            </Text>
            <div className="flex flex-col gap-1 items-center justify-start w-14">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24WhiteA700"
              >
                {props?.eighteentext}
              </Text>
              <Text
                className="text-center text-white-A700_cc text-xs tracking-[0.36px] uppercase w-auto"
                size="txtPoppinsRegular12WhiteA700cc"
              >
                {props?.minstext}
              </Text>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700_99 sm:text-xl w-auto"
              size="txtPoppinsRegular24WhiteA70099"
            >
              {props?.four}
            </Text>
            <div className="flex flex-col gap-1 items-center justify-start w-14">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsRegular24WhiteA700"
              >
                {props?.fortysixtext}
              </Text>
              <Text
                className="text-center text-white-A700_cc text-xs tracking-[0.36px] uppercase w-auto"
                size="txtPoppinsRegular12WhiteA700cc"
              >
                {props?.secstext}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[162px] mt-[21px]"
            rightIcon={
              <Img
                className="mt-[3px] mb-[5px] ml-3"
                src="images/img_arrowleft_deep_orange_500.svg"
                alt="arrow_left"
              />
            }
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            <div className="!text-deep_orange-500 font-poppins font-semibold text-justify text-sm">
              {props?.shopnowbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C01HomepageBannar.defaultProps = {
  bestdealstext: "Best Deals",
  saleofthemonthtext: "Sale of the Month",
  zerotext: "00",
  daystext: "Days",
  one: ":",
  twotext: "02",
  hourstext: "Hours",
  three: ":",
  eighteentext: "18",
  minstext: "Mins",
  four: ":",
  fortysixtext: "46",
  secstext: "Secs",
  shopnowbutton: "Shop Now",
};

export default C01HomepageBannar;
