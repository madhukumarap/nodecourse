import React from "react";

import { Img, Text } from "components";

const C01HomepageHeading = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
          size="txtPoppinsSemiBold32Black900"
        >
          {props?.text}
        </Text>
        <div className="flex flex-row gap-3 items-center justify-center w-auto">
          <Text
            className="text-base text-deep_orange-500 w-auto"
            size="txtPoppinsMedium16Deeporange500"
          >
            {props?.viewall}
          </Text>
          <Img
            className="h-3 w-[15px]"
            src="images/img_arrowleft_deep_orange_500.svg"
            alt="arrowleft_One"
          />
        </div>
      </div>
    </>
  );
};

C01HomepageHeading.defaultProps = {
  text: "Popular Categories",
  viewall: "View All",
};

export default C01HomepageHeading;
