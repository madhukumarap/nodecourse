import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    deep_orange_500: "bg-deep_orange-500 text-white-A700",
    white_A700: "bg-white-A700 text-red-A700",
    gray_500_01: "bg-gray-500_01 text-black-900",
    blue_gray_900_02: "bg-blue_gray-900_02 text-gray-500",
    deep_orange_500_3f: "bg-deep_orange-500_3f shadow-bs",
    black_900: "bg-black-900 text-gray-600",
    gray_100: "bg-gray-100 text-black-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
};
const shapes = { square: "rounded-none", round: "rounded-md" };
const sizes = {
  sm: "pb-[35px] pt-[13px] px-[13px]",
  md: "pb-2.5 pt-3.5 px-2.5",
  lg: "pb-[15px] pt-4 px-[15px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_orange_500",
    "white_A700",
    "gray_500_01",
    "blue_gray_900_02",
    "deep_orange_500_3f",
    "black_900",
    "gray_100",
    "gray_900",
  ]),
};

export { Input };
