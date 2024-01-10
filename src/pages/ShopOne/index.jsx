import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SeekBar,
  SelectBox,
  Text,
} from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C07ShopOneOneCategories from "components/C07ShopOneOneCategories";
import C07ShopOneOneProduct from "components/C07ShopOneOneProduct";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const headingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const headingOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const headingTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const headingThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopOnePage = () => {
  const c07ShopOneOneProductPropList = [
    {},
    {
      productname: "Chanise Cabbage",
      productimage: "images/img_image_24.png",
      productprice: "$24.00",
    },
    { productname: "Green Capsicum", productimage: "images/img_image_8.png" },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[23px] w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div
          className="bg-cover bg-no-repeat md:h-[317px] h-[358px] max-w-[1320px] mt-[72px] mx-auto p-[57px] md:px-5 relative rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
        >
          <div className="absolute bg-deep_orange-500 flex flex-col items-center justify-end left-[36%] py-[25px] rounded-[50%] top-[16%] w-[100px]">
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
              size="txtPoppinsSemiBold24WhiteA700"
            >
              56%
            </Text>
            <Text
              className="text-center text-sm text-white-A700_cc tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14WhiteA700cc"
            >
              Off
            </Text>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[5%] my-auto w-[33%]">
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                    size="txtPoppinsMedium14WhiteA700"
                  >
                    Best Deals
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold40WhiteA700"
                  >
                    Sale of the Month
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      00
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Days
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      02
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Hours
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      18
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Mins
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      46
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Secs
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[162px]"
                rightIcon={
                  <Img
                    className="mt-[3px] mb-[5px] ml-3"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-justify text-sm">
                  Shop Now
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[34px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[131px]"
                rightIcon={
                  <Img
                    className="mt-0.5 mb-px ml-3"
                    src="images/img_filter_24px.svg"
                    alt="Filter 24px"
                  />
                }
                shape="round"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-left text-sm">Filter</div>
              </Button>
              <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[205px] w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Sort by:
                </Text>
                <div className="border border-gray-300 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                  <Text
                    className="text-gray-800 text-sm w-auto"
                    size="txtPoppinsRegular14Gray800"
                  >
                    Latest
                  </Text>
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[621px] text-base text-black-900"
                size="txtPoppinsRegular16Black900"
              >
                <span className="text-black-900 font-poppins text-left font-semibold">
                  52
                </span>
                <span className="text-black-900 font-poppins text-left font-normal">
                  {" "}
                </span>
                <span className="text-gray-700 font-poppins text-left font-normal">
                  Results Found
                </span>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="h-[343px] md:h-[375px] relative w-[312px]">
                  <C07ShopOneOneCategories
                    className="flex flex-row gap-2 h-full items-center justify-center pb-2.5 w-auto"
                    vegetablestext="Fresh Fruit (25)"
                    languagetext=" (134)"
                  />
                  <div className="absolute flex flex-col gap-[31px] h-max inset-[0] items-start justify-center m-auto w-full">
                    <SelectBox
                      className="font-medium text-left text-white-A700 text-xl w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-1.5 outline-white-A700 outline-[1px] outline w-3"
                          src="images/img_arrowdown_white_a700_3x7.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="heading"
                      options={headingOptionsList}
                      isSearchable={false}
                      placeholder="All Categories"
                      size="sm"
                    />
                    <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <C07ShopOneOneCategories className="flex flex-row gap-2 items-center justify-center py-2.5 w-auto" />
                        <C07ShopOneOneCategories
                          className="flex flex-row gap-2 items-center justify-center py-2.5 w-auto"
                          vegetablestext="Cooking"
                          languagetext=" (54)"
                        />
                        <C07ShopOneOneCategories
                          className="flex flex-row gap-2 items-center justify-center py-2.5 w-auto"
                          vegetablestext="Snacks"
                          languagetext=" (47)"
                        />
                        <C07ShopOneOneCategories
                          className="flex flex-row gap-2 items-center justify-center py-2.5 w-auto"
                          vegetablestext="Beverages"
                          languagetext=" (43)"
                        />
                        <C07ShopOneOneCategories
                          className="flex flex-row gap-2 items-center justify-center py-2.5 w-auto"
                          vegetablestext="Beauty & Health"
                          languagetext=" (38)"
                        />
                        <C07ShopOneOneCategories
                          className="flex flex-row gap-2 items-center justify-center pb-[26px] pt-2.5 w-auto"
                          vegetablestext="Bread & Bakery"
                          languagetext=" (15)"
                        />
                      </div>
                    </div>
                    <Line className="bg-gray-300 h-px w-full" />
                  </div>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-center pb-6 w-auto">
                    <SelectBox
                      className="!text-white-A700 font-medium text-left text-xl w-full"
                      placeholderClassName="!text-white-A700"
                      indicator={
                        <Img
                          className="h-1.5 outline-black-900 outline-[1px] outline w-3"
                          src="images/img_arrowdown_black_900_6x12.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="heading_One"
                      options={headingOneOptionsList}
                      isSearchable={false}
                      placeholder="Price"
                      shape="square"
                      size="md"
                    />
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <SeekBar
                          inputValue={[0, 0]}
                          trackColors={["#e6e6e6", "#ff6316", "#e6e6e6"]}
                          thumbClassName="h-[18px] border-deep_orange-500 border-2 border-solid bg-white-A700 w-[18px] flex justify-center items-center rounded-[50%]"
                          className="flex h-[18px] rounded-[3px] w-full"
                          trackClassName="h-[5px] flex rounded-[3px] w-full"
                        />{" "}
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          <span className="text-gray-400_02 font-poppins text-left font-normal">
                            Price:
                          </span>
                          <span className="text-white-A700 font-poppins text-left font-medium">
                            {" "}
                            50 — 1,500
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <SelectBox
                      className="font-medium text-left text-xl w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-1.5 outline-black-900 outline-[1px] outline w-3"
                          src="images/img_arrowdown_black_900_6x12.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="heading_Two"
                      options={headingTwoOptionsList}
                      isSearchable={false}
                      placeholder="Rating"
                      shape="square"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    />
                    <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-2 items-center justify-center mr-9 my-0 py-2.5 w-auto">
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[3px] w-5"></div>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starTwo"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starThree"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starFour"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starFive"
                            />
                            <Text
                              className="text-black-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              {" "}
                              5.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center my-0 py-2.5 w-auto">
                          <Button
                            className="flex h-5 items-center justify-center rounded-[3px] w-5"
                            color="deep_orange_500"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-4"
                              src="images/img_checkmark_white_a700.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starTwo"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starThree"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starFour"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFive"
                            />
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              {" "}
                              4.0 & up
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center my-0 py-2.5 w-auto">
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[3px] w-5"></div>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starTwo"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starThree"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFour"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFive"
                            />
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              {" "}
                              3.0 & up
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center my-0 py-2.5 w-auto">
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[3px] w-5"></div>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starTwo"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starThree"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFour"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFive"
                            />
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              {" "}
                              2.0 & up
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center my-0 pb-6 pt-2.5 w-auto">
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[3px] w-5"></div>
                          <div className="flex flex-row items-center justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star1.svg"
                              alt="starOne"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starTwo"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starThree"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFour"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_star5.svg"
                              alt="starFive"
                            />
                            <Text
                              className="text-black-900 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              {" "}
                              1.0 & up
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                </div>
                <div className="flex flex-col items-start justify-center pb-[26px] w-auto">
                  <SelectBox
                    className="!text-white-A700 font-medium text-left text-xl w-full"
                    placeholderClassName="!text-white-A700"
                    indicator={
                      <Img
                        className="h-1.5 outline-black-900 outline-[1px] outline w-3"
                        src="images/img_arrowdown_black_900_6x12.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="heading_Three"
                    options={headingThreeOptionsList}
                    isSearchable={false}
                    placeholder="Popular Tag"
                    shape="square"
                    size="lg"
                  />
                  <div className="flex flex-col items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-center justify-between w-full">
                        <Button
                          className="cursor-pointer min-w-[86px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Healthy
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                          color="deep_orange_500"
                          size="sm"
                          variant="fill"
                        >
                          Low fat
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[110px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Vegetarian
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[96%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[97px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Kid foods
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[94px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Vitamins
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[74px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Bread
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[79%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[68px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Meat
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Snacks
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[65px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Tiffin
                        </Button>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-between w-[97%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[83px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Launch
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[78px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Dinner
                        </Button>
                        <Button
                          className="cursor-pointer min-w-[107px] rounded-[16px] text-center text-sm"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        >
                          Breackfast
                        </Button>
                      </div>
                      <Button
                        className="cursor-pointer min-w-[62px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="sm"
                        variant="fill"
                      >
                        Fruit
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col gap-3 h-[295px] items-center justify-start pb-[180px] rounded-[10px] w-auto"
                  style={{ backgroundImage: "url('images/img_bannar.png')" }}
                >
                  <div className="flex flex-col gap-0.5 items-center justify-center pt-5 w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                      size="txtPoppinsSemiBold32Black900"
                    >
                      <span className="text-deep_orange-500 font-poppins font-semibold">
                        79%
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-deep_orange-500 font-poppins text-2xl font-normal">
                        {" "}
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-black-900 font-poppins text-2xl font-normal">
                        Discount
                      </span>
                    </Text>
                    <Text
                      className="text-base text-center text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      on your first order
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Text
                      className="text-base text-deep_orange-500 w-auto"
                      size="txtPoppinsSemiBold16Deeporange500"
                    >
                      Shop Now
                    </Text>
                    <Img
                      className="h-3 w-[15px]"
                      src="images/img_arrowleft_deep_orange_500.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center pt-5 w-auto">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Sale Products
                  </Text>
                  <List
                    className="flex flex-col gap-4 items-start w-auto"
                    orientation="vertical"
                  >
                    {c07ShopOneOneProductPropList.map((props, index) => (
                      <React.Fragment key={`C07ShopOneOneProduct${index}`}>
                        <C07ShopOneOneProduct
                          className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-row items-start justify-start hover:my-0 my-0 rounded-md hover:shadow-bs3 w-auto"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-3/4 md:w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_42.png"
                    productname="Big Potatos"
                  />
                  <C05HomepageProductx2
                    className="md:h-[397px] h-[407px] relative w-full"
                    image="images/img_image_6.png"
                    productname="Chanise Cabbage"
                  />
                  <C05HomepageProductx
                    className="md:h-[397px] h-[407px] relative w-full"
                    image="images/img_image_21.png"
                    greenapple="Ladies Finger"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_9.png"
                    productname="Eggplant"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_43.png"
                    productname="Fresh Cauliflower"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_44.png"
                    productname="Green Apple"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_8.png"
                    productname="Green Capsicum"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_45.png"
                    productname="Green Chili"
                  />
                  <C05HomepageProductx
                    className="md:h-[397px] h-[407px] relative w-full"
                    image="images/img_image_46.png"
                    sale="Sale"
                    fifty="50%"
                    greenapple="Green Cucumber"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_47.png"
                    productname="Green Littuce"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_48.png"
                    productname="Ladies Finger"
                  />
                  <C05HomepageProductx2
                    className="md:h-[397px] h-[407px] relative w-full"
                    image="images/img_image_49.png"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_50.png"
                    productname="Red Chili"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_51.png"
                    productname="Red Tomato"
                  />
                  <C05HomepageProductx1
                    className="h-[407px] relative w-full"
                    image="images/img_image_52.png"
                    productname="Fresh Mango"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[39px] md:px-10 sm:px-5 px-[618px] w-full">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
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
                alt="arrowleft_One"
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
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                4
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                5
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                ...
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                21
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
        <Footer className="flex items-center justify-center mt-[152px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShopOnePage;
