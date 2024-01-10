import React from "react";

import { Img, Text } from "components";

const C03HomepageColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtPoppinsSemiBold32Black900"
          >
            {props?.followusoninstaOne}
          </Text>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between w-full">
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost.png"
              alt="instagrampost"
            />
            <div className="h-[200px] relative w-[200px]">
              <Img
                className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[200px]"
                src="images/img_instagrampost_200x200.png"
                alt="instagrampost_One"
              />
              <Img
                className="absolute h-8 inset-[0] justify-center m-auto w-8"
                alt="icons"
                src={props?.instagramposticons}
              />
            </div>
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost_1.png"
              alt="instagrampost_Two"
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost_2.png"
              alt="instagrampost_Three"
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              alt="instagrampost_Four"
              src={props?.instagrampostimagefour}
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              alt="instagrampost_Five"
              src={props?.instagrampostimagefive}
            />
          </div>
        </div>
      </div>
    </>
  );
};

C03HomepageColumnThree.defaultProps = {
  followusoninstaOne: "Follow us on Instagram",
  instagramposticons: "images/img_icons.svg",
  instagrampostimagefour: "images/img_instagrampost_3.png",
  instagrampostimagefive: "images/img_instagrampost_4.png",
};

export default C03HomepageColumnThree;
