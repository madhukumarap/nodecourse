import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";
import C24OrderHistoryOneOrderhistory from "components/C24OrderHistoryOneOrderhistory";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const OrderHistoryOnePage = () => {
  const c24OrderHistoryOneOrderhistoryPropList = [
    {},
    {
      dynamictext2: "27 Mar, 2021",
      dynamictext4: "on the way",
      dynamictext3: "$25.00 (1 Product)",
      dynamictext1: "5045",
    },
    {
      dynamictext2: "20 Mar, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$250.00 (4 Products)",
      dynamictext1: "5028",
    },
    {
      dynamictext2: "19 Mar, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$35.00 (1 Products)",
      dynamictext1: "4600",
    },
    {
      dynamictext2: "18 Mar, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$578.00 (13 Products)",
      dynamictext1: "4152",
    },
    {
      dynamictext2: "10 Mar, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$345.00 (7 Products)",
      dynamictext1: "8811",
    },
    {
      dynamictext2: "5 Mar, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$560.00 (2 Products)",
      dynamictext1: "3536",
    },
    {
      dynamictext2: "27 Feb, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$560.00 (2 Products)",
      dynamictext1: "1374",
    },
    {
      dynamictext2: "25 Feb, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$560.00 (2 Products)",
      dynamictext1: "7791",
    },
    {
      dynamictext2: "24 Feb, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$23.00 (1 Products)",
      dynamictext1: "4846",
    },
    {
      dynamictext2: "20 Feb, 2021",
      dynamictext4: "Completed",
      dynamictext3: "$23.00 (1 Products)",
      dynamictext1: "5948",
    },
    {
      dynamictext2: "12 Oct, 2020",
      dynamictext4: "Completed",
      dynamictext3: "$23.00 (1 Products)",
      dynamictext1: "1577",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[29px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[46px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            vegetablestext="Account"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Order History"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardOneColumnnavigation
              className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mb-[324px] pb-3 rounded-lg w-auto"
              dashboardtwooneimage="images/img_dashboard2_blue_gray_100_24x24.svg"
              settingstext="Settings"
            />
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start py-[17px] rounded-lg w-3/4 md:w-full">
              <Text
                className="ml-6 md:ml-[0] text-black-900 text-xl"
                size="txtPoppinsMedium20"
              >
                Order History
              </Text>
              <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3.5 p-2 w-full">
                <Text
                  className="sm:ml-[0] ml-[15px] text-gray-800 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray800"
                >
                  Order ID
                </Text>
                <Text
                  className="sm:ml-[0] ml-[119px] text-gray-800 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray800"
                >
                  Date
                </Text>
                <Text
                  className="ml-48 sm:ml-[0] text-gray-800 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray800"
                >
                  Total
                </Text>
                <Text
                  className="sm:ml-[0] ml-[229px] text-gray-800 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray800"
                >
                  Status
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-6 md:ml-[0] mt-3 w-auto md:w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  {c24OrderHistoryOneOrderhistoryPropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`C24OrderHistoryOneOrderhistory${index}`}
                      >
                        <C24OrderHistoryOneOrderhistory
                          className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start py-2.5 w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </List>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start mb-3.5 md:ml-[0] ml-[408px] mt-6 w-auto">
                <Button
                  className="flex h-9 items-center justify-center rounded-[50%] w-9"
                  shape="circle"
                  color="gray_100"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_arrowleft_gray_400.svg"
                    alt="arrowleft"
                  />
                </Button>
                <div className="flex flex-row items-start justify-start w-auto">
                  <Text
                    className="bg-deep_orange-500 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
                    size="txtPoppinsMedium16"
                  >
                    1
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                    size="txtPoppinsRegular16Gray700"
                  >
                    2
                  </Text>
                  <Text
                    className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                    size="txtPoppinsRegular16Gray700"
                  >
                    3
                  </Text>
                </div>
                <Button
                  className="border border-gray-300 border-solid flex h-9 items-center justify-center rotate-[180deg] rounded-[50%] w-9"
                  shape="circle"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer1 className="flex items-center justify-center mt-[58px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderHistoryOnePage;
