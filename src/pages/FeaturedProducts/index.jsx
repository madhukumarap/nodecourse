import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import HotDealsHeading from "components/HotDealsHeading";
import HotDealsProduct5n1 from "components/HotDealsProduct5n1";
import HotDealsProduct5n2 from "components/HotDealsProduct5n2";

const FeaturedProductsPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-7 items-center justify-start w-full">
          <HotDealsHeading
            className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
            text="Featured Products"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[264px] bg-white-A700 flex h-screen md:hidden justify-start outline outline-[0.5px] outline-gray-300 overflow-auto md:px-5 top-[0]">
              <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[0.5px] outline-gray-300 pb-[87px] w-full">
                <div className="h-60 md:h-[230px] p-[5px] relative w-[264px]">
                  <Img
                    className="h-[230px] m-auto object-cover w-[254px] sm:w-full"
                    src="images/img_image_230x254.png"
                    alt="image"
                  />
                  <div className="absolute bg-deep_orange-500 flex flex-row gap-1 items-center justify-center left-[6%] px-2 py-[3px] rounded top-[7%] w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Sale
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      50%
                    </Text>
                  </div>
                </div>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    flexDirection: "column",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                  },
                }}
                className="flex flex-col items-center justify-start w-full"
              >
                <MenuItem>
                  <div className="flex items-start justify-start">
                    <Text className="text-gray-800 text-sm w-auto">
                      Green Apple
                    </Text>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex items-start justify-start">
                    <Text className="font-medium text-base text-black-900 w-auto">
                      $14.99
                    </Text>
                  </div>
                </MenuItem>
              </Menu>
              <div className="bg-gray-100 flex flex-col h-10 items-center justify-start ml-52 mr-4 p-2.5 rounded-[50%] w-10">
                <Img className="h-5 w-5" src="images/img_bag.svg" alt="bag" />
              </div>
              <Img
                className="h-3 mb-3 ml-3 mr-48 w-[60px]"
                src="images/img_close_blue_gray_100.svg"
                alt="close"
              />
            </Sidebar>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:px-5 w-4/5 md:w-full"
              orientation="horizontal"
            >
              <HotDealsProduct5n1
                className="h-[327px] sm:ml-[0] relative w-full"
                productimage="images/img_image_3.png"
                productname="Fresh Indian Malta"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <HotDealsProduct5n2
                className="md:h-[317px] h-[327px] sm:ml-[0] relative w-full"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <HotDealsProduct5n1
                className="h-[327px] sm:ml-[0] relative w-full"
                productimage="images/img_image_7.png"
                productname="Green Lettuce"
                productprice="$9.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <HotDealsProduct5n1
                className="h-[327px] sm:ml-[0] relative w-full"
                productimage="images/img_image_9.png"
                productname="Eggplant"
                productprice="$34.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductsPage;
