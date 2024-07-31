import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import HotDealsHeading from "components/HotDealsHeading";
import HotDealsProduct5n from "components/HotDealsProduct5n";
import HotDealsProduct5n1 from "components/HotDealsProduct5n1";
import HotDealsProduct5n2 from "components/HotDealsProduct5n2";

const HotDealsPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <HotDealsHeading className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 md:px-5 w-2/5 md:w-full"
              orientation="horizontal"
            >
              <Sidebar className="!sticky !w-[264px] bg-white-A700 flex h-screen md:hidden justify-start sm:ml-[0] outline outline-[0.5px] outline-gray-300 overflow-auto top-[0]">
                <HotDealsProduct5n
                  className="md:h-[317px] h-[327px] relative w-full"
                  bag="images/img_bag.svg"
                />
                <HotDealsProduct5n1
                  className="h-[327px] relative w-full"
                  bagOne="images/img_bag.svg"
                />
              </Sidebar>
              <div className="flex flex-col sm:ml-[0] relative w-full">
                <HotDealsProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_3.png"
                  productname="Fresh Indian Malta"
                />
                <HotDealsProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_4.png"
                  productname="Corn"
                />
              </div>
            </List>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:px-5 w-3/5 md:w-full"
              orientation="horizontal"
            >
              <div className="h-[654px] sm:ml-[0] relative w-full">
                <HotDealsProduct5n2 className="md:h-[317px] h-[327px] mb-[-0.5px] mx-auto w-full z-[1]" />
                <HotDealsProduct5n1
                  className="h-[327px] mt-auto mx-auto w-full"
                  productimage="images/img_image_5.png"
                  productname="Fresh Cauliflower"
                  productprice="$12.00"
                />
              </div>
              <div className="flex flex-col sm:ml-[0] relative w-full">
                <HotDealsProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_7.png"
                  productname="Green Lettuce"
                  productprice="$9.00"
                />
                <HotDealsProduct5n
                  className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  image="images/img_image_8.png"
                  greenapple="Green Capsicum"
                  price="$9.00"
                />
              </div>
              <div className="flex flex-col sm:ml-[0] relative w-full">
                <HotDealsProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_9.png"
                  productname="Eggplant"
                  productprice="$34.00"
                />
                <HotDealsProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_10.png"
                  productname="Green Chili"
                  productprice="$34.00"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDealsPage;
