import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutProductsx1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[246px] h-[248px] relative w-[248px]">
          <Img
            className="h-[246px] m-auto object-cover w-[246px]"
            alt="image"
            src={props?.image}
          />
          <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[6%] top-[6%] w-[17%]">
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
        <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px] md:w-full">
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[12%] w-auto">
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtPoppinsRegular14Gray800"
            >
              {props?.greenappletextprops}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtPoppinsMedium16Black900"
              >
                {props?.pricetextprops}
              </Text>
            </div>
          </div>
          <Img
            className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
            src="images/img_close_blue_gray_100.svg"
            alt="close"
          />
          <Button
            className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] rounded-[50%] w-10"
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
      </div>
    </>
  );
};

C02HomepageBoxLayoutProductsx1.defaultProps = {
  image: "images/img_image_27.png",
  greenappletextprops: "Green Chili",
  pricetextprops: "$14.99",
};

export default C02HomepageBoxLayoutProductsx1;
