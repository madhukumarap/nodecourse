import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const BannarBannarbig = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_bannarbig.png')" }}
      >
        <div className="flex flex-col gap-7 items-start justify-start my-[95px] w-auto md:w-full">
          <Text
            className="leading-[120.00%] max-w-[596px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
            size="txtPoppinsSemiBold48WhiteA700"
          >
            {props?.freshhealthy}
          </Text>
          <Sidebar className="!sticky !w-[231px] bg-deep_orange-A400 flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Line className="bg-deep_orange-A400 h-[65px] w-0.5" />
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    {props?.saleupto}
                  </Text>
                  <Button
                    className="cursor-pointer font-poppins font-semibold min-w-[108px] rounded-[5px] text-center text-xl"
                    color="deep_orange_A400"
                    size="xs"
                    variant="fill"
                  >
                    {props?.p30off}
                  </Button>
                </div>
                <Text
                  className="text-sm text-white-A700_a2 w-auto"
                  size="txtPoppinsRegular14WhiteA700a2"
                >
                  {props?.freeshippingon}
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[191px] mr-10 mt-[26px] rounded-[25px]"
              rightIcon={
                <Img
                  className="mt-1 mb-[7px] ml-4"
                  src="images/img_arrowleft_deep_orange_a400.svg"
                  alt="arrow_left"
                />
              }
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="!text-deep_orange-A400 font-poppins font-semibold text-base text-left">
                {props?.shopNow}
              </div>
            </Button>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

BannarBannarbig.defaultProps = {
  freshhealthy: (
    <>
      Fresh & Healthy
      <br />
      Organic Food
    </>
  ),
  saleupto: "Sale up to",
  p30off: "30% OFF",
  freeshippingon: "Free shipping on all your order.",
  shopNow: "Shop now",
};

export default BannarBannarbig;
