import React from "react";

import { Button, Datepicker, Img, Input, Line, List, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C17BlogListBlogcard from "components/C17BlogListBlogcard";
import C17BlogListBlogcard1 from "components/C17BlogListBlogcard1";

const BlogListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-10 items-start justify-start mx-auto pb-[47px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex flex-col relative w-full">
              <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1918px] mx-auto md:px-10 sm:px-5 px-[300px] py-3 shadow-bs7 w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[18px] w-[15px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-center text-gray-700 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Eng
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_arrowdown_gray_700.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-1.5 items-center justify-start">
                          <Text
                            className="text-center text-gray-700 text-xs w-auto"
                            size="txtPoppinsRegular12"
                          >
                            USD
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_arrowdown_gray_700.svg"
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
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">Sign In</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">/</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-gray-700 text-xs"
                            >
                              <Text size="txtPoppinsRegular12">Sign Up</Text>
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-6px] mx-auto pb-2 px-2 w-full z-[1]">
                <Img
                  className="md:flex-1 h-[85px] sm:h-auto md:ml-[0] ml-[78px] object-cover w-[24%] md:w-full"
                  src="images/img_traceworkstrademarked_97x454.png"
                  alt="traceworkstrade"
                />
                <div className="border border-gray-300 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[185px] md:mt-0 mt-[30px] rounded-md w-auto sm:w-full">
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
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] md:mt-0 mt-[33px] w-auto">
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
                        src="images/img_bag.svg"
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
            <div className="bg-deep_orange-500 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1918px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
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
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            languagetext="Blog"
          />
          <div className="flex flex-col items-center justify-start max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
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
                <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[315px] w-auto">
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
                  className="md:ml-[0] ml-[511px] text-base text-black-900"
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
                <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start pb-7 w-auto sm:w-full">
                    <Input
                      name="inputfield"
                      placeholder="Search..."
                      className="p-0 placeholder:text-red-A700 text-base text-left w-full"
                      wrapClassName="border border-gray-300 border-solid flex w-full"
                      prefix={
                        <Img
                          className="mt-px mb-0.5 h-5 mr-2"
                          src="images/img_search.svg"
                          alt="Search 1"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Top Categories
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Fresh Fruit
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (134)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Vegetables
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (150)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Cooking
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (54)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Snacks
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (47)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (43)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Beauty & Health
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (38)
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Bread & Bakery
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        {" "}
                        (15)
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Popular Tag
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
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
                          <Button
                            className="cursor-pointer min-w-[74px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Bread
                          </Button>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between w-[97%] md:w-full">
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
                        <div className="flex flex-row gap-2 items-center justify-start w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer min-w-[68px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Meat
                          </Button>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Our Gallery
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-2 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery.png"
                            alt="gallery"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_100x100.png"
                            alt="gallery_One"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_1.png"
                            alt="gallery_Two"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_2.png"
                            alt="gallery_Three"
                          />
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_3.png"
                            alt="gallery"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_4.png"
                            alt="gallery_One"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_5.png"
                            alt="gallery_Two"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_6.png"
                            alt="gallery_Three"
                          />
                        </div>
                      </List>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px w-full" />
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pt-5 w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-black-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Recently Added
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-4 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start pb-1 w-auto sm:w-full">
                        <Img
                          className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                          src="images/img_image_77x100.png"
                          alt="image"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-black-900"
                            size="txtPoppinsMedium16Black900"
                          >
                            Curabitur porttitor orci eget nequ accumsan.
                          </Text>
                          <Datepicker
                            className="date"
                            placeholder="Apr 25, 2021"
                          ></Datepicker>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start py-1 w-auto sm:w-full">
                        <Img
                          className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                          src="images/img_gallery_5.png"
                          alt="image"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-black-900"
                            size="txtPoppinsMedium16Black900"
                          >
                            Donec mattis arcu faucibus suscipit viverra.
                          </Text>
                          <Datepicker
                            className="date"
                            placeholder="Apr 25, 2021"
                          ></Datepicker>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start pt-1 w-auto sm:w-full">
                        <Img
                          className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                          src="images/img_image_55.png"
                          alt="image"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-black-900"
                            size="txtPoppinsMedium16Black900"
                          >
                            Quisque posuere tempus rutrum. Integer velit ex.
                          </Text>
                          <Datepicker
                            className="date"
                            placeholder="Apr 25, 2021"
                          ></Datepicker>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <C17BlogListBlogcard className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full" />
                      <C17BlogListBlogcard1 className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 shadow-bs6 hover:w-full w-full" />
                      <C17BlogListBlogcard
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full"
                        image="images/img_image_57.png"
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_58.png"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto rounded-[50%] shadow-bs16 w-16"
                            shape="circle"
                            color="white_A700"
                            size="3xl"
                            variant="fill"
                          >
                            <Img
                              src="images/img_vector_deep_orange_500.svg"
                              alt="vector"
                            />
                          </Button>
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_tag1.svg"
                                  alt="tagOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  Food
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_user31.svg"
                                  alt="userThirtyOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  By Admin
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray700"
                                >
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-deep_orange-500 w-auto"
                              size="txtPoppinsSemiBold16Deeporange500"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft_deep_orange_500.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C17BlogListBlogcard
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full"
                        image="images/img_image_59.png"
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_60.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_tag1.svg"
                                  alt="tagOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  Food
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_user31.svg"
                                  alt="userThirtyOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  By Admin
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray700"
                                >
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-deep_orange-500 w-auto"
                              size="txtPoppinsSemiBold16Deeporange500"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft_deep_orange_500.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C17BlogListBlogcard
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full"
                        image="images/img_image_61.png"
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_62.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_tag1.svg"
                                  alt="tagOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  Food
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_user31.svg"
                                  alt="userThirtyOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  By Admin
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray700"
                                >
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-deep_orange-500 w-auto"
                              size="txtPoppinsSemiBold16Deeporange500"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft_deep_orange_500.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C17BlogListBlogcard
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full"
                        image="images/img_image_63.png"
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs6 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_64.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-auto">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_tag1.svg"
                                  alt="tagOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  Food
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_user31.svg"
                                  alt="userThirtyOne"
                                />
                                <Text
                                  className="text-gray-800 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray800"
                                >
                                  By Admin
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Img
                                  className="h-[18px] w-[18px]"
                                  src="images/img_bookmark.svg"
                                  alt="bookmark"
                                />
                                <Text
                                  className="text-gray-700 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray700"
                                >
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-deep_orange-500 w-auto"
                              size="txtPoppinsSemiBold16Deeporange500"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft_deep_orange_500.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[562px] w-full">
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
        <div className="flex flex-col items-center pl-0.5 w-full">
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-col gap-9 items-center justify-center w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[38px] sm:px-5 w-full">
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-auto sm:w-full">
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
                  <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                    <Input
                      name="inputfield_One"
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
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start ml-10 md:ml-[0] mr-[259px] w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="round"
                      color="deep_orange_500"
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
                        src="images/img_twitter1.svg"
                        alt="twitterOne"
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
                      alt="info"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-quicksand gap-[35px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 h-[227px] md:h-auto items-start justify-between max-w-[1910px] w-full">
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
                    <ul className="flex flex-col gap-[15px] h-[125px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Food Delivery</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Meat Delivery</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Track Order</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">
                            Shipping Details
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-9 h-[227px] md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtQuicksandSemiBold24"
                    >
                      Useful links
                    </Text>
                    <ul className="flex flex-col gap-[15px] h-[161px] md:h-auto items-start justify-between w-auto md:w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">About Us</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Conact</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Hot deals</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">Promotions</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-black-900"
                        >
                          <Text size="txtQuicksandMedium16">New products</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[62px] sm:h-[76px] relative w-full">
                  <Line className="bg-black-900_0c h-0.5 mt-[5px] mx-auto w-full" />
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 md:h-auto h-full inset-[0] items-center justify-between m-auto max-w-[1918px] w-full">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtQuicksandMedium16"
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

export default BlogListPage;
