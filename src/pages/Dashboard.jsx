import React from "react";
import Menubar from "../components/Menubar";

export function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-white shadow-lg rounded-lg">
        <div className="flex flex-row">
          <Menubar />
          <div className="h-4/5 w-4/5 bg-white mt-10 rounded-lg">
            <p className="font-bold text-4xl mx-2.5">
              Startup Or Name Di Di &quot;Lopher&quot; = &quot;Local&quot; +
              &quot;Shopper&quot;. Ebe Dashboard Page. Edettun Data Chait
              Paribu. Icon In Pore Lagaium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
