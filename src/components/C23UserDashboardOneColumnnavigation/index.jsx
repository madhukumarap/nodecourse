import React from "react";

import { Img, Input, Text } from "components";

const C23UserDashboardOneColumnnavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start pb-4 pl-5 pt-6 w-auto">
          <Text
            className="text-black-900 text-xl w-auto"
            size="txtPoppinsMedium20"
          >
            {props?.navigation}
          </Text>
        </div>
        {!!props?.dashboardimage ? (
          <Input
            name="accountlinks"
            placeholder="Dashboard"
            value={props?.dashboardimage}
            className="!placeholder:text-black-900 !text-black-900 font-poppins p-0 text-base text-left w-full"
            wrapClassName="flex w-full"
            prefix={
              <Img
                className="mt-auto mb-px h-6 mr-2.5"
                src="images/img_dashboard_2.svg"
                alt="dashboard 2"
              />
            }
            shape="square"
            color="deep_orange_500_3f"
            size="lg"
            variant="fill"
          ></Input>
        ) : null}
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-4 w-auto md:w-full">
          {!!props?.dashboardtwoimage ? (
            <Img
              className="h-6 w-6"
              alt="dashboardTwo"
              src={props?.dashboardtwoimage}
            />
          ) : null}
          {!!props?.orderhistorytext ? (
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsRegular16Gray700"
            >
              {props?.orderhistorytext}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-4 w-auto md:w-full">
          <Img
            className="h-6 w-6"
            alt="favorite_One"
            src={props?.favoriteoneimage}
          />
          <Text
            className="text-base text-gray-700 w-auto"
            size="txtPoppinsRegular16Gray700"
          >
            {props?.wishlisttext}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-4 w-auto md:w-full">
          <Img className="h-6 w-6" alt="bag_One" src={props?.bagoneimage} />
          <Text
            className="text-base text-gray-700 w-auto"
            size="txtPoppinsRegular16Gray700"
          >
            {props?.shoppingcarttext}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-4 w-auto md:w-full">
          {!!props?.dashboardtwooneimage ? (
            <Img
              className="h-6 w-6"
              alt="dashboardTwo_One"
              src={props?.dashboardtwooneimage}
            />
          ) : null}
          {!!props?.settingstext ? (
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtPoppinsRegular16Gray700"
            >
              {props?.settingstext}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center px-5 py-4 w-auto md:w-full">
          <Img
            className="h-6 w-6"
            alt="dashboardTwo_Two"
            src={props?.dashboardtwotwoimage}
          />
          <Text
            className="text-base text-gray-700 w-auto"
            size="txtPoppinsRegular16Gray700"
          >
            {props?.logouttext}
          </Text>
        </div>
      </div>
    </>
  );
};

C23UserDashboardOneColumnnavigation.defaultProps = {
  navigation: "Navigation",
  favoriteoneimage: "images/img_favorite_blue_gray_100.svg",
  wishlisttext: "Wishlist",
  bagoneimage: "images/img_bag_blue_gray_100.svg",
  shoppingcarttext: "Shopping Cart",
  dashboardtwotwoimage: "images/img_dashboard2_24x24.svg",
  logouttext: "Log-out",
};

export default C23UserDashboardOneColumnnavigation;
