import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";

import { cartListProduct } from "../partials/FetchApi";
import { addressBook, getBrainTreeToken, getPaymentProcess } from "./FetchApi";
import { fetchAddressBook, fetchData, fetchbrainTree, pay } from "./Action";
import { CartModal } from "../partials";
import { cartList } from "../productDetails/Mixins";
import { fetchbrainTree, pay, fetchAddressBook } from "./Action";

import DropIn from "braintree-web-drop-in-react";

const apiURL = process.env.REACT_APP_API_URL;

export const CheckoutComponent = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();

  const [state, setState] = useState({
    address: "",
    phone: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });
  console.log(state.address)
  useEffect(() => {
    fetchData(cartListProduct, dispatch);
    fetchAddresses();
    fetchbrainTree(getBrainTreeToken, setState);
  }, []);

  const fetchAddresses = async () => {
    let addressesRes = await fetchAddressBook(
      addressBook,
      "62a1f4231b59ca0c2c41d23c"
    );
    console.log(addressesRes[0].address[0]);
    setAddresses(addressesRes);
  };

  if (data.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        Please wait untill finish
      </div>
    );
  }

  const handleAddressChoice = (e) => {
    console.log(parseInt(e.name));
    setSelectedAddress(e.name);
  };

  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2">Order:</div>
        {/* Product List */}
        <div className="flex flex-col md:flex md:space-x-2 md:flex-row">
          <div className="md:w-1/2">
            <CheckoutProducts products={data.cartProduct} />
          </div>

          <div className="w-full order-first md:order-last md:w-1/2">
            {state.clientToken !== null ? (
              <Fragment>
                <div
                  onBlur={(e) => setState({ ...state, error: false })}
                  className="p-4 md:p-8"
                >
                  <div className="flex justify-start py-6">
                    <div>
                      <div className="form-check">
                        {/* <input
                          onChange={(e) => handleAddressChoice(e.target)}
                          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          htmlFor="flexRadioDefault1"
                        >
                          Default radio
                        </label> */}
                        {addresses?.map((address, index) => (
                          <Fragment key={index}>
                            <input
                              onChange={(e) => handleAddressChoice(e.target)}
                              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name={index}
                              checked={index == selectedAddress ? true : false}
                            />
                            <label
                              className="form-check-label inline-block text-gray-800"
                              htmlFor="flexRadioDefault1"
                            >
                              <div className=" " style={{ width: "70%" }}>
                                <div>
                                  <span className="font-bold">Address:</span>{" "}
                                  {`${addresses[index].address[0].addressLine}, ${addresses[index].address[0].zone}, ${addresses[index].address[0].city}, ${addresses[index].address[0].region} `}
                                </div>

                                <div>
                                  <span className="font-bold">Contact:</span>{" "}
                                  {addresses[index].address[0].phone}
                                </div>
                              </div>
                            </label>
                            <hr />
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex justify-start">
                    <div className="form-check">
                      <input
                        onChange={(e) => handleAddressChoice(e.target)}
                        className="form-check-input appearance-none h-4 w-4 border border-2 border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value="1"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="flexCheckDefault"
                      >
                        <div>
                          <div>
                            <span className="font-bold">Address:</span> House:
                            2, Shahid Minar Road, Kallyanpur, Dhaka-1207
                          </div>
                        </div>

                        <div>
                          <div>
                            <span className="font-bold">Contact:</span>{" "}
                            01716916958
                          </div>
                        </div>
                      </label>
                    </div>
                  </div> */}
                  {/* {state.error ? (
                    <div className="bg-red-200 py-2 px-4 rounded">
                      {state.error}
                    </div>
                  ) : (
                    ""
                  )} */}
                  {/* <div className="flex flex-col py-2">
                    <label htmlFor="address" className="pb-2">
                      Delivery Address
                    </label>
                    <input
                      value={state.address}
                      onChange={(e) =>
                        setState({
                          ...state,
                          address: e.target.value,
                          error: false,
                        })
                      }
                      type="text"
                      id="address"
                      className="border px-4 py-2"
                      placeholder="Address..."
                    />
                  </div> */}
                  {/* <div className="flex flex-col py-2 mb-2">
                    <label htmlFor="phone" className="pb-2">
                      Phone
                    </label>
                    <input
                      value={state.phone}
                      onChange={(e) =>
                        setState({
                          ...state,
                          phone: e.target.value,
                          error: false,
                        })
                      }
                      type="number"
                      id="phone"
                      className="border px-4 py-2"
                      placeholder="+880"
                    />
                  </div> */}
                  <DropIn
                    options={{
                      authorization: state.clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => (state.instance = instance)}
                  />
                  <div
                    onClick={(e) =>
                      pay(
                        data,
                        dispatch,
                        state,
                        setState,
                        getPaymentProcess,
                        totalCost,
                        history
                      )
                    }
                    className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
                    style={{ background: "#303031" }}
                  >
                    Pay now
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="flex items-center justify-center py-12">
                <svg
                  className="w-12 h-12 animate-spin text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment >
  );
};


const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  const { dispatch } = useContext(LayoutContext);
  const removeCartProduct = (id) => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cart.length !== 0) {
      cart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      fetchData(cartListProduct, dispatch);
      dispatch({ type: "inCart", payload: cartList() });
      dispatch({ type: "cartTotalCost", payload: totalCost() });
    }
    if (cart.length === 0) {
      dispatch({ type: "cartProduct", payload: null });
      fetchData(cartListProduct, dispatch);
      dispatch({ type: "inCart", payload: cartList() });
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products !== null && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
              >
                <div className="md:flex md:items-center md:space-x-4">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                    alt="wishListproduct"
                  />
                  <div className="text-lg md:ml-6 truncate">
                    {product.pName}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Price : ${product.pPrice}.00{" "}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Quantitiy : {quantity(product._id)}
                  </div>
                  <div className="font-semibold text-gray-600 text-sm">
                    Subtotal : ${subTotal(product._id, product.pPrice)}.00
                  </div>
                  <div>
                    <span
                      onClick={(e) => removeCartProduct(product._id)}
                      className="cursor-pointer hover:bg-gray-200 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No product found for checkout</div>
        )}
        <div className="text-xl font-semibold text-gray-700 flex justify-center">
          <span>Grand Total: ${totalCost()}.00</span>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
