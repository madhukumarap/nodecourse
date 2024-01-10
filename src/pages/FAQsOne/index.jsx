import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Header1 from "components/Header1";

const FAQsOnePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto py-[5px] w-full">
        <div className="flex flex-col md:gap-10 gap-20 justify-start mb-[523px] w-full">
          <div className="h-[310px] md:px-5 relative w-full">
            <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center mb-[-5px] mx-auto w-full z-[1]" />
            <C07ShopOneOneBreadcrumbs
              className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end mt-auto mx-auto p-[45px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
              homesiximage="images/img_home.svg"
              vectortwoimage="images/img_vector_gray_600.svg"
              languagetext="Faqs"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-center justify-end md:ml-[0] ml-[300px] md:px-5 w-[77%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[45%] md:w-full">
              <Text
                className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-[83%] sm:w-full"
                size="txtPoppinsSemiBold48WhiteA700"
              >
                Welcome, Let’s Talk About Our Ecobazar
              </Text>
              <div className="flex flex-col items-center justify-start mt-8 w-full">
                <Input
                  name="timeZone"
                  placeholder="In elementum est a ante sodales iaculis."
                  className="!placeholder:text-deep_orange-500 !text-deep_orange-500 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-deep_orange-500 border-solid flex rounded-tl-md rounded-tr-md w-auto md:w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-gray-900 p-2.5 rounded-[50%]">
                      <Img
                        className="h-3 my-auto"
                        src="images/img_plus1.svg"
                        alt="Plus"
                      />
                    </div>
                  }
                  color="blue_gray_900_02"
                  size="md"
                  variant="fill"
                ></Input>
                <div className="bg-blue_gray-900_02 border border-deep_orange-500 border-solid flex flex-col items-start justify-start p-4 rounded-bl-md rounded-br-md w-auto md:w-full">
                  <Text
                    className="leading-[150.00%] max-w-[616px] md:max-w-full text-gray-100_01 text-sm"
                    size="txtPoppinsRegular14Gray10001"
                  >
                    <>
                      Morbi porttitor ligula in nunc varius sagittis. Proin dui
                      nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                      ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                      tellus at accumsan. Donec a eros non massa vulputate
                      ornare. Vivamus ornare commodo ante, at commodo felis
                      congue vitae.
                    </>
                  </Text>
                </div>
              </div>
              <Input
                name="faqs"
                placeholder="Etiam lobortis massa eu nibh tempor elementum."
                className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex mt-[13px] w-auto md:w-full"
                suffix={
                  <div className="h-8 ml-[35px] w-8 bg-blue_gray-900_02 p-2.5 rounded-[50%] flex justify-center items-center">
                    <Img
                      className="h-3 my-auto"
                      src="images/img_plus1.svg"
                      alt="plus 1"
                    />
                  </div>
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="timeZone_One"
                placeholder="In elementum est a ante sodales iaculis."
                className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex mt-3 w-auto md:w-full"
                suffix={
                  <div className="h-8 ml-[35px] w-8 bg-blue_gray-900_02 p-2.5 rounded-[50%] flex justify-center items-center">
                    <Img
                      className="h-3 my-auto"
                      src="images/img_plus1.svg"
                      alt="plus 1"
                    />
                  </div>
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="faqs_One"
                placeholder="Aenean quis quam nec lacus semper dignissim."
                className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex mt-3 w-auto md:w-full"
                suffix={
                  <div className="h-8 ml-[35px] w-8 bg-blue_gray-900_02 p-2.5 rounded-[50%] flex justify-center items-center">
                    <Img
                      className="h-3 my-auto"
                      src="images/img_plus1.svg"
                      alt="plus 1"
                    />
                  </div>
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="faqs_Two"
                placeholder="Nulla tincidunt eros id tempus accumsan."
                className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                wrapClassName="flex mt-3 w-auto md:w-full"
                suffix={
                  <div className="h-8 ml-[35px] w-8 bg-blue_gray-900_02 p-2.5 rounded-[50%] flex justify-center items-center">
                    <Img
                      className="h-3 my-auto"
                      src="images/img_plus1.svg"
                      alt="plus 1"
                    />
                  </div>
                }
                shape="round"
                color="gray_900"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <Img
              className="h-[808px] sm:h-auto object-cover w-[51%] md:w-full"
              src="images/img_image_808x741.png"
              alt="image_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsOnePage;
