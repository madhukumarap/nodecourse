import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[335px] m-auto object-cover w-full"
          alt="image_Two"
          src={props?.imageTwo}
        />
        <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[6%] w-auto md:w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
            <Text
              className="text-black-900 text-center text-xs tracking-[0.36px] uppercase w-auto"
              size="txtPoppinsMedium12Black900"
            >
              {props?.summersale}
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-deep_orange-500 w-auto"
              size="txtPoppinsSemiBold32Deeporange500"
            >
              {props?.offerOne}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[162px]"
            rightIcon={
              <Img
                className="ml-3"
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
              {props?.shopNowTwo}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutBannar1.defaultProps = {
  imageTwo: "images/img_image_335x248.png",
  summersale: "Summer Sale",
  offerOne: "75% off",
  shopNowTwo: "Shop Now",
};

export default C02HomepageBoxLayoutBannar1;
