import React from "react";

import { Img, Text } from "components";

const BannarBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-72 inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
          alt="bg_One"
          src={props?.bgimage}
        />
        <div className="absolute flex flex-col gap-8 h-max inset-[0] items-center justify-start m-auto w-auto">
          <div className="flex flex-col gap-3 items-center justify-center w-auto">
            <Text
              className="text-center text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14WhiteA700"
            >
              {props?.bestdealtext}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[343px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtPoppinsSemiBold32"
            >
              {props?.specialproductstext}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-base text-center text-deep_orange-500 w-auto"
              size="txtPoppinsSemiBold16Deeporange500"
            >
              {props?.shopnowtext}
            </Text>
            <Img
              className="h-3 w-[15px]"
              alt="arrowleft_One"
              src={props?.arrowleftimage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

BannarBannar1.defaultProps = {
  bgimage: "images/img_bg_1.png",
  bestdealtext: "Best Deal",
  specialproductstext: "Special Products Deal of the Month",
  shopnowtext: "Shop Now",
  arrowleftimage: "images/img_arrowleft_deep_orange_500.svg",
};

export default BannarBannar1;
