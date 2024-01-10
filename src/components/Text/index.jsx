import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold56WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium16Black90001: "font-medium font-poppins",
  txtPoppinsRegular18Black900: "font-normal font-poppins",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular14Bluegray90001: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular24WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular16Deeporange500: "font-normal font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsSemiBold18Deeporange500: "font-poppins font-semibold",
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray100: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtQuicksandSemiBold24: "font-quicksand font-semibold",
  txtPoppinsRegular16Gray300: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular12WhiteA700cc: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsRegular14Gray700: "font-normal font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtQuicksandMedium16WhiteA700: "font-medium font-quicksand",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Gray700: "font-normal font-poppins",
  txtPoppinsRegular14Gray300: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsMedium14Gray600: "font-medium font-poppins",
  txtPoppinsRegular14Gray10001: "font-normal font-poppins",
  txtPoppinsRegular18Gray700: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA70099: "font-medium font-poppins",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtPoppinsSemiBold40WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular20Gray600: "font-normal font-poppins",
  txtPoppinsMedium12Gray800: "font-medium font-poppins",
  txtPoppinsRegular14WhiteA700a2: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA70090: "font-normal font-poppins",
  txtPoppinsSemiBold24Deeporange500: "font-poppins font-semibold",
  txtPoppinsRegular16Bluegray400: "font-normal font-poppins",
  txtPoppinsRegular24WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular24WhiteA70087: "font-normal font-poppins",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsMedium12DeeporangeA400: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular16Green900: "font-normal font-poppins",
  txtPoppinsRegular20Gray60001: "font-normal font-poppins",
  txtPoppinsRegular13Black900: "font-normal font-poppins",
  txtPoppinsSemiBold56Black900: "font-poppins font-semibold",
  txtPoppinsRegular14DeeporangeA400: "font-normal font-poppins",
  txtPoppinsRegular14Gray60001: "font-normal font-poppins",
  txtPoppinsSemiBold14WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsRegular16RedA700: "font-normal font-poppins",
  txtPoppinsSemiBold32Deeporange500: "font-poppins font-semibold",
  txtPoppinsRegular12WhiteA70099: "font-normal font-poppins",
  txtPoppinsRegular14Gray800: "font-normal font-poppins",
  txtPoppinsMedium16Gray300: "font-medium font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsMedium14Bluegray90001: "font-medium font-poppins",
  txtPoppinsRegular14Gray400: "font-normal font-poppins",
  txtPoppinsSemiBold40Gray300: "font-poppins font-semibold",
  txtDancingScriptBold13: "font-bold font-dancingscript",
  txtPoppinsSemiBold36WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular12Gray600: "font-normal font-poppins",
  txtPoppinsRegular18WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold32Black90001: "font-poppins font-semibold",
  txtPoppinsRegular14Deeporange500: "font-normal font-poppins",
  txtPoppinsRegular14Bluegray10001: "font-normal font-poppins",
  txtPoppinsRegular12WhiteA70087: "font-normal font-poppins",
  txtPoppinsMedium14DeeporangeA400: "font-medium font-poppins",
  txtPoppinsSemiBold32Black900: "font-poppins font-semibold",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium14WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular16Green800: "font-normal font-poppins",
  txtPoppinsRegular16Bluegray90001: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsSemiBold56: "font-poppins font-semibold",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtPoppinsSemiBold40Black90001: "font-poppins font-semibold",
  txtPoppinsRegular18Deeporange500: "font-normal font-poppins",
  txtPoppinsSemiBold16Deeporange500: "font-poppins font-semibold",
  txtPoppinsMedium14Gray60001: "font-medium font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsRegular11Gray40001: "font-normal font-poppins",
  txtPoppinsMedium10RedA700: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsMedium18Black90001: "font-medium font-poppins",
  txtSegoeScript16WhiteA700: "font-normal font-segoescript",
  txtPoppinsRegular15WhiteA700: "font-normal font-poppins",
  txtPoppinsMedium24WhiteA700: "font-medium font-poppins",
  txtPoppinsRegular14Gray500: "font-normal font-poppins",
  txtPoppinsRegular16Gray500: "font-normal font-poppins",
  txtPoppinsRegular24RedA700: "font-normal font-poppins",
  txtPoppinsMedium14RedA700: "font-medium font-poppins",
  txtPoppinsMedium12RedA700: "font-medium font-poppins",
  txtPoppinsMedium12Gray400: "font-medium font-poppins",
  txtPoppinsMedium14Gray400: "font-medium font-poppins",
  txtPoppinsSemiBold16WhiteA700: "font-poppins font-semibold",
  txtPoppinsLight56: "font-light font-poppins",
  txtPoppinsSemiBold24WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular14Gray30001: "font-normal font-poppins",
  txtPoppinsSemiBold18DeeporangeA400: "font-poppins font-semibold",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtSegoeScript16: "font-normal font-segoescript",
  txtSegoeScript14: "font-normal font-segoescript",
  txtPoppinsMedium16DeeporangeA400: "font-medium font-poppins",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsRegular16DeeporangeA700: "font-normal font-poppins",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold18WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular32Deeporange500: "font-normal font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsMedium16Black900: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium24Deeporange500: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium14Black90001: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsMedium12Black900: "font-medium font-poppins",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtPoppinsRegular16Gray400: "font-normal font-poppins",
  txtQuicksandMedium16: "font-medium font-quicksand",
  txtPoppinsRegular14RedA700: "font-normal font-poppins",
  txtQuicksandSemiBold24WhiteA700: "font-quicksand font-semibold",
  txtPoppinsMedium18Deeporange500: "font-medium font-poppins",
  txtPoppinsMedium16Deeporange500: "font-medium font-poppins",
  txtPoppinsRegular16Gray800: "font-normal font-poppins",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtPoppinsMedium14WhiteA700cc: "font-medium font-poppins",
  txtPoppinsMedium14Gray300: "font-medium font-poppins",
  txtPoppinsSemiBold48WhiteA700: "font-poppins font-semibold",
  txtPoppinsMedium14Deeporange500: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };