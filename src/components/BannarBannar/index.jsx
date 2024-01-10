import React from "react";

import { Img, Text } from "components";

const BannarBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-72 inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
          src="images/img_bg_288x423.png"
          alt="bg"
        />
        <div className="absolute flex flex-col gap-6 items-start justify-start left-[8%] top-[10%] w-auto">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-black-900 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14"
              >
                {props?.summersale}
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
                size="txtPoppinsSemiBold32Black900"
              >
                {props?.offer}
              </Text>
            </div>
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtPoppinsRegular14Gray700"
            >
              {props?.onlyfruitvegetaOne}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-base text-deep_orange-500 w-auto"
              size="txtPoppinsSemiBold16Deeporange500"
            >
              {props?.shopnow}
            </Text>
            <Img
              className="h-3 w-[15px]"
              src="images/img_arrowleft_deep_orange_500.svg"
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
    </>
  );
};

BannarBannar.defaultProps = {
  summersale: "Summer Sale",
  offer: "75% OFF",
  onlyfruitvegetaOne: "Only Fruit & Vegetable",
  shopnow: "Shop Now",
};

export default BannarBannar;
