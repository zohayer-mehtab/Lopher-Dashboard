import React from "react";
import Menubar from "../components/Menubar";

export function Customers() {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-white shadow-lg rounded-lg">
        <div className="flex flex-row">
          <Menubar />
          <div className="h-4/5 w-4/5 bg-white mt-10 rounded-lg">
            <p className="font-bold text-4xl ml-2.5">
              Apatoto Eddur Porjonto Oiyi. Bye Bye Garibo!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
