import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutProduct1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-deep_orange-500 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto shadow-bs3 w-[312px]">
          <div className="flex flex-col items-start justify-start p-[5px] w-28">
            <Img
              className="h-[102px] md:h-auto object-cover w-[102px]"
              src="images/img_image_3.png"
              alt="image_Four"
            />
          </div>
        </div>
        <div className="absolute flex flex-col gap-[7px] h-full inset-y-[0] items-start justify-center my-auto p-3 right-[0] w-[74%]">
          <Text
            className="mt-[11px] text-deep_orange-500 text-sm"
            size="txtPoppinsRegular14Deeporange500"
          >
            {props?.country}
          </Text>
          <div className="h-[41px] md:h-[51px] mb-[11px] relative w-1/2">
            <div className="absolute flex flex-row gap-3 h-max inset-[0] items-center justify-between m-auto w-auto">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
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
              <Button
                className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
              </Button>
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
            </div>
            <div className="absolute flex flex-row gap-3 h-max inset-[0] items-center justify-between m-auto w-auto">
              {!!props?.bagone ? (
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="round"
                  color="deep_orange_500"
                  size="md"
                  variant="fill"
                >
                  <Img className="h-5" alt="bag_One" src={props?.bagone} />
                </Button>
              ) : null}
              {!!props?.eyeoneone ? (
                <Button
                  className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    alt="eyeOne_One"
                    src={props?.eyeoneone}
                  />
                </Button>
              ) : null}
              {!!props?.favoriteone ? (
                <Button
                  className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    alt="favorite_One"
                    src={props?.favoriteone}
                  />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutProduct1.defaultProps = { country: "Indian Malta" };

export default C02HomepageBoxLayoutProduct1;
