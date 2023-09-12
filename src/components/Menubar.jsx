import React from "react";
import Bar from "./Bar";
import home from "../assets/icons/home.png";
import dashboard from "../assets/icons/dashboard.png";
import products from "../assets/icons/products.png";
import campaign from "../assets/icons/campaign.png";
import customer from "../assets/icons/customer.png";
import logout from "../assets/icons/logout.png";
import { LogoutBtn } from "./LogoutBtn";

const Menubar = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-l-lg h-screen shadow-l-lg">
        <Bar name="Home" sourceUrl="/" imgUrl={home} />
        <Bar name="Dashboard" sourceUrl="/dashboard" imgUrl={dashboard} />
        <Bar name="Products" sourceUrl="/products" imgUrl={products} />
        <Bar name="Campaigns" sourceUrl="/campaigns" imgUrl={campaign} />
        <Bar name="Customers" sourceUrl="/customers" imgUrl={customer} />
        <LogoutBtn imgUrl={logout} />
      </div>
    </>
  );
};

export default Menubar;
