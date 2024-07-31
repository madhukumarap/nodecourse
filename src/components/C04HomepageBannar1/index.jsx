import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[255px] m-auto object-cover rounded-lg w-full"
          src="images/img_image_34.png"
          alt="image"
        />
        <div className="absolute flex flex-col gap-5 h-max inset-y-[0] items-center justify-start my-auto right-[6%] w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-black-900_01 text-sm tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14Black90001"
            >
              {props?.drinksaletext}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[156px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900_01"
              size="txtPoppinsSemiBold32Black90001"
            >
              {props?.watersoftdrinktext}
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
            <div className="!text-deep_orange-500 font-poppins font-semibold text-left text-sm">
              {props?.shopnowbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageBannar1.defaultProps = {
  drinksaletext: "Drink Sale",
  watersoftdrinktext: (
    <>
      Water &<br />
      Soft Drink
    </>
  ),
  shopnowbutton: "Shop Now",
};

export default C04HomepageBannar1;
