import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import BannarOneBannar from "components/BannarOneBannar";
import BannarOneBannar1 from "components/BannarOneBannar1";

const BannarOnePage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-poppins gap-6 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[424px] flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded-lg top-[0]">
          <Img
            className="h-[536px] md:h-auto object-cover rounded-lg w-full"
            src="images/img_rectangle54.png"
            alt="rectangleFiftyFour"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: " 79px",
                flexDirection: "column",
                margin: " ",
                color: "#ffffffcc",
                textAlign: "center",
                fontSize: "12px",
              },
            }}
            className="flex flex-col items-center justify-start mb-[360px] w-full"
          >
            <MenuItem>
              <div className="flex items-start justify-start md:px-10 sm:px-5">
                <Text className="tracking-[0.36px] uppercase w-auto">Days</Text>
              </div>
            </MenuItem>
          </Menu>
        </Sidebar>
        <List
          className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 md:px-5 w-[67%] md:w-full"
          orientation="horizontal"
        >
          <BannarOneBannar className="h-[536px] relative w-full" />
          <BannarOneBannar1 className="h-[536px] relative w-full" />
        </List>
      </div>
    </>
  );
};

export default BannarOnePage;
