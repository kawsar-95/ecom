import React, { Fragment, createContext } from "react";
import { Navber, Footer, CartModal } from "../partials";
import LoginSignup from "../auth/LoginSignup";
import OrderSuccessMessage from "../home/OrderSuccessMessage";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
