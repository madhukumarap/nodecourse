import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C23UserDashboardOneColumnnavigation from "components/C23UserDashboardOneColumnnavigation";
import Header1 from "components/Header1";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto py-[5px] w-full">
        <div className="flex flex-col items-center justify-start mb-[5px] w-full">
          <div className="h-[310px] md:px-5 relative w-full">
            <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center mb-[-5px] mx-auto w-full z-[1]" />
            <C07ShopOneOneBreadcrumbs
              className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end mt-auto mx-auto p-[45px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
              homesiximage="images/img_home.svg"
              categorytext="Account"
              vectoroneimage="images/img_vector_red_a700.svg"
              languagetext="Settings"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardOneColumnnavigation
              className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex flex-col items-start justify-start mb-[115px] pb-3 rounded-lg w-auto"
              dashboardtwoimage="images/img_dashboard2_gray_700_01.svg"
              orderhistorytext="Order History"
              favoriteoneimage="images/img_favorite_gray_700_01.svg"
              bagoneimage="images/img_bag_gray_700_01.svg"
              dashboardtwotwoimage="images/img_dashboard2_2.svg"
            />
            <div className="bg-blue_gray-900_02 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-blue_gray-700 py-0.5 rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col gap-[23px] justify-start mb-[22px] w-full">
                <div className="bg-blue_gray-900_02 flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg shadow-bs7 w-full">
                  <Text
                    className="ml-2.5 md:ml-[0] mt-1 text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    Account Settings
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start ml-6 md:ml-[0] w-[87%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          First name
                        </Text>
                        <Input
                          name="inputfield"
                          placeholder="Dianne"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          shape="round"
                          color="blue_gray_900_02"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Last Name
                        </Text>
                        <Input
                          name="inputfield_One"
                          placeholder="Russell"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="dianne.russell@gmail.com"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="email"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Phone Number
                        </Text>
                        <Input
                          name="inputfield_Two"
                          placeholder="(603) 555-0123"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[27%] md:w-full">
                      <Img
                        className="h-56 md:h-auto rounded-[50%] w-56"
                        src="images/img_image_71.png"
                        alt="image_One"
                      />
                      <Button
                        className="!text-deep_orange-500 cursor-pointer font-semibold min-w-[159px] outline outline-[1px] outline-deep_orange-500 text-center text-sm"
                        shape="round"
                        color="blue_gray_900_02"
                        size="lg"
                        variant="fill"
                      >
                        Chose Image
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[167px] text-center text-sm"
                    shape="round"
                    color="deep_orange_500"
                    size="lg"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_02 flex flex-col items-center justify-start mt-6 outline outline-[1px] outline-blue_gray-700 md:px-5 py-0.5 rounded-lg w-[52%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[22px] w-full">
              <div className="bg-blue_gray-900_02 flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg shadow-bs7 w-full">
                <Text
                  className="ml-2.5 md:ml-[0] mt-1 text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Billing Address
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      First name
                    </Text>
                    <Input
                      name="inputfield_Three"
                      placeholder="Dianne"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      shape="round"
                      color="blue_gray_900_02"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Last name
                    </Text>
                    <Input
                      name="inputfield_Four"
                      placeholder="Dianne"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      shape="round"
                      color="blue_gray_900_02"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      <span className="text-black-900 font-poppins text-left font-normal">
                        Company Name{" "}
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        (optional)
                      </span>
                    </Text>
                    <Input
                      name="inputfield_Five"
                      placeholder="Zakirsoft"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      shape="round"
                      color="blue_gray_900_02"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start mt-[15px] w-auto md:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Street Address
                  </Text>
                  <Input
                    name="par|Counter"
                    placeholder="4140 Par|"
                    className="!placeholder:text-white-A700 !text-white-A700 p-0 text-base text-left w-full"
                    wrapClassName="border border-deep_orange-A400 border-solid w-full"
                    shape="round"
                    color="blue_gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[15px] w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Country / Region
                    </Text>
                    <Input
                      name="inputfield_Six"
                      placeholder="United States"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid flex w-auto"
                      suffix={
                        <Img
                          className="mt-1 mb-[3px] h-4 ml-[35px]"
                          src="images/img_arrowdown_deep_orange_a400.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="blue_gray_900_02"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      States
                    </Text>
                    <Input
                      name="inputfield_Seven"
                      placeholder="Washington DC"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid flex w-auto"
                      suffix={
                        <Img
                          className="mt-0.5 mb-[5px] h-4 ml-[35px]"
                          src="images/img_arrowdown_deep_orange_a400.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Zip Code
                    </Text>
                    <Input
                      name="zipcode_One"
                      placeholder="20033"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_Three"
                      placeholder="dianne.russell@gmail.com"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      type="email"
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Phone
                    </Text>
                    <Input
                      name="inputfield_Eight"
                      placeholder="(603) 555-0123"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid w-full"
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[167px] mt-6 text-center text-sm"
                  shape="round"
                  color="deep_orange_A400"
                  size="lg"
                  variant="fill"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_02 flex flex-col items-center justify-start mt-6 outline outline-[1px] outline-blue_gray-700 md:px-5 py-0.5 rounded-lg w-[52%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[22px] w-full">
              <Input
                name="heading"
                placeholder="Change Password"
                className="!placeholder:text-white-A700 !text-white-A700 font-medium p-0 text-left text-xl w-full"
                wrapClassName="rounded-tl-lg rounded-tr-lg shadow-bs7 w-full"
                type="password"
                color="blue_gray_900_02"
                size="lg"
                variant="fill"
              ></Input>
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Current Password
                  </Text>
                  <Input
                    name="inputfield_Nine"
                    placeholder="Password"
                    className="!placeholder:text-deep_orange-A400 !text-deep_orange-A400 p-0 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-700 border-solid flex w-auto md:w-full"
                    type="password"
                    suffix={
                      <Img
                        className="mt-0.5 mb-px h-5 ml-[35px]"
                        src="images/img_eyeopen_1.svg"
                        alt="eye-open 1"
                      />
                    }
                    shape="round"
                    color="blue_gray_900_02"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      New Password Password
                    </Text>
                    <Input
                      name="inputfield_Ten"
                      placeholder="Password"
                      className="!placeholder:text-deep_orange-A400 !text-deep_orange-A400 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid flex w-auto sm:w-full"
                      type="password"
                      suffix={
                        <Img
                          className="mt-0.5 mb-px h-5 ml-[35px]"
                          src="images/img_eyeopen_1.svg"
                          alt="eye-open 1"
                        />
                      }
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Confirm Password
                    </Text>
                    <Input
                      name="inputfield_Eleven"
                      placeholder="Password"
                      className="!placeholder:text-deep_orange-A400 !text-deep_orange-A400 p-0 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-700 border-solid flex w-auto sm:w-full"
                      type="password"
                      suffix={
                        <Img
                          className="mt-0.5 mb-px h-5 ml-[35px]"
                          src="images/img_eyeopen_1.svg"
                          alt="eye-open 1"
                        />
                      }
                      shape="round"
                      color="blue_gray_900_02"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Text
                  className="bg-deep_orange-A400 justify-center mt-6 pb-2.5 pt-[13px] sm:px-5 px-8 rounded-[22px] text-sm text-white-A700 w-auto"
                  size="txtPoppinsSemiBold14WhiteA700"
                >
                  Change Password
                </Text>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-20 md:px-5 w-full">
            <div className="flex flex-col gap-[33px] items-center justify-center w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[38px] sm:px-5 w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start md:ml-[0] ml-[261px] w-auto sm:w-full">
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
                    <Text
                      className="absolute bg-black-900 h-full inset-y-[0] justify-center left-[0] my-auto pl-6 pr-[35px] sm:px-5 py-[13px] rounded-[26px] text-base text-gray-600 w-[492px]"
                      size="txtPoppinsRegular16"
                    >
                      Your email address
                    </Text>
                    <Button
                      className="!text-black-900 absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start ml-10 md:ml-[0] w-auto">
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
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1920px] w-full">
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

export default SettingsPage;
