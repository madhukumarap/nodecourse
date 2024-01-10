module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_b2": "#000000b2",
          "900_01": "#002602",
          "900_00": "#00000000",
          "900_02": "#00000002",
          "900_0c": "#0000000c",
          "900_99": "#00000099",
          "900_19": "#00000019",
          "900_14": "#00260214",
          "900_a2": "#000000a2",
          "900_1e": "#0000001e",
          "900_14_01": "#00000014",
          "900_33": "#00000033",
        },
        blue: { A400: "#2388ff" },
        green: {
          500: "#36c63f",
          700: "#20b426",
          800: "#406b41",
          900: "#2b562e",
          A700_02: "#0aad4b",
          A700_01: "#28d05b",
          A700_03: "#13d962",
          "700_51": "#20b42651",
          A700_19: "#00b20619",
          A700: "#00b206",
          "900_14": "#0e6b1414",
          "700_19": "#20b42619",
          "500_19": "#56ac5919",
          "800_01": "#009f06",
          "700_33": "#20b42633",
        },
        orange: {
          300: "#ffb545",
          600: "#f98500",
          700: "#f77c00",
          A700_01: "#f86400",
          A100: "#fcd770",
          A200: "#ff983b",
          A700: "#fa6d00",
        },
        gray: {
          50: "#f9f9f9",
          100: "#f2f2f2",
          200: "#ededed",
          300: "#e6e6e6",
          400: "#b3b3b3",
          500: "#999999",
          600: "#7f7f7f",
          700: "#666666",
          800: "#4c4c4c",
          900: "#292929",
          "800_03": "#3d3d3d",
          "800_02": "#5c2e1a",
          "800_01": "#693924",
          "700_02": "#555555",
          "700_01": "#606060",
          "500_01": "#aaaaaa",
          "200_01": "#ebebe9",
          "100_02": "#f2f4f2",
          "400_01": "#c1c1c1",
          "400_02": "#b9b9b9",
          "100_01": "#f7f7f7",
          "600_01": "#607f62",
          "300_02": "#e0e0de",
          "300_01": "#e5e5e5",
        },
        red: {
          200: "#cf9e76",
          300: "#c66b60",
          400: "#d9435b",
          500: "#e64c3f",
          600: "#ea3942",
          900: "#a82a27",
          "400_19": "#e94b4819",
          A200_01: "#fc4e51",
          "400_33": "#e94b4833",
          "200_01": "#db9b7c",
          "300_02": "#d49073",
          "300_01": "#e47c6e",
          A700: "#ff0000",
          A200: "#ff5368",
          "400_01": "#f35244",
        },
        yellow: { 800: "#e09f2c", "800_01": "#f7b030" },
        deep_orange: {
          50: "#f3e8d7",
          200: "#efbe9a",
          300: "#ff826e",
          400: "#ff7e40",
          500: "#ff6316",
          900: "#872d00",
          "200_01": "#ffbe9d",
          A700: "#e51919",
          "500_7f": "#ff63167f",
          "500_75": "#ff631675",
          A400_87: "#ff540087",
          A400_82: "#ff540082",
          "500_63": "#ff631663",
          "500_3f": "#ff63163f",
          A400: "#ff5400",
          "300_01": "#eb996e",
        },
        light_green: {
          100: "#e5d6c1",
          300: "#b4dd7f",
          500: "#8cc152",
          600: "#7eb457",
          "600_01": "#79ad54",
        },
        blue_gray: {
          100: "#cccccc",
          300: "#999caa",
          400: "#7a997b",
          700: "#535353",
          900: "#272343",
          "900_02": "#292b37",
          "900_01": "#333333",
          "100_01": "#d7d7d7",
        },
        white: {
          A700_4c: "#ffffff4c",
          A700_d8: "#ffffffd8",
          A700_cc: "#ffffffcc",
          A700_90: "#ffffff90",
          A700_99: "#ffffff99",
          A700_11: "#ffffff11",
          A700: "#ffffff",
          A700_a2: "#ffffffa2",
          A700_87: "#ffffff87",
        },
        lime: {
          400: "#dee051",
          600: "#c7c934",
          900: "#ad6643",
          "400_01": "#d0d24b",
        },
        amber: { 300: "#ffcf5d", A400: "#fcc900" },
        indigo: { 400: "#5c87bd", 500: "#456ea2" },
      },
      boxShadow: {
        bs8: "inset 0px -0.5px  1px 0px #cccccc",
        bs1: "0px -1px  1px 0px #e5e5e5",
        bs7: "0px 1px  1px 0px #e5e5e5",
        bs15: "inset 0px -2px  1px 0px #20b426",
        bs9: "inset 0px -3px  1px 0px #00b206",
        bs14: "inset 0px -4px  1px 0px #00b206",
        bs: "inset 3px 0px  1px 0px #20b426",
        bs11: "0px 0px  12px 0px #0000001e",
        bs3: "0px 0px  12px 0px #20b42651",
        bs2: "0px 16px  48px 0px #0e6b1414",
        bs16: "0px 0px  20px 0px #00000033",
        bs17: "0px 0px  56px 0px #00260214",
        bs12: "0px 8px  40px 0px #00000014",
        bs10: "0px 8px  40px 0px #00260214",
        bs4: "0px 10px  20px 0px #00000002",
        bs13: "0px 10px  80px 0px #00000019",
        bs5: "0px 20px  48px 0px #00260214",
        bs6: "0px 20px  50px 0px #00000014",
      },
      fontFamily: {
        poppins: "Poppins",
        quicksand: "Quicksand",
        dancingscript: "Dancing Script",
        segoescript: "Segoe Script",
      },
      backgroundImage: {
        gradient: "linear-gradient(108deg ,#00000099,#00000000)",
        gradient1: "linear-gradient(95deg ,#000000b2,#00000000)",
        gradient2: "linear-gradient(180deg ,#f2f4f2,#ffffff)",
        gradient3: "linear-gradient(180deg ,#ffffff,#f2f4f2)",
        gradient4: "linear-gradient(180deg ,#f9f9f9,#ffffff)",
        gradient5: "linear-gradient(180deg ,#f2f2f2,#ffffff)",
        gradient6: "linear-gradient(180deg ,#ff63167f,#872d00)",
      },
      textShadow: { ts: "0px 2px  1px #20b426" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};