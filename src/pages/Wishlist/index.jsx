import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const WishlistPage = () => {
  const table4Data = React.useRef([
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
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-5 items-center justify-start p-2.5">
            <Img
              className="h-[100px] md:h-auto ml-[13px] object-cover w-[100px]"
              src="images/img_image_8.png"
              alt="image_One"
            />
            <Text
              className="text-base text-gray-300"
              size="txtPoppinsRegular16Gray300"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[559px] pb-[13px] sm:pl-5 pl-6 text-gray-300 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray300"
          >
            Product
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("priceOne", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center md:pr-10 pr-12 sm:pr-5 py-12">
            <Text
              className="text-base text-gray-300"
              size="txtPoppinsMedium16Gray300"
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
            className="min-w-[336px] pb-[13px] text-center text-gray-300 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray300"
          >
            price
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("stockstatus", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between sm:pr-5 pr-6 py-6">
            <Button
              className="cursor-pointer min-w-[71px] my-[22px] rounded text-center text-sm"
              color="gray_300"
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
            className="min-w-[425px] pb-[13px] text-gray-300 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray300"
          >
            Stock Status
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-start p-[47px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homesiximage="images/img_home.svg"
          vectortwoimage="images/img_vector_gray_600.svg"
          languagetext="Wishlist"
        />
        <div className="h-[619px] max-w-[1404px] mt-[37px] mx-auto md:px-5 relative w-full">
          <Text
            className="mb-[-13.65px] mx-auto md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center z-[1]"
            size="txtPoppinsSemiBold32Black900"
          >
            My Wishlist
          </Text>
          <div className="bg-blue_gray-900_02 flex flex-col items-center justify-start mt-auto mx-auto p-[38px] sm:px-5 rounded-[49px] w-full">
            <div className="border border-gray-300 border-solid flex flex-col items-center justify-start mb-[3px] py-3 rounded-lg w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table4Columns}
                  data={table4Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-gray-300 h-px w-[97%]" />
              <Line className="bg-gray-300 h-px mt-[123px] w-[97%]" />
              <Line className="bg-gray-300 h-px mt-[123px] w-full" />
              <div className="flex flex-row gap-2.5 items-center justify-start my-[11px] pt-3 w-auto">
                <Text
                  className="text-gray-300 text-sm w-auto"
                  size="txtPoppinsRegular14Gray300"
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
                      src="images/img_svgexport66.svg"
                      alt="twitterOne"
                    />
                  </Button>
                  <Img
                    className="h-10 rounded-[50%] w-10"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Img
                    className="h-10 rounded-[50%] w-10"
                    src="images/img_info_white_a700.svg"
                    alt="info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[39px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default WishlistPage;
