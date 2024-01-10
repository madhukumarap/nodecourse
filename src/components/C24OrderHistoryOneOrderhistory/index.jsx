import React from "react";

import { Text } from "components";

const C24OrderHistoryOneOrderhistory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-blue_gray-900_01 text-sm w-auto"
            size="txtPoppinsRegular14Bluegray90001"
          >
            {props?.dynamictext}
          </Text>
          <Text
            className="text-blue_gray-900_01 text-sm w-auto"
            size="txtPoppinsRegular14Bluegray90001"
          >
            {props?.dynamictext1}
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[130px] text-blue_gray-900_01 text-sm"
          size="txtPoppinsRegular14Bluegray90001"
        >
          {props?.dynamictext2}
        </Text>
        <Text
          className="ml-36 md:ml-[0] text-blue_gray-900_01 text-sm"
          size="txtPoppinsRegular14Bluegray90001"
        >
          {props?.dynamictext3}
        </Text>
        <Text
          className="md:ml-[0] ml-[125px] md:mt-0 mt-0.5 text-blue_gray-900_01 text-sm"
          size="txtPoppinsRegular14Bluegray90001"
        >
          {props?.dynamictext4}
        </Text>
        <Text
          className="md:ml-[0] ml-[106px] text-deep_orange-500 text-sm"
          size="txtPoppinsMedium14Deeporange500"
        >
          {props?.dynamictext5}
        </Text>
      </div>
    </>
  );
};

C24OrderHistoryOneOrderhistory.defaultProps = {
  dynamictext: "#",
  dynamictext1: "3933",
  dynamictext2: "4 April, 2021",
  dynamictext3: "$135.00 (5 Products)",
  dynamictext4: "Processing",
  dynamictext5: "View Details",
};

export default C24OrderHistoryOneOrderhistory;
