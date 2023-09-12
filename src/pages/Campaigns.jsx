import React from "react";
import Menubar from "../components/Menubar";

export function Campaigns() {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-white shadow-lg rounded-lg">
        <div className="flex flex-row">
          <Menubar />
          <div className="h-4/5 w-4/5 bg-white mt-10 rounded-lg">
            <p className="font-bold text-4xl ml-2.5">
              Vala Gori Ham Shikh. Vala Gori Ham Shikh. Vala Gori Ham Shikh.
              Vala Gori Ham Shikh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
