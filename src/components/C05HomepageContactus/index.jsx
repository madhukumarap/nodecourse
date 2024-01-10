import React from "react";

import { Img, Text } from "components";

const C05HomepageContactus = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[62px] w-14"
          src="images/img_user_deep_orange_500.svg"
          alt="user_Four"
        />
        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
          <Text
            className="text-black-900 text-sm tracking-[0.42px] uppercase w-auto"
            size="txtPoppinsMedium14"
          >
            {props?.callustext}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-deep_orange-500 sm:text-xl w-[183px]"
            size="txtPoppinsRegular24"
          >
            {props?.phonenumbertext}
          </Text>
        </div>
      </div>
    </>
  );
};

C05HomepageContactus.defaultProps = {
  callustext: "Call Us 24/7",
  phonenumbertext: "(303) 555-0105",
};

export default C05HomepageContactus;
