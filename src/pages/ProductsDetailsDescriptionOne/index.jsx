import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import C10ProductsDetailsDescriptionQuantity from "components/C10ProductsDetailsDescriptionQuantity";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const ProductsDetailsDescriptionOnePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
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
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                      size="txtPoppinsSemiBold36WhiteA700"
                    >
                      Chinese Cabbage
                    </Text>
                    <Button
                      className="cursor-pointer min-w-[71px] rounded text-center text-sm"
                      color="gray_300"
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
                        className="text-gray-300 text-sm w-auto"
                        size="txtPoppinsRegular14Gray300"
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
                        className="text-gray-300 text-sm w-auto"
                        size="txtPoppinsMedium14Gray300"
                      >
                        SKU:
                      </Text>
                      <Text
                        className="text-gray-300 text-sm w-auto"
                        size="txtPoppinsRegular14Gray300"
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
              <div className="bg-black-900 border border-black-900 border-solid flex md:flex-col flex-row gap-3 items-center justify-center py-[18px] shadow-bs7 w-auto md:w-full">
                <C10ProductsDetailsDescriptionQuantity className="bg-black-900 border border-gray-300 border-solid flex flex-row items-center justify-between p-2 rounded-[25px] w-auto" />
                <Button
                  className="cursor-pointer flex items-center justify-center rounded-[25px] w-[447px]"
                  rightIcon={
                    <div className="h-[15px] ml-4 w-[15px] outline-black-900 outline-[0.5px] outline my-1">
                      <Img
                        className="h-[15px]"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                    </div>
                  }
                  color="deep_orange_500"
                  size="lg"
                  variant="fill"
                >
                  <div className="!text-black-900 font-semibold text-base text-left">
                    Add to Cart
                  </div>
                </Button>
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  shape="circle"
                  color="gray_300"
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
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsMedium14WhiteA700"
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
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsMedium14WhiteA700"
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
                    className="text-sm text-white-A700 underline w-auto"
                    size="txtPoppinsRegular14WhiteA700"
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-row items-start justify-start md:px-10 sm:px-5 px-[689px] shadow-bs7 w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                  <Button
                    className="!text-black-900 cursor-pointer font-medium min-w-[132px] shadow-bs15 text-base text-center"
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
                    className="cursor-pointer font-medium min-w-[196px] text-base text-center"
                    shape="square"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Customer Feedback
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1320px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="leading-[150.00%] text-sm text-white-A700"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    <>
                      Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                      imperdiet at posuere ac, viverra at mauris. Maecenas
                      tincidunt ligula a sem vestibulum pharetra. Maecenas
                      auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam
                      tincidunt metus vel dui interdum sollicitudin. Mauris sem
                      ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
                      et condimentum arcu, id molestie tellus. Nulla facilisi.
                      Nam scelerisque vitae justo a convallis. Morbi urna ipsum,
                      placerat quis commodo quis, egestas elementum leo. Donec
                      convallis mollis enim. Aliquam id mi quam. Phasellus nec
                      fringilla elit.
                      <br />
                      <br />
                      Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                      dui. Sed iaculis, metus faucibus elementum tincidunt,
                      turpis mi viverra velit, pellentesque tristique neque mi
                      eget nulla. Proin luctus elementum neque et pharetra.{" "}
                    </>
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-auto md:w-full">
                    <CheckBox
                      className="!text-white-A700 sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="100goffreshleav_One"
                      id="100goffreshleav_One"
                      label="100 g of fresh leaves provides."
                      shape="round"
                      color="deep_orange_500"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="!text-white-A700 sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="aliquamacestat"
                      id="aliquamacestat"
                      label="Aliquam ac est at augue volutpat elementum."
                      shape="round"
                      color="deep_orange_500"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="!text-white-A700 sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="quisquenecenim"
                      id="quisquenecenim"
                      label="Quisque nec enim eget sapien molestie."
                      shape="round"
                      color="deep_orange_500"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="!text-white-A700 sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="proinconvallis"
                      id="proinconvallis"
                      label="Proin convallis odio volutpat finibus posuere."
                      shape="round"
                      color="deep_orange_500"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[648px] md:max-w-full text-sm text-white-A700"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Cras et diam maximus, accumsan sapien et, sollicitudin
                    velit. Nulla blandit eros non turpis lobortis iaculis at ut
                    massa.{" "}
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[41%] md:w-full">
                  <div className="h-[300px] relative w-full">
                    <Img
                      className="h-[300px] m-auto object-cover rounded-md w-full"
                      src="images/img_image_300x536.png"
                      alt="image_Six"
                    />
                    <Button
                      className="absolute flex h-[50px] inset-[0] items-center justify-center m-auto rounded-[50%] w-[50px]"
                      shape="circle"
                      color="deep_orange_500"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Three"
                      />
                    </Button>
                  </div>
                  <div className="bg-deep_orange-500 flex sm:flex-col flex-row gap-[30px] items-center justify-between px-5 py-6 rounded-md w-[537px] sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_pricetag1_black_900.svg"
                        alt="pricetagOne"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-center w-auto">
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          64% Discount
                        </Text>
                        <Text
                          className="text-[13px] text-black-900 w-auto"
                          size="txtPoppinsRegular13Black900"
                        >
                          Save your 64% money with us
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_leaf1_black_900.svg"
                        alt="leafOne"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-center w-auto">
                        <Text
                          className="text-black-900 text-sm w-auto"
                          size="txtPoppinsMedium14"
                        >
                          100% Organic
                        </Text>
                        <Text
                          className="text-[13px] text-black-900 w-auto"
                          size="txtPoppinsRegular13Black900"
                        >
                          100% Organic Vegetables
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default ProductsDetailsDescriptionOnePage;
