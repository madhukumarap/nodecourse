import React from "react";

import { Img, Text } from "components";

const C07ShopOneOneBreadcrumbs = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
      >
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[254px] mt-0.5 w-[24%] md:w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
            <Img className="h-6 w-6" alt="home_Six" src={props?.homesiximage} />
            {!!props?.vectorimage ? (
              <Img className="h-2 w-1" alt="vector" src={props?.vectorimage} />
            ) : null}
            {!!props?.categorytext ? (
              <Text
                className="text-base text-red-A700 w-auto"
                size="txtPoppinsRegular16RedA700"
              >
                {props?.categorytext}
              </Text>
            ) : null}
            {!!props?.vectoroneimage ? (
              <Img
                className="h-2 w-1"
                alt="vector_One"
                src={props?.vectoroneimage}
              />
            ) : null}
            {!!props?.vegetablestext ? (
              <Text
                className="text-base text-red-A700 w-auto"
                size="txtPoppinsRegular16RedA700"
              >
                {props?.vegetablestext}
              </Text>
            ) : null}
            {!!props?.vectortwoimage ? (
              <Img
                className="h-2 w-1"
                alt="vector_Two"
                src={props?.vectortwoimage}
              />
            ) : null}
            <Text
              className="text-base text-deep_orange-500 w-auto"
              size="txtPoppinsRegular16Deeporange500"
            >
              {props?.languagetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C07ShopOneOneBreadcrumbs.defaultProps = {
  homesiximage: "images/img_home_red_a700.svg",
  languagetext: "Chinese Cabbage",
};

export default C07ShopOneOneBreadcrumbs;
