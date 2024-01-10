import React from "react";

import { Button, Img, Line, List, Text } from "components";
import BannarBannar from "components/BannarBannar";
import BannarBannar1 from "components/BannarBannar1";
import BannarBannarbig from "components/BannarBannarbig";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C01HomepageDiscountbannar from "components/C01HomepageDiscountbannar";
import C03HomepageColumnThree from "components/C03HomepageColumnThree";

const HomepageOnePage = () => {
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[667px] w-full">
        <header className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="bg-black-900 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
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
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12WhiteA700">Sign In</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12WhiteA700">/</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12WhiteA700">Sign Up</Text>
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
        </header>
        <div className="flex flex-col items-center justify-start max-w-[1319px] mt-[84px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
            <BannarBannarbig
              className="bg-cover bg-gradient  bg-no-repeat flex md:flex-1 flex-col h-[600px] items-start justify-center p-[60px] md:px-10 sm:px-5 rounded-[10px] w-[67%] md:w-full"
              style={{ backgroundImage: "url('images/img_bannarbig.png')" }}
            />
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
              <BannarBannar className="h-72 relative w-full" />
              <BannarBannar1
                className="h-72 relative w-full"
                bgimage="images/img_bg_2.png"
                arrowleftimage="images/img_arrowleft.svg"
              />
            </div>
          </div>
        </div>
        <div className="bg-deep_orange-A400 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mt-6 mx-auto p-10 md:px-5 rounded-lg shadow-bs10 w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[5px] grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_deliverytruck1_white_a700.svg"
                alt="deliverytruckOne"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsSemiBold16"
                >
                  Free Shipping
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  Free shipping on all your order
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_headphones1_white_a700.svg"
                alt="headphonesOne"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsSemiBold16"
                >
                  Customer Support 24/7
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  Instant access to Support
                </Text>
              </div>
            </div>
          </List>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[5px] grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_bag_white_a700_72x72.svg"
                alt="bag"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsSemiBold16"
                >
                  100% Secure Payment
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  We ensure your money is save
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_package_white_a700.svg"
                alt="package"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtPoppinsSemiBold16"
                >
                  Money-Back Guarantee
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  30 Days Money-Back Guarantee
                </Text>
              </div>
            </div>
          </List>
        </div>
        <C01HomepageDiscountbannar
          className="bg-cover bg-no-repeat flex flex-col gap-7 h-[358px] items-start justify-center max-w-[1320px] mt-[3241px] mx-auto p-[51px] md:px-5 rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
          offer={
            <Text className="font-semibold md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-auto">
              <span className="text-deep_orange-500 font-poppins text-left">
                37%
              </span>
              <span className="text-white-A700 font-poppins text-left"> </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                OFF
              </span>
            </Text>
          }
        />
        <div className="bg-deep_orange-A400_87 flex flex-col gap-8 items-center justify-center mt-[1141px] py-[60px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
              size="txtPoppinsSemiBold32"
            >
              Client Testimonials
            </Text>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="border border-gray-300 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown_Two"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft_Two" />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1320px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {c01HomepageColumnuserPropList.map((props, index) => (
              <React.Fragment key={`C01HomepageColumnuser${index}`}>
                <C01HomepageColumnuser
                  className="bg-black-900 flex sm:flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                  userimage="images/img_user_deep_orange_a400.svg"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <C03HomepageColumnThree
          className="flex flex-col items-center justify-start max-w-[1320px] mt-[75px] mx-auto md:px-5 w-full"
          instagramposticons="images/img_icons_deep_orange_500.svg"
          instagrampostimagefour="images/img_instagrampost_5.png"
          instagrampostimagefive="images/img_instagrampost_6.png"
        />
      </div>
    </>
  );
};

export default HomepageOnePage;
