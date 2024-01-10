import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import BannarBannar from "components/BannarBannar";
import BannarBannar1 from "components/BannarBannar1";
import BannarBannarbig from "components/BannarBannarbig";

const BannarPage = () => {
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
          <BannarBannarbig
            className="bg-cover bg-gradient  bg-no-repeat flex md:flex-1 flex-col h-[600px] items-start justify-center p-[60px] md:px-5 rounded-[10px] w-[67%] md:w-full"
            style={{ backgroundImage: "url('images/img_bannarbig.png')" }}
          />
          <div className="flex md:flex-1 flex-col gap-6 items-center justify-start md:px-5 w-[33%] md:w-full">
            <BannarBannar className="h-72 relative w-full" />
            <BannarBannar1 className="h-72 relative w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannarPage;
