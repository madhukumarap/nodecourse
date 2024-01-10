import React from "react";

import { Button, Img, Text } from "components";

const C05HomepageBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[360px] m-auto object-cover rounded-lg w-full"
          src="images/img_image_40.png"
          alt="image_Fifteen"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14WhiteA700"
              >
                {props?.saleofftheweektext}
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                size="txtPoppinsSemiBold36WhiteA700"
              >
                {props?.salesoftheyeartext}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  {props?.zerotext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.daystext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twentyone}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  {props?.twotext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.hourstext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twentytwo}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  {props?.eighteentext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.minstext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twentythree}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  {props?.fortysixtext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.secstext}
                </Text>
              </div>
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
              {props?.shopnowthreebutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C05HomepageBannar1.defaultProps = {
  saleofftheweektext: "sale off the week",
  salesoftheyeartext: "Sales of the Year",
  zerotext: "00",
  daystext: "Days",
  twentyone: ":",
  twotext: "02",
  hourstext: "Hours",
  twentytwo: ":",
  eighteentext: "18",
  minstext: "Mins",
  twentythree: ":",
  fortysixtext: "46",
  secstext: "Secs",
  shopnowthreebutton: "Shop Now",
};

export default C05HomepageBannar1;
