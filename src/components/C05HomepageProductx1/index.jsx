import React from "react";

import { Button, Img, Text } from "components";

const C05HomepageProductx1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg w-full">
          <div className="flex flex-col items-start justify-start p-[5px] w-[312px]">
            <Img
              className="h-[302px] md:h-auto object-cover w-[302px]"
              alt="image"
              src={props?.image}
            />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto md:w-full">
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
            <Button
              className="absolute bottom-[0] flex h-10 items-center justify-center right-[1%] rounded-[50%] w-10"
              shape="circle"
              color="gray_100"
              size="md"
              variant="fill"
            >
              <Img className="h-5" src="images/img_bag.svg" alt="bag" />
            </Button>
          </div>
          <Img
            className="h-3 w-[60px]"
            src="images/img_close_blue_gray_100.svg"
            alt="close"
          />
        </div>
      </div>
    </>
  );
};

C05HomepageProductx1.defaultProps = {
  image: "images/img_image_6.png",
  productname: "Chanise Cabbage",
  productprice: "$14.99",
};

export default C05HomepageProductx1;
