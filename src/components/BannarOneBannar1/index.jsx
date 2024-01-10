import React from "react";

import { Button, Img, Text } from "components";

const BannarOneBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[536px] m-auto object-cover rounded-lg w-full"
          src="images/img_rectangle54_1.png"
          alt="rectangleFiftyFour"
        />
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-[76%]">
          <Text
            className="text-black-900 text-center text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14"
          >
            {props?.summersale}
          </Text>
          <Text
            className="mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtPoppinsSemiBold40"
          >
            {props?.p100freshfruit}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start mt-[3px] w-[51%] md:w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <Text
                className="text-black-900 text-center text-lg w-auto"
                size="txtPoppinsRegular18Black900"
              >
                {props?.upto}
              </Text>
              <Button
                className="!text-amber-A400 cursor-pointer font-poppins font-semibold min-w-[100px] rounded-[5px] text-center text-lg"
                color="black_900"
                size="sm"
                variant="fill"
              >
                {props?.p64off}
              </Button>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[162px]"
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
                {props?.shopNow}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

BannarOneBannar1.defaultProps = {
  summersale: "Summer Sale",
  p100freshfruit: "100% Fresh Fruit",
  upto: "Up to",
  p64off: "64% OFF",
  shopNow: "Shop Now",
};

export default BannarOneBannar1;
