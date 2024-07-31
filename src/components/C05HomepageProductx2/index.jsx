import React from "react";

import { Button, Img, Text } from "components";

const C05HomepageProductx2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-deep_orange-500 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg shadow-bs3 w-full">
          <div className="md:h-[302px] h-[312px] p-[5px] relative w-[312px]">
            <Img
              className="absolute h-[302px] inset-[0] justify-center m-auto object-cover w-[302px]"
              alt="image"
              src={props?.image}
            />
            <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[2%] top-[2%] w-[13%] md:w-full">
              <Button
                className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
              </Button>
              <Button
                className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto md:w-full">
          <div className="md:h-11 h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-deep_orange-500 text-sm w-auto"
                size="txtPoppinsRegular14Deeporange500"
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
              shape="round"
              color="deep_orange_500"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_bag_white_a700.svg"
                alt="bag"
              />
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

C05HomepageProductx2.defaultProps = {
  image: "images/img_image_8.png",
  productname: "Green Capsicum",
  productprice: "$14.99",
};

export default C05HomepageProductx2;
