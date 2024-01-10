import React from "react";

import { Img, Text } from "components";

const HotDealsProduct5n1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-gray-300 pb-[87px] w-full">
          <div className="flex flex-col items-start justify-start p-[5px] w-auto md:w-full">
            <Img
              className="h-[230px] md:h-auto object-cover w-[254px] sm:w-full"
              alt="image_One"
              src={props?.productimage}
            />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-3 w-auto md:w-full">
          <div className="md:h-11 h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtPoppinsRegular14Gray800"
              >
                {props?.productname}
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsMedium16Black900"
                >
                  {props?.productprice}
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-100 bottom-[0] flex flex-col h-10 items-center justify-end p-[9px] right-[2%] rounded-[50%] w-10">
              {!!props?.bagOne ? (
                <Img className="h-5 w-5" alt="bag_One" src={props?.bagOne} />
              ) : null}
            </div>
          </div>
          <Img className="h-3 w-[60px]" alt="close_One" src={props?.closeOne} />
        </div>
      </div>
    </>
  );
};

HotDealsProduct5n1.defaultProps = {
  productimage: "images/img_image_2.png",
  productname: "Big Potatoes",
  productprice: "$20.00",
  closeOne: "images/img_close.svg",
};

export default HotDealsProduct5n1;
