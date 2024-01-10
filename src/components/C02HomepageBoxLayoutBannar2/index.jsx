import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutBannar2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[423px] m-auto object-cover w-full"
          alt="rectangleFiftyFour_One"
          src={props?.rectanglefiftyfourOne}
        />
        <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[7%] w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
            <Text
              className="text-black-900 text-center text-xs tracking-[0.36px] uppercase w-auto"
              size="txtPoppinsMedium12Black900"
            >
              {props?.summerfruitcoll}
            </Text>
            {props?.startingat2399}
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
              {props?.shopNowThree}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutBannar2.defaultProps = {
  rectanglefiftyfourOne: "images/img_rectangle54_423x312.png",
  summerfruitcoll: "HOt Sale",
  startingat2399: (
    <Text
      className="leading-[120.00%] max-w-[312px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
      size="txtPoppinsSemiBold32Black900"
    >
      <span className="text-black-900 font-poppins font-semibold">
        Save 37%
      </span>
      <span className="text-black-900 font-poppins font-normal">
        <>
          {" "}
          on
          <br />
          Every Order
        </>
      </span>
    </Text>
  ),
  shopNowThree: "Shop Now",
};

export default C02HomepageBoxLayoutBannar2;
