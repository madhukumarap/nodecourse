import React from "react";

import { Button, Img, Text } from "components";

const C05HomepageBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[360px] m-auto object-cover rounded-[10px] w-full"
          src="images/img_image_360x648.png"
          alt="image_Fourteen"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
          <div className="flex flex-col gap-5 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14WhiteA700"
              >
                {props?.p100organic}
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                size="txtPoppinsSemiBold36WhiteA700"
              >
                {props?.fruitvegetable}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-center text-sm text-white-A700_a2 w-auto"
                size="txtPoppinsRegular14WhiteA700a2"
              >
                {props?.startingat}
              </Text>
              <Button
                className="cursor-pointer font-medium font-poppins min-w-[62px] rounded-[5px] text-base text-center"
                color="deep_orange_500"
                size="xs"
                variant="fill"
              >
                {props?.p11ninetynine}
              </Button>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[162px]"
            rightIcon={
              <Img
                className="ml-3"
                src="images/img_arrowleft.svg"
                alt="arrow_left"
              />
            }
            shape="round"
            color="deep_orange_500"
            size="lg"
            variant="fill"
          >
            <div className="font-poppins font-semibold text-left text-sm">
              {props?.shopNowTwo}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C05HomepageBannar.defaultProps = {
  p100organic: "100% Organic",
  fruitvegetable: "Fruit & Vegetable",
  startingat: "Starting at:",
  p11ninetynine: "$11.99",
  shopNowTwo: "Shop Now",
};

export default C05HomepageBannar;
