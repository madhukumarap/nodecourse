import React from "react";

import { Button, Img, Input, Text } from "components";

const C05HomepageColumnlock = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start p-4 w-[10%] md:w-full"
          style={{ backgroundImage: "url('images/img_icon.svg')" }}
        >
          <Img
            className="h-6 my-[3px] w-6"
            src="images/img_lock.svg"
            alt="lock"
          />
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
          <Text
            className="text-black-900 text-sm tracking-[0.42px] uppercase w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.subscribenewsleOne}
          </Text>
          <div className="h-[45px] relative w-full">
            <Input
              name="inputfield"
              placeholder="Your email address"
              className="font-poppins p-0 placeholder:text-red-A700 text-left text-sm w-full"
              wrapClassName="absolute border border-gray-300 border-solid inset-y-[0] left-[0] my-auto rounded-[22px] w-[93%]"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
            <Button
              className="absolute cursor-pointer font-poppins font-semibold h-full inset-y-[0] min-w-[136px] my-auto right-[0] text-center text-sm"
              shape="round"
              color="deep_orange_500"
              size="lg"
              variant="fill"
            >
              {props?.subscribe}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageColumnlock.defaultProps = {
  subscribenewsleOne: "Subscribe Newsletter",
  subscribe: "Subscribe",
};

export default C05HomepageColumnlock;
