import React from "react";

import { Text } from "components";

const C07ShopOneOneCategories = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-deep_orange-500 border-solid flex flex-col h-5 items-center justify-start p-1 rounded-[50%] w-5">
          {!!props?.userimage ? (
            <div className="bg-deep_orange-500 h-3 rounded-[50%] w-3"></div>
          ) : null}
        </div>
        <div className="flex flex-row items-start justify-start w-auto">
          <Text
            className="text-black-900 text-sm w-auto"
            size="txtPoppinsRegular14"
          >
            {props?.vegetablestext}
          </Text>
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.languagetext}
          </Text>
        </div>
      </div>
    </>
  );
};

C07ShopOneOneCategories.defaultProps = {
  vegetablestext: "Vegetables",
  languagetext: " (150)",
};

export default C07ShopOneOneCategories;
