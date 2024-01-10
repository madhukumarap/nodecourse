import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";
import C24OrderHistoryOneOrderhistory from "components/C24OrderHistoryOneOrderhistory";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const OrderHistoryPage = () => {
  const c24OrderHistoryOneOrderhistoryPropList = [
    {
      dynamictext3: (
        <Text className="ml-36 md:ml-[0] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $135.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (5 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "5045",
      dynamictext4: "on the way",
      dynamictext2: "27 Mar, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[142px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $25.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (1 Product)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "5028",
      dynamictext4: "Completed",
      dynamictext2: "20 Mar, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[141px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $250.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (4 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "4600",
      dynamictext4: "Completed",
      dynamictext2: "19 Mar, 2021",
      dynamictext3: (
        <Text className="ml-36 md:ml-[0] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $35.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (1 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "4152",
      dynamictext4: "Completed",
      dynamictext2: "18 Mar, 2021",
      dynamictext3: (
        <Text className="ml-36 md:ml-[0] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $578.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (13 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "8811",
      dynamictext4: "Completed",
      dynamictext2: "10 Mar, 2021",
      dynamictext3: (
        <Text className="ml-36 md:ml-[0] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $345.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (7 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "3536",
      dynamictext4: "Completed",
      dynamictext2: "5 Mar, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[149px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $560.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (2 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "1374",
      dynamictext4: "Completed",
      dynamictext2: "27 Feb, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[143px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $560.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (2 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "7791",
      dynamictext4: "Completed",
      dynamictext2: "25 Feb, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[142px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $560.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (2 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "4846",
      dynamictext4: "Completed",
      dynamictext2: "24 Feb, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[142px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $23.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (1 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "5948",
      dynamictext4: "Completed",
      dynamictext2: "20 Feb, 2021",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[142px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $23.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (1 Products)
          </span>
        </Text>
      ),
    },
    {
      dynamictext1: "1577",
      dynamictext4: "Completed",
      dynamictext2: "12 Oct, 2020",
      dynamictext3: (
        <Text className="md:ml-[0] ml-[142px] text-blue_gray-100 text-sm">
          <span className="text-blue_gray-100 font-poppins text-left font-medium">
            $23.00
          </span>
          <span className="text-blue_gray-100 font-poppins text-left font-normal">
            {" "}
            (1 Products)
          </span>
        </Text>
      ),
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[21px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
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
              className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex flex-col items-start justify-start mb-[324px] pb-3 rounded-lg w-auto"
              favoriteoneimage="images/img_favorite_gray_700_01.svg"
              bagoneimage="images/img_bag_gray_700_01.svg"
              dashboardtwooneimage="images/img_dashboard2_gray_700_01_24x24.svg"
              settingstext="Settings"
              dashboardtwotwoimage="images/img_dashboard2_2.svg"
            />
            <div className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex md:flex-1 flex-col items-start justify-start py-[17px] rounded-lg w-3/4 md:w-full">
              <Text
                className="ml-6 md:ml-[0] text-white-A700 text-xl"
                size="txtPoppinsMedium20WhiteA700"
              >
                Order History
              </Text>
              <div className="bg-gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-3.5 p-2 w-full">
                <Text
                  className="sm:ml-[0] ml-[15px] text-gray-400 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray400"
                >
                  Order ID
                </Text>
                <Text
                  className="sm:ml-[0] ml-[119px] text-gray-400 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray400"
                >
                  Date
                </Text>
                <Text
                  className="ml-48 sm:ml-[0] text-gray-400 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray400"
                >
                  Total
                </Text>
                <Text
                  className="sm:ml-[0] ml-[229px] text-gray-400 text-xs tracking-[0.36px] uppercase"
                  size="txtPoppinsMedium12Gray400"
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
                  color="gray_900"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_arrowleft_gray_500_02.svg"
                    alt="arrowleft"
                  />
                </Button>
                <div className="flex flex-row items-start justify-start w-auto">
                  <Text
                    className="bg-deep_orange-A400 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
                    size="txtPoppinsMedium16"
                  >
                    1
                  </Text>
                  <Text
                    className="bg-blue_gray-900_02 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-500 w-9"
                    size="txtPoppinsRegular16Gray500"
                  >
                    2
                  </Text>
                  <Text
                    className="bg-blue_gray-900_02 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-500 w-9"
                    size="txtPoppinsRegular16Gray500"
                  >
                    3
                  </Text>
                </div>
                <Button
                  className="border border-blue_gray-700 border-solid flex h-9 items-center justify-center rotate-[180deg] rounded-[50%] w-9"
                  shape="circle"
                  color="blue_gray_900_02"
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
          <Footer className="flex items-center justify-center mt-[69px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default OrderHistoryPage;
