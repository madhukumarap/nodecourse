import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const WishlistOnePage = () => {
  const tableData = React.useRef([
    {
      product: "Green Capsicum",
      priceOne: "$20.99",
      stockstatus: "images/img_close_blue_gray_100_24x24.svg",
    },
    {
      product: "Chinese Cabbage",
      priceOne: "$45.00",
      stockstatus: "images/img_close_blue_gray_100_24x24.svg",
    },
    {
      product: "Fresh Sujapuri Mango",
      priceOne: "$09.00",
      stockstatus: "images/img_close_blue_gray_100_24x24.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-5 items-center justify-start p-2.5">
            <Img
              className="h-[100px] md:h-auto ml-[13px] object-cover w-[100px]"
              src="images/img_image_8.png"
              alt="image_One"
            />
            <Text
              className="text-base text-black-900"
              size="txtPoppinsRegular16Black900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[559px] pb-[13px] sm:pl-5 pl-6 text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("priceOne", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 pr-12 sm:pr-5 py-12">
            <Text
              className="text-base text-black-900"
              size="txtPoppinsMedium16Black900"
            >
              $14.99
            </Text>
            <Text
              className="line-through ml-0.5 mr-[181px] text-base text-red-A700"
              size="txtPoppinsRegular16RedA700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[336px] pb-[13px] text-center text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("stockstatus", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between sm:pr-5 pr-6 py-6">
            <Button
              className="cursor-pointer min-w-[71px] my-[22px] rounded text-center text-sm"
              color="green_700_33"
              size="xs"
              variant="fill"
            >
              In Stock
            </Button>
            <div className="flex flex-row gap-6 items-center justify-between my-3.5 w-[49%]">
              <Button
                className="cursor-pointer font-semibold min-w-[146px] text-center text-sm"
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                Add to Cart
              </Button>
              <Img className="h-6 w-6" alt="close" src={info?.getValue()} />
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[425px] pb-[13px] text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Stock Status
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-start p-[47px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homesiximage="images/img_home.svg"
          vectortwoimage="images/img_vector_gray_600.svg"
          languagetext="Wishlist"
        />
        <Text
          className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
          size="txtPoppinsSemiBold32Black900"
        >
          My Wishlist
        </Text>
        <div className="border border-gray-300 border-solid flex flex-col items-center justify-start max-w-[1320px] mt-6 mx-auto md:px-5 py-3 rounded-lg w-full">
          <div className="overflow-auto w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
          <Line className="bg-gray-300 h-px w-[97%]" />
          <Line className="bg-gray-300 h-px mt-[123px] w-[97%]" />
          <Line className="bg-gray-300 h-px mt-[123px] w-full" />
          <div className="flex flex-row gap-2.5 items-center justify-start my-[11px] pt-3 w-auto">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              Share:
            </Text>
            <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="round"
                color="deep_orange_500"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_facebook1.svg"
                  alt="facebookOne"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_twitter1.svg"
                  alt="twitterOne"
                />
              </Button>
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_user_gray_800.svg"
                alt="user"
              />
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_info.svg"
                alt="info"
              />
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default WishlistOnePage;
