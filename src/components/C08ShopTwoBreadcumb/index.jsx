import React from "react";

import { Img, Text } from "components";

const C08ShopTwoBreadcumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 w-6"
          src="images/img_home_gray_700.svg"
          alt="home_Six"
        />
        <Img
          className="h-2 w-1"
          src="images/img_vector_gray_700.svg"
          alt="vector"
        />
        <Text
          className="text-base text-gray-700 w-auto"
          size="txtPoppinsRegular16Gray700"
        >
          {props?.categories}
        </Text>
        <Img
          className="h-2 w-1"
          src="images/img_vector_gray_700.svg"
          alt="vector_One"
        />
        <Text
          className="text-base text-deep_orange-500 w-auto"
          size="txtPoppinsRegular16Deeporange500"
        >
          {props?.vegetablestext}
        </Text>
      </div>
    </>
  );
};

C08ShopTwoBreadcumb.defaultProps = {
  categories: "Categories",
  vegetablestext: "Vegetables",
};

export default C08ShopTwoBreadcumb;
