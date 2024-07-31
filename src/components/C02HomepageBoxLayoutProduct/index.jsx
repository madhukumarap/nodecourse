import React from "react";

import { Img, Text } from "components";

const C02HomepageBoxLayoutProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto w-[312px]">
          <div className="flex flex-col items-start justify-start p-[5px] w-28">
            <Img
              className="h-[102px] md:h-auto object-cover w-[102px]"
              alt="image"
              src={props?.image}
            />
          </div>
        </div>
        <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtPoppinsRegular14Gray800"
            >
              {props?.text}
            </Text>
            <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsMedium16Black900"
              >
                {props?.price}
              </Text>
              {!!props?.priceOne ? (
                <Text
                  className="text-base text-red-A700 w-auto"
                  size="txtPoppinsRegular16RedA700"
                >
                  {props?.priceOne}
                </Text>
              ) : null}
            </div>
          </div>
          <Img
            className="h-4 w-20"
            src="images/img_close_blue_gray_100.svg"
            alt="close"
          />
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutProduct.defaultProps = {
  image: "images/img_image_102x102.png",
  text: "Red Capsicum",
  price: "$14.99",
};

export default C02HomepageBoxLayoutProduct;
