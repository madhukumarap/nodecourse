import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";

const UserDashboardPage = () => {
  const table6Data = React.useRef([
    {
      orderid: "738",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "View Details",
    },
    {
      orderid: "703",
      date: "24 May, 2020",
      total: "$25.00 (1 Product)",
      status: "View Details",
    },
    {
      orderid: "130",
      date: "22 Oct, 2020",
      total: "$250.00 (4 Products)",
      status: "View Details",
    },
    {
      orderid: "561",
      date: "1 Feb, 2020",
      total: "$35.00 (1 Products)",
      status: "View Details",
    },
    {
      orderid: "536",
      date: "21 Sep, 2020",
      total: "$578.00 (13 Products)",
      status: "View Details",
    },
    {
      orderid: "492",
      date: "22 Oct, 2020",
      total: "$345.00 (7 Products)",
      status: "View Details",
    },
  ]);
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [
      table6ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <div className="flex flex-col justify-start p-[11px]">
            <Text
              className="ml-3 md:ml-[0] text-blue_gray-100 text-sm"
              size="txtPoppinsRegular14Bluegray100"
            >
              #
            </Text>
            <Text
              className="ml-6 md:ml-[0] mr-[127px] text-blue_gray-100 text-sm"
              size="txtPoppinsRegular14Bluegray100"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] sm:pl-5 pl-6 py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Order ID
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[13px] text-blue_gray-100 text-sm"
            size="txtPoppinsRegular14Bluegray100"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Date
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="py-[11px] text-blue_gray-100 text-sm"
            size="txtPoppinsRegular14Bluegray100"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[268px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Total
          </Text>
        ),
      }),
      table6ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-2.5 py-2.5">
            <Text
              className="mt-0.5 text-blue_gray-100 text-sm"
              size="txtPoppinsRegular14Bluegray100"
            >
              Processing
            </Text>
            <Text
              className="mr-[13px] text-deep_orange-A400 text-sm"
              size="txtPoppinsMedium14DeeporangeA400"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[292px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Status
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[37px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="bg-black-900 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1916px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
              <Img
                className="h-[18px] w-[15px]"
                src="images/img_linkedin_white_a700.svg"
                alt="linkedin"
              />
              <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1.5 items-center justify-start">
                      <Text
                        className="text-center text-white-A700 text-xs w-auto"
                        size="txtPoppinsRegular12WhiteA700"
                      >
                        Eng
                      </Text>
                      <Img
                        className="h-[3px]"
                        src="images/img_arrowdown_white_a700_3x7.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-1.5 items-center justify-start">
                      <Text
                        className="text-center text-white-A700 text-xs w-auto"
                        size="txtPoppinsRegular12WhiteA700"
                      >
                        USD
                      </Text>
                      <Img
                        className="h-[3px]"
                        src="images/img_arrowdown_white_a700_3x7.svg"
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
                          className="text-white-A700 text-xs"
                        >
                          <Text size="txtPoppinsRegular12WhiteA700">
                            Sign In
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-white-A700 text-xs"
                        >
                          <Text size="txtPoppinsRegular12WhiteA700">/</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-white-A700 text-xs"
                        >
                          <Text size="txtPoppinsRegular12WhiteA700">
                            Sign Up
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 w-full">
              <Img
                className="md:flex-1 h-[73px] sm:h-auto mb-2 md:ml-[0] ml-[111px] object-cover w-1/5 md:w-full"
                src="images/img_traceworkstrademarked_73x378.png"
                alt="traceworkstrade"
              />
              <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[216px] rounded-md w-auto sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start px-[17px] py-3 w-[400px] sm:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_search_white_a700.svg"
                    alt="search"
                  />
                  <Text
                    className="text-[15px] text-white-A700 w-auto"
                    size="txtPoppinsRegular15WhiteA700"
                  >
                    Search
                  </Text>
                </div>
                <Button
                  className="!text-black-900 cursor-pointer font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
                  color="deep_orange_500"
                  size="lg"
                  variant="fill"
                >
                  Search
                </Button>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] w-auto">
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
                      src="images/img_bag_white_a700.svg"
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
                      className="text-[11px] text-gray-400_01 w-auto"
                      size="txtPoppinsRegular11Gray40001"
                    >
                      Shopping cart:
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      $57.00
                    </Text>
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
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            vegetablestext="Account"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Dashboard"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardOneColumnnavigation
              className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex flex-col items-start justify-start mb-72 pb-3 rounded-lg w-auto"
              dashboardtwoimage="images/img_dashboard2_gray_700_01.svg"
              orderhistorytext="Order History"
              favoriteoneimage="images/img_favorite_gray_700_01.svg"
              bagoneimage="images/img_bag_gray_700_01.svg"
              dashboardtwooneimage="images/img_dashboard2_gray_700_01_24x24.svg"
              settingstext="Settings"
              dashboardtwotwoimage="images/img_dashboard2_2.svg"
            />
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-3/4 md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-lg w-[55%] md:w-full">
                  <Img
                    className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                    src="images/img_ellipse5_120x120.png"
                    alt="ellipseFive"
                  />
                  <div className="flex flex-col gap-0.5 items-center justify-start mt-[7px] w-auto">
                    <Text
                      className="text-center text-white-A700 text-xl w-auto"
                      size="txtPoppinsMedium20WhiteA700"
                    >
                      Dianne Russell
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Customer
                    </Text>
                  </div>
                  <Text
                    className="mt-[9px] text-base text-center text-deep_orange-A400"
                    size="txtPoppinsMedium16DeeporangeA400"
                  >
                    Edit Profile
                  </Text>
                </div>
                <div className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex md:flex-1 flex-col items-start justify-start p-7 sm:px-5 rounded-lg w-[44%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-deep_orange-A400 text-sm tracking-[0.42px] uppercase"
                    size="txtPoppinsMedium14DeeporangeA400"
                  >
                    Billing Address
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-3.5">
                    <Text
                      className="text-lg text-white-A700"
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      Dainne Russell
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-2 text-gray-500 text-sm w-full"
                      size="txtPoppinsRegular14Gray500"
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </Text>
                    <Text
                      className="mt-2.5 text-base text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      dainne.ressell@gmail.com
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-white-A700"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      (671) 555-0110
                    </Text>
                  </div>
                  <Text
                    className="mb-[3px] md:ml-[0] ml-[3px] mt-[18px] text-base text-deep_orange-A400"
                    size="txtPoppinsMedium16DeeporangeA400"
                  >
                    Edit Address
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex flex-col items-center justify-start py-[17px] rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                  <div className="flex flex-col items-center justify-start pb-6 sm:px-5 px-6 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between mb-[26px] w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsMedium20WhiteA700"
                      >
                        Recet Order History
                      </Text>
                      <a
                        href="javascript:"
                        className="text-base text-deep_orange-A400"
                      >
                        <Text size="txtPoppinsMedium16DeeporangeA400">
                          View All
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={table6Columns}
                      data={table6Data.current}
                      rowClass={""}
                      headerClass="bg-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[53px] md:px-5 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-center w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[38px] sm:px-5 w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtPoppinsSemiBold24"
                    >
                      Subcribe our Newsletter
                    </Text>
                    <Text
                      className="leading-[150.00%] md:max-w-full max-w-md text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna.
                    </Text>
                  </div>
                  <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                    <Input
                      name="inputfield"
                      placeholder="Your email address"
                      className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="absolute inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                      type="email"
                      color="black_900"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Button
                      className="!text-black-900 absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start ml-10 md:ml-[0] mr-[257px] w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="black_900"
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
              <div className="flex flex-col font-quicksand gap-[35px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1910px] w-full">
                  <Img
                    className="md:flex-1 h-[97px] sm:h-auto object-cover w-[454px] md:w-full"
                    src="images/img_traceworkstrademarked_73x378.png"
                    alt="traceworkstrade_One"
                  />
                  <div className="flex flex-col gap-9 h-[191px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtQuicksandSemiBold24WhiteA700"
                    >
                      Other apps
                    </Text>
                    <ul className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Food Delivery
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Meat Delivery
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Track Order
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Shipping Details
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtQuicksandSemiBold24WhiteA700"
                    >
                      Useful links
                    </Text>
                    <ul className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            About Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Conact
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Hot deals
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            Promotions
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtQuicksandMedium16WhiteA700">
                            New products
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[62px] sm:h-[76px] relative w-full">
                  <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1916px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtQuicksandMedium16WhiteA700"
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

export default UserDashboardPage;
