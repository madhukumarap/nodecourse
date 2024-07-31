import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C01HomepageProduct5n from "components/C01HomepageProduct5n";
import C01HomepageProduct5n1 from "components/C01HomepageProduct5n1";
import C01HomepageProduct5n2 from "components/C01HomepageProduct5n2";
import C04HomepageBannar from "components/C04HomepageBannar";
import C04HomepageBannar1 from "components/C04HomepageBannar1";
import C04HomepageBannar2 from "components/C04HomepageBannar2";
import C04HomepageBestdeal from "components/C04HomepageBestdeal";
import C04HomepageProducts from "components/C04HomepageProducts";
import C04HomepageVideo from "components/C04HomepageVideo";
import Footer from "components/Footer";
import Header from "components/Header";

const Homepage2Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[49px] w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-deep_orange-500_3f flex flex-col items-center justify-end mt-[857px] p-[100px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1321px] mt-[108px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-auto"
                  size="txtPoppinsSemiBold40"
                >
                  Introducing Our Products
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center w-auto sm:w-full">
                <Text
                  className="bg-deep_orange-500_3f justify-center pb-[7px] px-3 text-base text-deep_orange-500 text-shadow-ts w-auto"
                  size="txtPoppinsMedium16Deeporange500"
                >
                  All
                </Text>
                <Img
                  className="h-7 w-px"
                  src="images/img_devider.svg"
                  alt="devider_Two"
                />
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsMedium16Gray600"
                >
                  Vegetable
                </Text>
                <Img
                  className="h-7 w-px"
                  src="images/img_devider.svg"
                  alt="devider_Three"
                />
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsMedium16Gray600"
                >
                  Fruit
                </Text>
                <Img
                  className="h-7 w-px"
                  src="images/img_devider.svg"
                  alt="devider_Four"
                />
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsMedium16Gray600"
                >
                  Meat & Fish
                </Text>
                <Img
                  className="h-7 w-px"
                  src="images/img_devider.svg"
                  alt="devider_Five"
                />
                <a
                  href="javascript:"
                  className="text-base text-gray-600 w-auto"
                >
                  <Text size="txtPoppinsMedium16Gray600">View All</Text>
                </a>
              </div>
            </div>
            <C04HomepageProducts className="flex flex-col items-center justify-start w-full" />
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1320px] mt-[100px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <C04HomepageBannar
            className="h-[255px] relative w-full"
            price={
              <Text className="text-base text-justify text-white-A700 w-auto">
                <span className="text-white-A700_cc font-poppins text-sm font-normal">
                  Starting at
                </span>
                <span className="text-white-A700 font-poppins text-sm font-normal">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-xl font-medium">
                  $14.99
                </span>
              </Text>
            }
          />
          <C04HomepageBannar1 className="h-[255px] relative w-full" />
          <C04HomepageBannar2 className="h-[255px] relative w-full" />
        </List>
        <C04HomepageBestdeal className="bg-deep_orange-500_3f flex md:flex-col flex-row gap-[39px] items-center justify-start mt-[100px] pt-8 sm:px-5 px-8 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[93px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-11 items-center justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 text-center"
              size="txtPoppinsSemiBold40Black90001"
            >
              Featured Products
            </Text>
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <C01HomepageProduct5n
                className="md:h-[317px] h-[327px] relative w-full"
                close="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_3.png"
                productname="Fresh Indian Malta"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n2
                className="md:h-[317px] h-[327px] relative w-full"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_7.png"
                productname="Green Lettuce"
                productprice="$9.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_9.png"
                productname="Eggplant"
                productprice="$34.00"
                closeOne="images/img_close_blue_gray_100.svg"
              />
            </List>
          </div>
        </div>
        <div className="h-[1314px] md:h-[1546px] sm:h-[1957px] mt-[99px] md:px-5 relative w-full">
          <div className="absolute bg-deep_orange-500_3f flex flex-col gap-[33px] inset-x-[0] items-center justify-start mx-auto p-[97px] md:px-10 sm:px-5 top-[0] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 text-center"
              size="txtPoppinsSemiBold40Black90001"
            >
              What our Clients Says
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mb-[362px] w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800 w-full"
                      size="txtPoppinsRegular16Green800"
                    >
                      “Aenean et nisl eget eros consectetur vestibulum vel id
                      erat. Aliquam feugiat massa dui. Sed sagittis diam sit
                      amet ante sodales semper. Aliquam commodo lorem laoreet
                      ultricies ele. ”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_64x64.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900_01 text-center w-auto"
                      size="txtPoppinsMedium16Black90001"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800 w-full"
                      size="txtPoppinsRegular16Green800"
                    >
                      “Proin sed neque nec tellus malesuada ultrices eget a
                      justo. Nullam a nibh faucibus, semper risus ac, ultricies
                      est. Maecenas eget purus in enim imperdiet dapibus in ac
                      mi. Fusce faucibus lacus felis”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_36.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900_01 text-center w-auto"
                      size="txtPoppinsMedium16Black90001"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800 w-full"
                      size="txtPoppinsRegular16Green800"
                    >
                      “Nam sed odio diam. Mauris sagittis sapien sed convallis
                      cursus. Proin mattis ultrices urna ac eleifend. Cras vel
                      nisi nec lectus sagittis venenatis. Curabitur laoreet leo
                      sed lorem pulvina”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_37.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900_01 text-center w-auto"
                      size="txtPoppinsMedium16Black90001"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <C04HomepageVideo className="absolute bottom-[0] h-[642px] inset-x-[0] mx-auto w-[69%] md:w-full" />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[191px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[43px] items-center justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900_01 text-center"
              size="txtPoppinsSemiBold40Black90001"
            >
              Latest News
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs13 w-auto hover:w-full sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                    <Img
                      className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                      src="images/img_image_276x376.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtPoppinsMedium20"
                      >
                        23
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900_01 text-lg"
                      size="txtPoppinsMedium18Black90001"
                    >
                      Curabitur porttitor orci eget neque accumsan venenatis.
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Nulla libero lorem, euismod venenatis nibh sed, sodales
                      dictum ex. Etiam nisi augue, malesuada et pulvinar at,
                      posuere eu neque.
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
              <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs13 shadow-bs13 w-auto hover:w-full sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                    <Img
                      className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                      src="images/img_image_38.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700_a2 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtPoppinsMedium20"
                      >
                        23
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900_01 text-lg"
                      size="txtPoppinsMedium18Black90001"
                    >
                      Curabitur porttitor orci eget neque accumsan venenatis.
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.{" "}
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
              <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs13 w-auto hover:w-full sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                    <Img
                      className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                      src="images/img_image_39.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700_a2 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtPoppinsMedium20"
                      >
                        23
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        Jan
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900_01 text-lg"
                      size="txtPoppinsMedium18Black90001"
                    >
                      Curabitur porttitor orci eget neque accumsan venenatis.
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
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
            </List>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[193px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default Homepage2Page;
