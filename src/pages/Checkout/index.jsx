import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
  TextArea,
} from "components";
import C07ShopOneOneBreadcrumbs from "components/C07ShopOneOneBreadcrumbs";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-start mx-auto pb-2.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homesiximage="images/img_home.svg"
            vegetablestext="Shopping Cart"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Checkout"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <div className="h-[706px] md:h-[889px] sm:h-[983px] relative w-[67%] md:w-full">
              <div className="flex flex-col gap-2 h-full items-start justify-start ml-auto mr-[177px] mt-[244px] w-auto">
                <Text
                  className="text-black-900 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Zip Code
                </Text>
                <Button
                  className="!text-red-A700 border border-gray-300 border-solid cursor-pointer min-w-[103px] rounded-md text-base text-center"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  Zip Code
                </Button>
              </div>
              <div className="absolute flex flex-col gap-8 h-full inset-[0] items-center justify-start m-auto w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsMedium24WhiteA700"
                    >
                      Billing Information
                    </Text>
                    <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          First name
                        </Text>
                        <Input
                          name="inputfield"
                          placeholder="Your first name"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="text"
                          shape="round"
                          color="blue_gray_900_02"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Last name
                        </Text>
                        <Input
                          name="inputfield_One"
                          placeholder="Your last name"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="text"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
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
                          name="inputfield_Two"
                          placeholder="Company name"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="text"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-[15px] w-auto md:w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Street Address
                      </Text>
                      <Input
                        name="inputfield_Three"
                        placeholder="Email"
                        className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-700 border-solid w-full"
                        type="email"
                        shape="round"
                        color="blue_gray_900_02"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-[15px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Country / Region
                        </Text>
                        <Input
                          name="inputfield_Four"
                          placeholder="Select"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid flex w-auto"
                          suffix={
                            <Img
                              className="mt-1 mb-[3px] h-4 ml-[35px]"
                              src="images/img_arrowdown_red_900_01.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          States
                        </Text>
                        <Input
                          name="inputfield_Five"
                          placeholder="Selects"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid flex w-auto"
                          suffix={
                            <Img
                              className="mt-1 mb-[3px] h-4 ml-2.5"
                              src="images/img_arrowdown_red_900_01.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                      <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Email
                        </Text>
                        <Input
                          name="inputfield_Six"
                          placeholder="Email Address"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="email"
                          shape="round"
                          color="blue_gray_900_02"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          Phone
                        </Text>
                        <Input
                          name="inputfield_Seven"
                          placeholder="Phone number"
                          className="!placeholder:text-deep_orange-500 !text-deep_orange-500 p-0 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-700 border-solid w-full"
                          type="number"
                          shape="round"
                          color="blue_gray_900_02"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <CheckBox
                      className="!text-gray-400 mt-5 text-left text-sm"
                      inputClassName="border border-gray-700_01 border-solid h-5 mr-[5px] rounded-[3px] w-5"
                      name="shiptoadifferen_One"
                      id="shiptoadifferen_One"
                      label="Ship to a different address"
                      color="blue_gray_900_02"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                </div>
                <Line className="bg-blue_gray-700 h-px w-full" />
                <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsMedium24WhiteA700"
                  >
                    Additional Info
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Order Notes (Optional)
                    </Text>
                    <TextArea
                      className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3.5 rounded-md text-base placeholder:text-deep_orange-500 text-deep_orange-500 text-left w-full"
                      name="inputfield_Eight"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    ></TextArea>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-900_02 border border-blue_gray-700 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-start mb-[126px] p-6 sm:px-5 rounded-lg w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Order Summery
                </Text>
                <List
                  className="flex flex-col items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-1 items-center justify-between my-0 w-[377px] sm:w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_image_8.png"
                        alt="image"
                      />
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Green Capsicum
                      </Text>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        x5
                      </Text>
                    </div>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      $70.00
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-between my-0 w-[377px] sm:w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_image_100x100.png"
                        alt="image"
                      />
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Red Capsicum
                      </Text>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        x1
                      </Text>
                    </div>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      $14.00
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-px items-start justify-start w-auto sm:w-full">
                  <div className="bg-blue_gray-900_02 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      Subtotal:
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      $84.00
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-700 h-px w-full" />
                  <div className="bg-blue_gray-900_02 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsRegular14Gray400"
                    >
                      Shipping:
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      Free
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-700 h-px w-full" />
                  <div className="bg-blue_gray-900_02 flex flex-row items-center justify-between pt-3 w-[376px] sm:w-full">
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtPoppinsRegular16Gray400"
                    >
                      Total:
                    </Text>
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsSemiBold18WhiteA700"
                    >
                      $84.00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-[47%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  Payment Method
                </Text>
                <RadioGroup
                  selectedValue="CashonDelivery"
                  className="flex flex-col gap-2.5 items-start justify-start w-auto"
                  name="method1"
                >
                  <Radio
                    value="CashonDelivery"
                    className="text-gray-400 text-left text-sm"
                    inputClassName="bg-blue_gray-900_02 border border-deep_orange-500 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={true}
                    name="method1"
                    label="Cash on Delivery"
                    id="CashonDelivery"
                  ></Radio>
                  <Radio
                    value="GooglePay"
                    className="text-gray-400 text-left text-sm"
                    inputClassName="bg-blue_gray-900_02 border border-gray-600 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="method1"
                    label="Google Pay"
                    id="GooglePay"
                  ></Radio>
                  <Radio
                    value="AmazonPay"
                    className="text-left text-sm text-white-A700"
                    inputClassName="bg-blue_gray-900_02 border border-gray-600 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="method1"
                    label="Amazon Pay"
                    id="AmazonPay"
                  ></Radio>
                </RadioGroup>
              </div>
              <Button
                className="cursor-pointer font-semibold rounded-[25px] text-base text-center w-[376px]"
                color="deep_orange_500"
                size="lg"
                variant="fill"
              >
                Place Order
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
