import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[22px]",
};
const variants = {
  fill: {
    red_400_33: "bg-red-400_33 text-deep_orange-500",
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    white_A700: "bg-white-A700 text-gray-600",
    blue_gray_900_02: "bg-blue_gray-900_02",
    deep_orange_500_3f: "bg-deep_orange-500_3f",
    green_500_19: "bg-green-500_19 text-deep_orange-500",
    gray_900: "bg-gray-900 text-gray-400",
    deep_orange_A400: "bg-deep_orange-A400 text-white-A700",
    green_700_19: "bg-green-700_19",
    green_700_33: "bg-green-700_33 text-deep_orange-500",
    black_900: "bg-black-900",
    gray_300: "bg-gray-300 text-deep_orange-500",
    green_A700_19: "bg-green-A700_19",
    gray_100: "bg-gray-100 text-black-900",
    deep_orange_500: "bg-deep_orange-500 text-white-A700",
  },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "p-3",
  xl: "p-4",
  "2xl": "p-[19px]",
  "3xl": "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_400_33",
    "blue_gray_900_01",
    "white_A700",
    "blue_gray_900_02",
    "deep_orange_500_3f",
    "green_500_19",
    "gray_900",
    "deep_orange_A400",
    "green_700_19",
    "green_700_33",
    "black_900",
    "gray_300",
    "green_A700_19",
    "gray_100",
    "deep_orange_500",
  ]),
};

export { Button };
