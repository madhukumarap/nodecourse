import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C10ProductsDetailsDescriptionQuantity from "components/C10ProductsDetailsDescriptionQuantity";
import Footer from "components/Footer";
import Header from "components/Header";

const ProductDetailCustomerFeedbackOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          vectorimage="images/img_vector_red_a700.svg"
          categorytext="Category"
          vectoroneimage="images/img_vector_red_a700.svg"
          vegetablestext="Vegetables"
          vectortwoimage="images/img_vector_red_a700.svg"
        />
        <div className="flex flex-col items-center justify-start mt-8 w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 w-1/2 md:w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex flex-col gap-14 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_red_a700_24x24.svg"
                    alt="arrowdown_Six"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage.png"
                        alt="productimage"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage_90x80.png"
                        alt="productimage_One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage_1.png"
                        alt="productimage_Two"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[3px] rounded-br-[3px] w-full"
                        src="images/img_productimage_2.png"
                        alt="productimage_Three"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_red_a700_24x24.svg"
                    alt="arrowdown_Seven"
                  />
                </div>
                <Img
                  className="sm:flex-1 h-[556px] md:h-auto object-cover w-[556px] sm:w-full"
                  src="images/img_image_6.png"
                  alt="productimage_Four"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                      size="txtPoppinsSemiBold36"
                    >
                      Chinese Cabbage
                    </Text>
                    <Button
                      className="cursor-pointer min-w-[71px] rounded text-center text-sm"
                      color="green_700_33"
                      size="xs"
                      variant="fill"
                    >
                      In Stock
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
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
                        className="text-gray-700 text-sm w-auto"
                        size="txtPoppinsRegular14Gray700"
                      >
                        {" "}
                        4 Review
                      </Text>
                    </div>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsMedium14Gray400"
                    >
                      •
                    </Text>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-900_01 text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray90001"
                      >
                        SKU:
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtPoppinsRegular14Gray700"
                      >
                        2,51,594
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                      className="line-through text-gray-400 text-xl w-auto"
                      size="txtPoppinsRegular20"
                    >
                      $48.00
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-deep_orange-500 sm:text-xl w-auto"
                      size="txtPoppinsMedium24Deeporange500"
                    >
                      $17.28
                    </Text>
                  </div>
                  <Text
                    className="bg-red-400_19 justify-center px-2.5 py-0.5 rounded-[13px] text-deep_orange-500 text-sm w-auto"
                    size="txtPoppinsMedium14Deeporange500"
                  >
                    64% Off
                  </Text>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[648px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Brand:
                    </Text>
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col font-dancingscript h-14 items-center justify-center p-[7px] rounded w-14">
                      <Img
                        className="h-3 mt-[7px]"
                        src="images/img_user_green_800_01.svg"
                        alt="user"
                      />
                      <Text
                        className="my-0.5 text-[13px] text-gray-700_02"
                        size="txtDancingScriptBold13"
                      >
                        farmary
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Share item:
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
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
                        alt="user_One"
                      />
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_info.svg"
                        alt="info"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[568px] md:max-w-full text-gray-600 text-sm"
                  size="txtPoppinsRegular14Gray600"
                >
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.{" "}
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 flex md:flex-col flex-row gap-3 items-center justify-center py-[18px] shadow-bs7 w-auto md:w-full">
                <C10ProductsDetailsDescriptionQuantity className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-2 rounded-[25px] w-auto" />
                <Button
                  className="cursor-pointer flex items-center justify-center rounded-[25px] w-[447px]"
                  rightIcon={
                    <div className="h-[15px] ml-4 w-[15px] outline-white-A700 outline-[0.5px] outline my-1">
                      <Img
                        className="h-[15px]"
                        src="images/img_bag_white_a700.svg"
                        alt="bag"
                      />
                    </div>
                  }
                  color="deep_orange_500"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-semibold text-base text-left">
                    Add to Cart
                  </div>
                </Button>
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  shape="circle"
                  color="green_700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_favorite_deep_orange_500.svg"
                    alt="favorite_One"
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Category:
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Vegetables
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Tag:
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Vegetables
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Healthy
                  </Text>
                  <Text
                    className="text-black-900 text-sm underline w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Chinese
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Cabbage
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Green Cabbage
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[41px] justify-start w-full">
            <div className="bg-white-A700 flex flex-row items-start justify-start md:px-10 sm:px-5 px-[689px] shadow-bs7 w-auto md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[132px] text-base text-center"
                  shape="square"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  Descriptions
                </Button>
                <Button
                  className="cursor-pointer font-medium min-w-[214px] text-base text-center"
                  shape="square"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  Additional Information
                </Button>
                <Button
                  className="!text-black-900 cursor-pointer font-medium min-w-[196px] shadow-bs15 text-base text-center"
                  shape="square"
                  color="white_A700"
                  size="xl"
                  variant="fill"
                >
                  Customer Feedback
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[300px] md:px-5 w-2/5 md:w-full">
              <List
                className="flex flex-col gap-5 items-start w-auto"
                orientation="vertical"
              >
                <div className="flex flex-col gap-3 items-start justify-start my-0 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                      src="images/img_image_41x41.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start ml-3 md:ml-[0] w-[119px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        Kristin Watson
                      </Text>
                      <Img
                        className="h-4 w-20"
                        src="images/img_rating.svg"
                        alt="rating"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[516px] md:mt-0 mt-[11px] text-red-A700 text-right text-sm"
                      size="txtPoppinsRegular14RedA700"
                    >
                      2 min ago
                    </Text>
                  </div>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Duis at ullamcorper nulla, eu dictum eros.
                  </Text>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-col gap-3 items-start justify-start my-0 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Button
                      className="flex h-[41px] items-center justify-center rounded-[20px] w-[41px]"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[27px]"
                        src="images/img_user1.svg"
                        alt="userOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-0.5 items-start justify-start ml-3 md:ml-[0] w-[106px]">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        Jane Cooper
                      </Text>
                      <Img
                        className="h-4 w-20"
                        src="images/img_close_blue_gray_100.svg"
                        alt="close"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[520px] md:mt-0 mt-[11px] text-red-A700 text-right text-sm"
                      size="txtPoppinsRegular14RedA700"
                    >
                      30 Apr, 2021
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[760px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    <>
                      Keep the soil evenly moist for the healthiest growth. If
                      the sun gets too hot, Chinese cabbage tends to
                      &quot;bolt&quot; or go to seed; in long periods of heat,
                      some kind of shade may be helpful. Watch out for snails,
                      as they will harm the plants.
                    </>
                  </Text>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-col gap-3 items-start justify-start my-0 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                      src="images/img_image_53.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start ml-3 md:ml-[0] w-auto">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        Jacob Jones
                      </Text>
                      <Img
                        className="h-4 w-20"
                        src="images/img_rating.svg"
                        alt="rating"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[546px] md:mt-0 mt-[11px] text-red-A700 text-right text-sm"
                      size="txtPoppinsRegular14RedA700"
                    >
                      2 min ago
                    </Text>
                  </div>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia
                    lacus.
                  </Text>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <div className="flex flex-col gap-3 items-start justify-start my-0 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[41px] md:h-auto rounded-[50%] w-[41px]"
                      src="images/img_image_54.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start ml-3 md:ml-[0] w-auto">
                      <Text
                        className="text-black-900 text-sm w-auto"
                        size="txtPoppinsMedium14"
                      >
                        Ralph Edwards
                      </Text>
                      <Img
                        className="h-4 w-20"
                        src="images/img_rating.svg"
                        alt="rating"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[531px] md:mt-0 mt-[11px] text-red-A700 text-right text-sm"
                      size="txtPoppinsRegular14RedA700"
                    >
                      2 min ago
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[760px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    <>
                      200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds
                      Heirloom Non-GMO Productive Brassica rapa VAR. chinensis,
                      a.k.a. Canton&#39;s Choice, Bok Choi, from USA
                    </>
                  </Text>
                </div>
              </List>
              <Button
                className="cursor-pointer font-semibold min-w-[138px] text-center text-sm"
                shape="round"
                color="green_500_19"
                size="lg"
                variant="fill"
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1320px] mt-[74px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-between max-w-[1320px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
              size="txtPoppinsSemiBold32Black900"
            >
              Related Products
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              sale="Sale"
              fifty="50%"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_43.png"
            />
            <C05HomepageProductx2 className="md:h-[397px] h-[407px] relative w-full" />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              image="images/img_image_302x302.png"
              productname="Ladies Finger"
            />
          </List>
        </div>
        <Footer className="flex items-center justify-center mt-[79px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductDetailCustomerFeedbackOnePage;
