import React from "react";

import { Button, Img, List, Text } from "components";
import HotDealsHeading from "components/HotDealsHeading";
import HotDealsProduct5n from "components/HotDealsProduct5n";
import HotDealsProduct5n1 from "components/HotDealsProduct5n1";
import PopularProductsBigproducts from "components/PopularProductsBigproducts";

const PopularProductsPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start p-[54px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1320px] mb-[5px] mx-auto w-full">
            <HotDealsHeading
              className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Hot Deals"
            />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-2/5 md:w-full">
                <div className="flex h-[654px] md:h-[655px] justify-end relative w-full">
                  <Text
                    className="ml-[194px] mt-auto text-base text-center text-gray-600"
                    size="txtPoppinsRegular16"
                  >
                    :
                  </Text>
                  <PopularProductsBigproducts className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-start m-auto outline outline-[0.5px] outline-deep_orange-500 shadow-bs3 w-auto" />
                </div>
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <HotDealsProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_20.png"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <HotDealsProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_21.png"
                    productname="Corn"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </List>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <HotDealsProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_5.png"
                    productname="Fresh Cauliflower"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <HotDealsProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_22.png"
                    productname="Red Chili"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <HotDealsProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_6.png"
                    productname="Chinese cabbage"
                    productprice="$12.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </div>
                <div className="flex flex-col sm:ml-[0] relative w-full">
                  <div className="flex flex-col mx-auto w-full">
                    <HotDealsProduct5n1
                      className="h-[327px] mx-auto w-full"
                      productimage="images/img_image_7.png"
                      productname="Green Lettuce"
                      productprice="$9.00"
                      closeOne="images/img_close_blue_gray_100.svg"
                    />
                    <HotDealsProduct5n
                      className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                      image="images/img_image_8.png"
                      greenapple="Green Capsicum"
                      price="$9.00"
                      close="images/img_close_blue_gray_100.svg"
                    />
                  </div>
                  <HotDealsProduct5n
                    className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                    image="images/img_image_23.png"
                    greenapple="Red Tomatos"
                    price="$9.00"
                    close="images/img_close_blue_gray_100.svg"
                  />
                </div>
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <HotDealsProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_10.png"
                    productname="Green Chili"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <HotDealsProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_24.png"
                    productname="Surjapur Mango"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                  <HotDealsProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_9.png"
                    productname="Eggplant"
                    productprice="$34.00"
                    closeOne="images/img_close_blue_gray_100.svg"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProductsPage;
