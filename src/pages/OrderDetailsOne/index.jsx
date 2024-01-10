import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const OrderDetailsOnePage = () => {
  const table7Data = React.useRef([
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
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2">
            <Img
              className="h-[70px] md:h-auto ml-3 mt-1 object-cover w-[70px]"
              src="images/img_image_41.png"
              alt="image_One"
            />
            <Text
              className="text-sm text-white-A700"
              size="txtPoppinsRegular14WhiteA700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[424px] pl-5 py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Product
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("priceThree", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-sm text-white-A700"
            size="txtPoppinsRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[169px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Price
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-sm text-white-A700"
            size="txtPoppinsRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[191px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Quantity
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("subtotalOne", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-sm text-white-A700"
            size="txtPoppinsMedium14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] py-2 text-gray-400 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray400"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-10 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
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
              className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex flex-col items-start justify-start mb-[407px] pb-3 rounded-lg w-auto"
              favoriteoneimage="images/img_favorite_gray_700_01.svg"
              bagoneimage="images/img_bag_gray_700_01.svg"
              dashboardtwooneimage="images/img_dashboard2_gray_700_01_24x24.svg"
              settingstext="Settings"
              dashboardtwotwoimage="images/img_dashboard2_2.svg"
            />
            <div className="bg-blue_gray-900_02 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-blue_gray-700 pb-5 rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_02 flex sm:flex-col flex-row sm:gap-10 gap-[509px] items-center justify-start sm:px-5 px-6 py-4 rounded-tl-lg rounded-tr-lg shadow-bs7 w-auto md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtPoppinsMedium20WhiteA700"
                    >
                      Order Details
                    </Text>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      April 24, 2021
                    </Text>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      3 Products
                    </Text>
                  </div>
                  <Text
                    className="text-base text-deep_orange-A400 w-auto"
                    size="txtPoppinsMedium16DeeporangeA400"
                  >
                    Back to List
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-[96%] md:w-full">
                  <List
                    className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 rounded-md w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-3.5 items-start justify-start mb-5 sm:ml-[0] sm:mt-0 mt-3.5 w-full">
                      <Text
                        className="ml-5 md:ml-[0] text-deep_orange-A400 text-sm tracking-[0.42px] uppercase"
                        size="txtPoppinsMedium14DeeporangeA400"
                      >
                        Billing Address
                      </Text>
                      <Line className="bg-blue_gray-700 h-px w-full" />
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          Dainne Russell
                        </Text>
                        <Text
                          className="leading-[150.00%] mt-2 text-gray-500 text-sm w-full"
                          size="txtPoppinsRegular14Gray500"
                        >
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </Text>
                        <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                          <Text
                            className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12DeeporangeA400"
                          >
                            Email
                          </Text>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            dainne.ressell@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                          <Text
                            className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12DeeporangeA400"
                          >
                            Phone
                          </Text>
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            (671) 555-0110
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[280px] sm:ml-[0] relative w-full">
                      <div className="absolute flex flex-col gap-3.5 h-max inset-[0] items-start justify-center m-auto w-full">
                        <Text
                          className="ml-5 md:ml-[0] text-deep_orange-A400 text-sm tracking-[0.42px] uppercase"
                          size="txtPoppinsMedium14DeeporangeA400"
                        >
                          Shipping Address
                        </Text>
                        <Line className="bg-blue_gray-700 h-px w-full" />
                        <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsRegular16WhiteA700"
                          >
                            Dainne Russell
                          </Text>
                          <Text
                            className="leading-[150.00%] mt-2 text-gray-500 text-sm w-full"
                            size="txtPoppinsRegular14Gray500"
                          >
                            4140 Parker Rd. Allentown, New Mexico 31134
                          </Text>
                          <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                            <Text
                              className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12DeeporangeA400"
                            >
                              Email
                            </Text>
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtPoppinsRegular14WhiteA700"
                            >
                              dainne.ressell@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                            <Text
                              className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12DeeporangeA400"
                            >
                              Phone
                            </Text>
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtPoppinsRegular14WhiteA700"
                            >
                              (671) 555-0110
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="absolute bg-blue_gray-700 h-[280px] inset-y-[0] left-[0] my-auto w-px" />
                    </div>
                  </List>
                  <div className="border border-blue_gray-700 border-solid flex flex-col items-start justify-start rounded-md w-auto">
                    <div className="flex flex-row gap-5 items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12DeeporangeA400"
                        >
                          Order ID:
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          #4152
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-700 h-10 w-px" />
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-deep_orange-A400 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12DeeporangeA400"
                        >
                          Payment Method:
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Paypal
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-700 h-px w-full" />
                    <div className="flex flex-col gap-px items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-row items-center justify-between pb-3 w-[248px]">
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsMedium14WhiteA700"
                        >
                          $365.00
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-700 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Discount
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsMedium14WhiteA700"
                        >
                          20%
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-700 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14Gray500"
                        >
                          Shipping
                        </Text>
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsMedium14WhiteA700"
                        >
                          Free
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-700 h-px w-full" />
                      <div className="flex flex-row items-center justify-between pt-3 w-[248px]">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-deep_orange-A400 text-lg w-auto"
                          size="txtPoppinsSemiBold18DeeporangeA400"
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
                        src="images/img_line_gray_900.svg"
                        alt="line"
                      />
                      <div className="absolute md:gap-10 gap-[79px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full inset-[0] items-center justify-between m-auto max-w-[800px] w-full">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="circle"
                          color="deep_orange_A400"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_check_blue_gray_900_02.svg"
                            alt="check"
                          />
                        </Button>
                        <Text
                          className="bg-deep_orange-A400 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
                          size="txtPoppinsMedium14WhiteA700"
                        >
                          02
                        </Text>
                        <div className="bg-blue_gray-900_02 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-deep_orange-A400 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-deep_orange-A400 text-sm"
                            size="txtPoppinsRegular14DeeporangeA400"
                          >
                            03
                          </Text>
                        </div>
                        <div className="bg-blue_gray-900_02 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-deep_orange-A400 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-deep_orange-A400 text-sm"
                            size="txtPoppinsRegular14DeeporangeA400"
                          >
                            04
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-center text-deep_orange-A400 text-sm"
                        size="txtPoppinsRegular14DeeporangeA400"
                      >
                        Order received
                      </Text>
                      <Text
                        className="text-center text-deep_orange-A400 text-sm"
                        size="txtPoppinsMedium14DeeporangeA400"
                      >
                        Processing
                      </Text>
                      <Text
                        className="text-blue_gray-100 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray100"
                      >
                        On the way
                      </Text>
                      <Text
                        className="text-blue_gray-100 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray100"
                      >
                        Delivered
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto mt-[38px] w-full">
                  <ReactTable
                    columns={table7Columns}
                    data={table7Data.current}
                    rowClass={"border-b border-blue_gray-700"}
                    headerClass="bg-gray-900"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[50px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderDetailsOnePage;
