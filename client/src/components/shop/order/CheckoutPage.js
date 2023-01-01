import React, { Fragment } from "react";
import OrderSuccessMessage from "../home/OrderSuccessMessage";
import Layout from "../layout";
import { CheckoutComponent } from "./CheckoutProducts";

const CheckoutPage = (props) => {
  return (
    <Fragment>
      <Layout children={<CheckoutComponent />} />
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default CheckoutPage;
