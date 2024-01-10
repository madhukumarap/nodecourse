import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutTeamcard from "components/C02HomepageBoxLayoutTeamcard";
import C02HomepageBoxLayoutTeamcard1 from "components/C02HomepageBoxLayoutTeamcard1";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const AboutOnePage = () => {
  const c02HomepageBoxLayoutTeamcard1PropList = [
    { userimage: "images/img_image_67.png" },
    {
      jennywilson: "Cody Fisher",
      userimage: "images/img_image_68.png",
      ceofounder: "Security Guard",
    },
    {
      jennywilson: "Robert Fox",
      userimage: "images/img_image_69.png",
      ceofounder: "Senior Farmer Manager",
    },
  ];
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[19px] w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homesiximage="images/img_home.svg"
          languagetext="About"
        />
        <div className="flex flex-col items-center justify-start max-w-[1364px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
            <div className="flex flex-col gap-8 items-center justify-start">
              <Text
                className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-full"
                size="txtPoppinsSemiBold56WhiteA700"
              >
                100% Trusted Organic Food Store
              </Text>
              <Text
                className="leading-[150.00%] text-lg text-white-A700 w-[98%] sm:w-full"
                size="txtPoppinsRegular18WhiteA700"
              >
                <>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </>
              </Text>
            </div>
            <Img
              className="h-[492px] md:h-auto object-cover rounded-lg"
              src="images/img_image_492x716.png"
              alt="image_One"
            />
          </div>
        </div>
        <div className="bg-deep_orange-500 h-[685px] md:h-[765px] mt-20 pr-[300px] md:px-5 relative shadow-bs7 w-full">
          <div className="absolute h-[685px] inset-y-[0] left-[0] my-auto w-[85%] md:w-full">
            <div className="absolute h-[685px] inset-y-[0] left-[0] my-auto w-[70%] md:w-full">
              <Img
                className="h-[685px] m-auto object-cover w-full"
                src="images/img_bg_3.png"
                alt="bg"
              />
              <Img
                className="absolute h-[685px] inset-[0] justify-center m-auto object-cover w-[66%]"
                src="images/img_image_685x745.png"
                alt="image_Two"
              />
            </div>
            <div className="absolute flex flex-col gap-5 items-start justify-start right-[5%] top-[12%] w-auto">
              <Text
                className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-black-900_01"
                size="txtPoppinsSemiBold56"
              >
                <>
                  100% Trusted
                  <br />
                  Organic Food Store
                </>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[570px] md:max-w-full text-base text-gray-600"
                size="txtPoppinsRegular16"
              >
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.{" "}
              </Text>
            </div>
            <div className="absolute bg-white-A700 bottom-[41%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_leaf2.svg"
                  alt="leafTwo"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  100% Organic food
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  100% healthy & Fresh food.
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[27%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img className="h-10" src="images/img_group.svg" alt="group" />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Customer Feedback
                </Text>
                <Text
                  className="text-red-A700 text-sm w-auto"
                  size="txtPoppinsRegular14RedA700"
                >
                  Our happy customer
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[13%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_deliverytruck1.svg"
                  alt="deliverytruckOne"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Free Shipping
                </Text>
                <Text
                  className="text-red-A700 text-sm w-auto"
                  size="txtPoppinsRegular14RedA700"
                >
                  Free shipping with discount
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[13%] flex flex-col gap-6 right-[0] w-1/5"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_headphones1.svg"
                    alt="headphonesOne"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Great Support 24/7
                  </Text>
                  <Text
                    className="text-red-A700 text-sm w-auto"
                    size="txtPoppinsRegular14RedA700"
                  >
                    Instant access to Contact
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_bag_deep_orange_500.svg"
                    alt="bag"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    100% Sucure Payment
                  </Text>
                  <Text
                    className="text-red-A700 text-sm w-auto"
                    size="txtPoppinsRegular14RedA700"
                  >
                    We ensure your money is save
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_package.svg"
                    alt="package"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    100% Organic Food
                  </Text>
                  <Text
                    className="text-red-A700 text-sm w-auto"
                    size="txtPoppinsRegular14RedA700"
                  >
                    100% healthy & Fresh food.
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="h-[1302px] mt-20 md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-center mb-[-10px] ml-auto mr-36 pb-2.5 w-[77%] z-[1]">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-20 w-[38%] md:w-full">
              <Text
                className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtPoppinsSemiBold48WhiteA700"
              >
                We Delivered, You Enjoy Your Order.
              </Text>
              <Text
                className="leading-[150.00%] mt-6 text-base text-white-A700 w-[98%] sm:w-full"
                size="txtPoppinsRegular16WhiteA700"
              >
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start mt-5 w-auto sm:w-full">
                <CheckBox
                  className="!text-white-A700 sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="sedinmetuspelle_One"
                  id="sedinmetuspelle_One"
                  label="Sed in metus pellentesque."
                  shape="round"
                  color="deep_orange_500_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <CheckBox
                  className="!text-white-A700 sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="fusceetexcommod_One"
                  id="fusceetexcommod_One"
                  label="Fusce et ex commodo, aliquam nulla efficitur, tempus lorem."
                  shape="round"
                  color="deep_orange_500_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <CheckBox
                  className="!text-white-A700 sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="maecenasutnunc"
                  id="maecenasutnunc"
                  label="Maecenas ut nunc fringilla erat varius."
                  shape="round"
                  color="deep_orange_500_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[192px] mt-[29px] rounded-[25px]"
                rightIcon={
                  <Img
                    className="mt-1 mb-[7px] ml-4"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-base text-left">
                  Shop Now
                </div>
              </Button>
            </div>
            <Img
              className="h-[606px] sm:h-auto object-cover w-[61%] md:w-full"
              src="images/img_image_606x895.png"
              alt="image_Four"
            />
          </div>
          <div className="bg-gradient6  flex flex-col items-center justify-start mt-auto mx-auto p-[73px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mb-1.5 w-[84%] md:w-full">
              <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-auto"
                  size="txtPoppinsSemiBold48WhiteA700"
                >
                  Our Awesome Team
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-screen-sm text-base text-center text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                  tincidunt a a mi.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Button
                  className="border border-gray-300 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[161px] rotate-[180deg] w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown_Six"
                  />
                </Button>
                <C02HomepageBoxLayoutTeamcard
                  className="bg-white-A700 flex flex-col gap-4 items-center justify-start pb-5 rounded-[10px] shadow-bs5"
                  userimage="images/img_image_66.png"
                />
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3"
                  orientation="horizontal"
                >
                  {c02HomepageBoxLayoutTeamcard1PropList.map((props, index) => (
                    <React.Fragment
                      key={`C02HomepageBoxLayoutTeamcard1${index}`}
                    >
                      <C02HomepageBoxLayoutTeamcard1
                        className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-start sm:ml-[0] pb-5 rounded-lg w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <Button
                  className="border border-gray-300 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[161px] w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-deep_orange-A400_82 flex flex-col gap-8 h-[464px] md:h-auto items-center justify-center mt-[134px] py-[60px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1916px] md:px-10 sm:px-5 px-[300px] w-full">
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
                  alt="arrowdown_Seven"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft_One" />
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
        <Footer className="flex items-center justify-center mt-[147px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutOnePage;
