import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import C01HomepageBannar from "components/C01HomepageBannar";
import C01HomepageBannar1 from "components/C01HomepageBannar1";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C02HomepageBoxLayoutBannar from "components/C02HomepageBoxLayoutBannar";
import C02HomepageBoxLayoutBannar1 from "components/C02HomepageBoxLayoutBannar1";
import C02HomepageBoxLayoutBannar2 from "components/C02HomepageBoxLayoutBannar2";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C02HomepageBoxLayoutTeamcard from "components/C02HomepageBoxLayoutTeamcard";
import C02HomepageBoxLayoutTeamcard1 from "components/C02HomepageBoxLayoutTeamcard1";
import C02HomepageBoxLayoutVideo from "components/C02HomepageBoxLayoutVideo";

const engOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const usdOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepageBoxLayoutPage = () => {
  const c02HomepageBoxLayoutProductPropList = [
    { text: "Eggplant", image: "images/img_image_9.png" },
    {},
    { text: "Red Tomatos", image: "images/img_image_28.png" },
  ];
  const c02HomepageBoxLayoutProductPropList1 = [
    { text: "Big Potatos", image: "images/img_image_2.png" },
    { text: "Corn", image: "images/img_image_4.png" },
    { text: "Fresh cauliflower", image: "images/img_image_5.png" },
  ];
  const c02HomepageBoxLayoutTeamcard1PropList = [
    {},
    {
      jennywilson: "Cody Fisher",
      userimage: "images/img_image_30.png",
      ceofounder: "Security Guard",
    },
    {
      jennywilson: "Robert Fox",
      userimage: "images/img_image_31.png",
      ceofounder: "Senior Farmer Manager",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-deep_orange-500_3f bg-no-repeat font-poppins h-[5510px] mx-auto py-10 relative w-full"
        style={{ backgroundImage: "url('images/img_02homepageboxlayout.png')" }}
      >
        <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto max-w-[1400px] pb-10 px-10 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start pt-[231px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_apple1.svg"
                      alt="appleOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Fresh Fruit
                    </Text>
                  </div>
                  <Input
                    name="menu"
                    placeholder="Vegetables"
                    className="font-medium p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3"
                        src="images/img_salad_1.svg"
                        alt="salad 1"
                      />
                    }
                    shape="square"
                    color="deep_orange_500"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_fish2.svg"
                      alt="fishTwo"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      River Fish
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_meat2.svg"
                      alt="meatTwo"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Chicken & Meat
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_coffee1.svg"
                      alt="coffeeOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Drink & Water
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_icecream1.svg"
                      alt="icecreamOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Yogurt & Ice Cream
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_salad_1.svg"
                      alt="cupcakeOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Cake & Bread
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_pie1.svg"
                      alt="pieOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Butter & Cream
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_food1.svg"
                      alt="foodOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Cooking
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start outline outline-[0.5px] outline-gray-300 p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_plussolid1.svg"
                      alt="plussolidOne"
                    />
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      View all Category
                    </Text>
                  </div>
                </div>
                <C02HomepageBoxLayoutBannar
                  className="h-[560px] relative rounded-[12px] w-3/4 md:w-full"
                  offer={
                    <Text className="font-medium leading-[120.00%] text-2xl md:text-[22px] text-white-A700_99 sm:text-xl tracking-[0.72px] uppercase">
                      <span className="text-white-A700_99 font-poppins text-left">
                        <>
                          Sale Up to
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins text-left">
                        48%
                      </span>
                      <span className="text-white-A700_99 font-poppins text-left">
                        {" "}
                        off
                      </span>
                    </Text>
                  }
                />
              </div>
              <List
                className="bg-white-A700 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start shadow-bs8 w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs9 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="deep_orange_500_3f"
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
                      size="txtPoppinsSemiBold18"
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
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs9 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="deep_orange_500_3f"
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
                      size="txtPoppinsSemiBold18"
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
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs9 shadow-bs9 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="deep_orange_500"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_bag_white_a700_72x72.svg"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
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
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs9 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="deep_orange_500_3f"
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
                      size="txtPoppinsSemiBold18"
                    >
                      Money-Back Guarantee
                    </Text>
                    <Text
                      className="text-red-A700 text-sm w-auto"
                      size="txtPoppinsRegular14RedA700"
                    >
                      30 days money-back
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start mt-[60px] w-auto md:w-full">
            <C01HomepageBannar className="h-[536px] relative w-[33%] md:w-full" />
            <List
              className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <C01HomepageBannar1
                className="h-[536px] relative w-full"
                rectanglefiftyfour="images/img_rectangle54_2.png"
              />
              <C01HomepageBannar2
                className="h-[536px] relative w-full"
                rectanglefiftyfour="images/img_rectangle54_3.png"
              />
            </List>
          </div>
          <div className="flex flex-col items-center justify-start mt-14 w-full">
            <div className="flex flex-col gap-[27px] items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase w-auto"
                  size="txtPoppinsMedium14Deeporange500"
                >
                  Category
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
                  size="txtPoppinsSemiBold36"
                >
                  Shop by Top Categories
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Fresh Fruit
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_130x190.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-deep_orange-500 text-lg w-auto"
                      size="txtPoppinsMedium18Deeporange500"
                    >
                      Fresh Vegetables
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_1.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Meat & Fish
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_2.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Snacks
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_3.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Beverages
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_4.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Beauty & Health
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_5.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Bread & Bakery
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_6.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Baking Needs
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_7.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Cooking
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_8.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Diabetic Food
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_9.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Dish Detergents
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300 pb-6 pt-4 hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_10.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Oil
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start mt-[60px] w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <Text
                className="text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase w-auto"
                size="txtPoppinsMedium14Deeporange500"
              >
                Products
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
                size="txtPoppinsSemiBold36"
              >
                Our Featured Products
              </Text>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between max-w-[1320px] w-full">
                <C02HomepageBoxLayoutBannar1 className="h-[335px] relative w-[19%] md:w-full" />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
                  orientation="horizontal"
                >
                  <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs3 hover:w-full w-full" />
                  <C02HomepageBoxLayoutProductsx
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs3 hover:w-full w-full"
                    productimage="images/img_image_246x246.png"
                    productname="Green Lettuce"
                  />
                  <C02HomepageBoxLayoutProductsx1 className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
                  <C02HomepageBoxLayoutProductsx
                    className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs3 hover:w-full w-full"
                    productimage="images/img_image_21.png"
                    productname="Corn"
                  />
                </List>
              </div>
              <div className="flex relative w-full">
                <div className="flex my-auto w-[84%] md:w-full">
                  <div className="flex my-auto w-[70%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start my-auto w-[424px]">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Hot Deals
                      </Text>
                      <C02HomepageBoxLayoutProduct
                        className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                        image="images/img_image_230x254.png"
                        text="Green Apple"
                      />
                      <div className="flex flex-col items-center justify-start w-full">
                        <C02HomepageBoxLayoutProduct1
                          className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                          bagone="images/img_bag_white_a700.svg"
                          eyeoneone="images/img_eye1.svg"
                          favoriteone="images/img_favorite.svg"
                        />
                      </div>
                      <C02HomepageBoxLayoutProduct
                        className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                        image="images/img_image_7.png"
                        text="Green Lettuce"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-[424px] z-[1]">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Best Seller
                      </Text>
                      <List
                        className="flex flex-col gap-4 items-center w-full"
                        orientation="vertical"
                      >
                        {c02HomepageBoxLayoutProductPropList.map(
                          (props, index) => (
                            <React.Fragment
                              key={`C02HomepageBoxLayoutProduct${index}`}
                            >
                              <C02HomepageBoxLayoutProduct
                                className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ),
                        )}
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-[424px] z-[1]">
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Top Rated
                    </Text>
                    <List
                      className="flex flex-col gap-4 items-center w-full"
                      orientation="vertical"
                    >
                      {c02HomepageBoxLayoutProductPropList1.map(
                        (props, index) => (
                          <React.Fragment
                            key={`C02HomepageBoxLayoutProduct${index}`}
                          >
                            <C02HomepageBoxLayoutProduct
                              className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ),
                      )}
                    </List>
                  </div>
                </div>
                <C02HomepageBoxLayoutBannar2
                  className="h-[423px] ml-[-88px] my-auto w-[24%] z-[1]"
                  startingat2399={
                    <Text className="font-semibold leading-[120.00%] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center">
                      <span className="text-black-900 font-poppins">
                        Save 37%
                      </span>
                      <span className="text-black-900 font-poppins font-normal">
                        <>
                          {" "}
                          on
                          <br />
                          Every Order
                        </>
                      </span>
                    </Text>
                  }
                />
              </div>
            </div>
          </div>
          <C02HomepageBoxLayoutVideo className="h-[396px] md:h-[456px] mt-[60px] relative w-full" />
          <div className="flex flex-col items-center justify-start mt-14 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase w-auto"
                  size="txtPoppinsMedium14Deeporange500"
                >
                  Team
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
                  size="txtPoppinsSemiBold36"
                >
                  Our Professional Members
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <C02HomepageBoxLayoutTeamcard className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start pb-5 shadow-bs5 w-[24%] md:w-full" />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  {c02HomepageBoxLayoutTeamcard1PropList.map((props, index) => (
                    <React.Fragment
                      key={`C02HomepageBoxLayoutTeamcard1${index}`}
                    >
                      <C02HomepageBoxLayoutTeamcard1
                        className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-start sm:ml-[0] pb-5 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col gap-9 items-center justify-center mb-[671px] mt-[168px] p-[60px] md:px-10 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <Text
                className="text-center text-deep_orange-500 text-sm tracking-[0.28px] uppercase w-auto"
                size="txtPoppinsMedium14Deeporange500"
              >
                Client Testiomial
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
                size="txtPoppinsSemiBold36"
              >
                What our Client Says
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[168px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_56x56.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtPoppinsMedium16Black900"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-center text-red-A700 text-sm w-auto"
                        size="txtPoppinsRegular14RedA700"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating_deep_orange_500.svg"
                    alt="rating"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[186px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_25.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtPoppinsMedium16Black900"
                      >
                        Dianne Russell
                      </Text>
                      <Text
                        className="text-center text-red-A700 text-sm w-auto"
                        size="txtPoppinsRegular14RedA700"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating_deep_orange_500.svg"
                    alt="rating"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[173px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_26.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900 text-center w-auto"
                        size="txtPoppinsMedium16Black900"
                      >
                        Eleanor Pena
                      </Text>
                      <Text
                        className="text-center text-red-A700 text-sm w-auto"
                        size="txtPoppinsRegular14RedA700"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating_deep_orange_500.svg"
                    alt="rating"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[4692px] h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="h-[195px] md:h-[215px] md:px-5 relative w-[1920px] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col md:gap-10 gap-[93px] h-full inset-[0] items-center justify-start m-auto max-w-[1400px] w-full">
              <div className="bg-white-A700 flex flex-row md:gap-10 items-center justify-between max-w-[1400px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
                <Img
                  className="h-[18px] w-[15px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <div className="flex flex-row gap-5 items-center justify-start w-auto">
                  <SelectBox
                    className="text-center text-gray-700 text-xs w-[16%] sm:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-[3px] outline-gray-700 outline-[0.5px] outline w-[7px]"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="eng"
                    options={engOptionsList}
                    isSearchable={false}
                    placeholder="Eng"
                    size="xs"
                  />
                  <SelectBox
                    className="text-center text-gray-700 text-xs w-[16%] sm:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-[3px] outline-gray-700 outline-[0.5px] outline w-[7px]"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="usd"
                    options={usdOptionsList}
                    isSearchable={false}
                    placeholder="USD"
                  />
                  <Line className="bg-gray-300 h-[15px] w-px" />
                  <div className="flex flex-row gap-1 items-start justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-gray-700 text-xs w-auto"
                    >
                      <Text size="txtPoppinsRegular12">Sign In</Text>
                    </a>
                    <Text
                      className="text-gray-700 text-xs w-auto"
                      size="txtPoppinsRegular12"
                    >
                      /
                    </Text>
                    <a
                      href="javascript:"
                      className="text-gray-700 text-xs w-auto"
                    >
                      <Text size="txtPoppinsRegular12">Sign Up</Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-deep_orange-500 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1400px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-start w-auto sm:w-full">
                  <SelectBox
                    className="font-medium text-left text-sm text-white-A700 w-[12%] sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="navlinks"
                    options={navlinksOptionsList}
                    isSearchable={false}
                    placeholder="Home"
                  />
                  <SelectBox
                    className="font-medium text-left text-sm text-white-A700 w-[11%] sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="navlinks_One"
                    options={navlinksOneOptionsList}
                    isSearchable={false}
                    placeholder="Shop"
                    size="xs"
                  />
                  <SelectBox
                    className="font-medium text-left text-sm text-white-A700 w-[12%] sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="navlinks_Two"
                    options={navlinksTwoOptionsList}
                    isSearchable={false}
                    placeholder="Pages"
                    size="xs"
                  />
                  <SelectBox
                    className="font-medium text-left text-sm text-white-A700 w-[10%] sm:w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="navlinks_Three"
                    options={navlinksThreeOptionsList}
                    isSearchable={false}
                    placeholder="Blog"
                    size="xs"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      About Us
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700 w-auto"
                    >
                      <Text size="txtPoppinsMedium14WhiteA700">Contact Us</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-7 w-7"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    (219) 555-0114
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[3px] top-[0] w-full">
              <Img
                className="md:flex-1 h-[85px] sm:h-auto md:ml-[0] ml-[268px] md:mt-0 mt-0.5 object-cover w-[23%] md:w-full"
                src="images/img_traceworkstrademarked_97x454.png"
                alt="traceworkstrade"
              />
              <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start rounded-md w-auto sm:w-full">
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
              <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_favorite.svg"
                  alt="favorite_Two"
                />
                <Line className="bg-blue_gray-100 h-6 w-px" />
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <div className="h-9 md:h-[34px] relative w-9">
                    <Img
                      className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                      src="images/img_bag.svg"
                      alt="bag_Two"
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
          <div className="flex flex-col gap-[33px] items-center justify-start max-w-[1406px] md:px-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[1400px] w-full">
              <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[9px] w-full">
                <div className="flex sm:flex-1 flex-col gap-1 h-[83px] md:h-auto items-start justify-start md:mt-0 my-[29px] w-[449px] sm:w-full">
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
                <div className="h-[52px] ml-28 md:ml-[0] relative w-[39%] md:w-full">
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
                <div className="flex flex-row gap-2 h-10 md:h-auto items-start justify-start ml-10 md:ml-[0] w-[184px]">
                  <Button
                    className="flex h-10 items-center justify-center rounded-[50%] w-10"
                    shape="round"
                    color="deep_orange_500"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_facebook1.svg"
                      alt="facebookOne_One"
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
                      alt="twitterOne_One"
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
                    alt="info_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-quicksand items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1399px] w-full">
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
                  <div className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Food Delivery
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Meat Delivery
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Track Order
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Shipping Details
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtQuicksandSemiBold24"
                  >
                    Useful links
                  </Text>
                  <div className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      About Us
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Conact
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Hot deals
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      Promotions
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtQuicksandMedium16"
                    >
                      New products
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900_0c h-px mt-[39px] w-full" />
              <div className="h-14 md:h-[70px] mt-3.5 relative w-full">
                <div className="absolute bottom-[5%] flex flex-col h-11 md:h-auto inset-x-[0] items-center justify-between max-w-[1406px] mx-auto w-full">
                  <Text
                    className="text-base text-black-900 text-center w-auto"
                    size="txtQuicksandMedium16"
                  >
                    © 2022, All rights reserved
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-7 h-full inset-y-[0] items-center justify-between my-auto p-1.5 right-[3%] w-[237px]">
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_orange_500"
                    size="lg"
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
      </div>
    </>
  );
};

export default HomepageBoxLayoutPage;
