import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";

const OrderDetailsPage = () => {
  const table3Data = React.useRef([
    {
      product: "Red Capsicum",
      priceThree: "$14.00",
      quantity: "x5",
      subtotalOne: "$70.00",
    },
    {
      product: "Green Capsicum",
      priceThree: "$14.00",
      quantity: "x2",
      subtotalOne: "$28.00",
    },
    {
      product: "Green Chili",
      priceThree: "$26.70",
      quantity: "x10",
      subtotalOne: "$267.00",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2">
            <Img
              className="h-[70px] md:h-auto ml-3 mt-1 object-cover w-[70px]"
              src="images/img_image_41.png"
              alt="image_One"
            />
            <Text className="text-black-900 text-sm" size="txtPoppinsRegular14">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[424px] pl-5 py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Product
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("priceThree", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-black-900 text-sm"
            size="txtPoppinsRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[169px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Price
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-black-900 text-sm"
            size="txtPoppinsRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[191px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Quantity
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("subtotalOne", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-black-900 text-sm"
            size="txtPoppinsMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-8 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1916px] mx-auto md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[18px] w-[15px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-center text-gray-700 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Eng
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_arrowdown_gray_700.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-center text-gray-700 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            USD
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_arrowdown_gray_700.svg"
                            alt="arrowdown_One"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Line className="bg-gray-300 h-[15px] w-px" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <ul className="flex flex-row gap-1 items-start justify-start">
                          <li>
                            <a
                              href="javascript:"
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">Sign In</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">/</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">Sign Up</Text>
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-6px] mx-auto pb-2 px-2 w-full z-[1]">
                <Img
                  className="md:flex-1 h-[85px] sm:h-auto md:ml-[0] ml-[78px] object-cover w-[24%] md:w-full"
                  src="images/img_traceworkstrademarked_97x454.png"
                  alt="traceworkstrade"
                />
                <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[185px] md:mt-0 mt-[30px] rounded-md w-auto sm:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start px-[17px] py-3 w-[400px] sm:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <Text
                      className="text-[15px] text-gray-600 w-auto"
                      size="txtPoppinsRegular15"
                    >
                      Search
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
                    color="deep_orange_500"
                    size="lg"
                    variant="fill"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] md:mt-0 mt-[33px] w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_favorite.svg"
                    alt="favorite"
                  />
                  <Line className="bg-blue_gray-100 h-6 w-px" />
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <div className="h-9 md:h-[34px] relative w-9">
                      <Img
                        className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="absolute bg-deep_orange-500 flex h-[18px] items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                        size="txtPoppinsMedium10"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="text-[11px] text-gray-800 w-auto"
                        size="txtPoppinsRegular11"
                      >
                        Shopping cart:
                      </Text>
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        $57.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-deep_orange-500 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1916px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
              <ul className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsMedium14WhiteA700"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_Two"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsMedium14WhiteA700"
                      >
                        Shop
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_Three"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsMedium14WhiteA700"
                      >
                        Pages
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_Four"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsMedium14WhiteA700"
                      >
                        Blog
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_Five"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsMedium14WhiteA700"
                      >
                        About Us
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-col items-center justify-start">
                      <a
                        href="javascript:"
                        className="text-sm text-white-A700 w-auto"
                      >
                        <Text size="txtPoppinsMedium14WhiteA700">
                          Contact Us
                        </Text>
                      </a>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img className="h-7 w-7" src="images/img_call.svg" alt="call" />
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  (219) 555-0114
                </Text>
              </div>
            </div>
          </header>
          <C07ShopOneOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[46px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            categorytext="Account"
            vectoroneimage="images/img_vector_red_a700.svg"
            vegetablestext="Order  History"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Order Detail"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardOneColumnnavigation
              className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mb-[407px] pb-3 rounded-lg w-auto"
              dashboardtwooneimage="images/img_dashboard2_blue_gray_100_24x24.svg"
              settingstext="Settings"
            />
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-300 pb-5 rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 gap-[509px] items-center justify-start sm:px-5 px-6 py-4 rounded-tl-lg rounded-tr-lg shadow-bs7 w-auto md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Order Details
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      April 24, 2021
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      3 Products
                    </Text>
                  </div>
                  <Text
                    className="text-base text-deep_orange-500 w-auto"
                    size="txtPoppinsMedium16Deeporange500"
                  >
                    Back to List
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-[96%] md:w-full">
                  <List
                    className="bg-white-A700 border border-gray-300 border-solid sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 rounded-md w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-3.5 items-start justify-start mb-5 sm:ml-[0] sm:mt-0 mt-3.5 w-full">
                      <Text
                        className="ml-5 md:ml-[0] text-red-A700 text-sm tracking-[0.42px] uppercase"
                        size="txtPoppinsMedium14RedA700"
                      >
                        Billing Address
                      </Text>
                      <Line className="bg-gray-300 h-px w-full" />
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Dainne Russell
                        </Text>
                        <Text
                          className="leading-[150.00%] mt-2 text-gray-700 text-sm w-full"
                          size="txtPoppinsRegular14Gray700"
                        >
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </Text>
                        <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                          <Text
                            className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12RedA700"
                          >
                            Email
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtPoppinsRegular14"
                          >
                            dainne.ressell@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                          <Text
                            className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12RedA700"
                          >
                            Phone
                          </Text>
                          <Text
                            className="text-black-900 text-sm w-auto"
                            size="txtPoppinsRegular14"
                          >
                            (671) 555-0110
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[280px] sm:ml-[0] relative w-full">
                      <div className="absolute flex flex-col gap-3.5 h-max inset-[0] items-start justify-center m-auto w-full">
                        <Text
                          className="ml-5 md:ml-[0] text-red-A700 text-sm tracking-[0.42px] uppercase"
                          size="txtPoppinsMedium14RedA700"
                        >
                          Shipping Address
                        </Text>
                        <Line className="bg-gray-300 h-px w-full" />
                        <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtPoppinsRegular16Black900"
                          >
                            Dainne Russell
                          </Text>
                          <Text
                            className="leading-[150.00%] mt-2 text-gray-700 text-sm w-full"
                            size="txtPoppinsRegular14Gray700"
                          >
                            4140 Parker Rd. Allentown, New Mexico 31134
                          </Text>
                          <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                            <Text
                              className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12RedA700"
                            >
                              Email
                            </Text>
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              dainne.ressell@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                            <Text
                              className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12RedA700"
                            >
                              Phone
                            </Text>
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              (671) 555-0110
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="absolute bg-gray-300 h-[280px] inset-y-[0] left-[0] my-auto w-px" />
                    </div>
                  </List>
                  <div className="border border-gray-300 border-solid flex flex-col items-start justify-start rounded-md w-auto">
                    <div className="flex flex-row gap-5 items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12RedA700"
                        >
                          Order ID:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          #4152
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-10 w-px" />
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-red-A700 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12RedA700"
                        >
                          Payment Method:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          Paypal
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-300 h-px w-full" />
                    <div className="flex flex-col gap-px items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-row items-center justify-between pb-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          $365.00
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Discount
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          20%
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Shipping
                        </Text>
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          Free
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-px w-full" />
                      <div className="flex flex-row items-center justify-between pt-3 w-[248px]">
                        <Text
                          className="text-black-900 text-lg w-auto"
                          size="txtPoppinsRegular18Black900"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-deep_orange-500 text-lg w-auto"
                          size="txtPoppinsSemiBold18Deeporange500"
                        >
                          $84.00
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-10 w-[86%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="h-10 md:h-[120px] sm:h-[397px] relative w-[95%] md:w-full">
                      <Img
                        className="h-px m-auto"
                        src="images/img_line.svg"
                        alt="line"
                      />
                      <div className="absolute md:gap-10 gap-[79px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full inset-[0] items-center justify-between m-auto max-w-[800px] w-full">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="round"
                          color="deep_orange_500"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_check.svg"
                            alt="check"
                          />
                        </Button>
                        <Text
                          className="bg-deep_orange-500 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
                          size="txtPoppinsMedium14WhiteA700"
                        >
                          02
                        </Text>
                        <div className="bg-white-A700 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-deep_orange-500 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-deep_orange-500 text-sm"
                            size="txtPoppinsRegular14Deeporange500"
                          >
                            03
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-deep_orange-500 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-deep_orange-500 text-sm"
                            size="txtPoppinsRegular14Deeporange500"
                          >
                            04
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-center text-deep_orange-500 text-sm"
                        size="txtPoppinsRegular14Deeporange500"
                      >
                        Order received
                      </Text>
                      <Text
                        className="text-center text-deep_orange-500 text-sm"
                        size="txtPoppinsMedium14Deeporange500"
                      >
                        Processing
                      </Text>
                      <Text
                        className="text-blue_gray-900_01 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray90001"
                      >
                        On the way
                      </Text>
                      <Text
                        className="text-blue_gray-900_01 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray90001"
                      >
                        Delivered
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto mt-[38px] w-full">
                  <ReactTable
                    columns={table3Columns}
                    data={table3Data.current}
                    rowClass={"border-b border-gray-300"}
                    headerClass="bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[55px] md:px-5 w-full">
            <div className="flex flex-col gap-9 items-center justify-center w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[38px] sm:px-5 w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Subcribe our Newsletter
                    </Text>
                    <Text
                      className="leading-[150.00%] md:max-w-full max-w-md text-red-A700 text-sm"
                      size="txtPoppinsRegular14RedA700"
                    >
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna.
                    </Text>
                  </div>
                  <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                    <Input
                      name="inputfield"
                      placeholder="Your email address"
                      className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left w-full"
                      wrapClassName="absolute border border-gray-300 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                      type="email"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Button
                      className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                      color="deep_orange_500"
                      size="lg"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start ml-10 md:ml-[0] mr-[257px] w-auto">
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
              <div className="flex flex-col font-quicksand gap-[35px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1910px] w-full">
                  <Img
                    className="md:flex-1 h-[97px] sm:h-auto object-cover w-[454px] md:w-full"
                    src="images/img_traceworkstrademarked_97x454.png"
                    alt="traceworkstrade_One"
                  />
                  <div className="flex flex-col gap-9 h-[191px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtQuicksandSemiBold24"
                    >
                      Other apps
                    </Text>
                    <ul className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Food Delivery</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Meat Delivery</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Track Order</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">
                            Shipping Details
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtQuicksandSemiBold24"
                    >
                      Useful links
                    </Text>
                    <ul className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">About Us</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Conact</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Hot deals</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Promotions</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">New products</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[62px] sm:h-[76px] relative w-full">
                  <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1916px] w-full">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtQuicksandMedium16"
                    >
                      © 2022, All rights reserved
                    </Text>
                    <div className="flex flex-row gap-7 items-start justify-between p-1.5 w-[237px]">
                      <Button
                        className="flex h-11 items-center justify-center w-11"
                        shape="round"
                        color="deep_orange_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_svgexport64.svg"
                          alt="svgexportSixtyFour"
                        />
                      </Button>
                      <div className="bg-deep_orange-500 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-11">
                        <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                          <div className="flex flex-col h-[19px] items-center justify-start w-[19px]">
                            <Img
                              className="h-[19px] w-[19px]"
                              src="images/img_link.svg"
                              alt="link"
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex h-11 items-center justify-center w-11"
                        shape="round"
                        color="deep_orange_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_svgexport65.svg"
                          alt="svgexportSixtyFive"
                        />
                      </Button>
                      <Button
                        className="flex h-11 items-center justify-center w-11"
                        shape="round"
                        color="deep_orange_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_svgexport66.svg"
                          alt="svgexportSixtySix"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPage;
