import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const ShoppingCartOnePage = () => {
  const table1Data = React.useRef([
    {
      product: "Green Capsicum",
      priceOne: "$14.00",
      quantity: "images/img_plus1.svg",
      subtotal: "images/img_close_blue_gray_100_24x24.svg",
    },
    {
      product: "Red Capsicum",
      priceOne: "$14.00",
      quantity: "images/img_plus1.svg",
      subtotal: "images/img_close_blue_gray_100_24x24.svg",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2.5">
            <Img
              className="h-[100px] md:h-auto ml-[9px] object-cover w-[100px]"
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
            className="min-w-[403px] pb-[13px] pl-5 text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Product
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("priceOne", {
        cell: (info) => (
          <Text
            className="py-[35px] text-base text-black-900"
            size="txtPoppinsRegular16Black900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[114px] pb-[13px] text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            price
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-[35px] py-[35px]">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between mr-[26px] p-2 rounded-[25px] w-[83%]">
              <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_minus.svg"
                  alt="minus"
                />
              </div>
              <Text
                className="text-base text-black-900 text-center"
                size="txtPoppinsRegular16Black900"
              >
                5
              </Text>
              <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                <Img
                  className="h-3.5 w-3.5"
                  alt="plusOne"
                  src={info?.getValue()}
                />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[186px] pb-3 text-center text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Quantity
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-5 py-5">
            <Text
              className="text-base text-black-900"
              size="txtPoppinsMedium16Black900"
            >
              $70.00
            </Text>
            <Img
              className="h-6 my-[29px] w-6"
              alt="close"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[169px] pb-[13px] text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Shopping cart"
          />
          <Text
            className="md:ml-[0] ml-[814px] mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtPoppinsSemiBold32Black900"
          >
            My Shopping Cart
          </Text>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-6 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-start py-3 rounded-lg w-[67%] md:w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-gray-300 h-px w-[96%]" />
              <Line className="bg-gray-300 h-px mt-[123px] w-full" />
              <div className="flex flex-row flex-wrap sm:gap-10 items-center justify-between max-w-[832px] mb-[3px] mt-[15px] w-full">
                <Button
                  className="!text-gray-800 cursor-pointer font-semibold min-w-[168px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="fill"
                >
                  Return to shop
                </Button>
                <Button
                  className="!text-gray-800 cursor-pointer font-semibold min-w-[151px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="fill"
                >
                  Update Cart
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start mb-[75px] p-[23px] sm:px-5 rounded-lg w-[33%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtPoppinsMedium20"
              >
                Cart Total
              </Text>
              <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 shadow-bs7 w-[376px] sm:w-full">
                  <Text
                    className="text-gray-800 text-sm w-auto"
                    size="txtPoppinsRegular14Gray800"
                  >
                    Subtotal:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    $84.00
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 shadow-bs7 w-[376px] sm:w-full">
                  <Text
                    className="text-gray-800 text-sm w-auto"
                    size="txtPoppinsRegular14Gray800"
                  >
                    Shipping:
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Free
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Total:
                  </Text>
                  <Text
                    className="text-base text-black-900 w-auto"
                    size="txtPoppinsSemiBold16"
                  >
                    $84.00
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold mt-5 rounded-[25px] text-base text-center w-[376px]"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <>Proceed to checkout</>
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-6 items-center justify-start md:ml-[0] ml-[300px] mt-6 p-5 md:px-5 rounded-lg w-auto md:w-full">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              Coupon Code
            </Text>
            <div className="flex relative w-[81%] md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end my-auto sm:px-5 px-6 py-3.5 rounded-[26px] w-auto">
                <Text
                  className="text-base text-red-A700 w-auto"
                  size="txtPoppinsRegular16RedA700"
                >
                  Enter code
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[196px] ml-[-59px] my-auto rounded-[26px] text-base text-center z-[1]"
                color="blue_gray_900_01"
                size="lg"
                variant="fill"
              >
                Apply Coupon
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ShoppingCartOnePage;
