import React, { Fragment, useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import { postAddressNew } from "./FetchApi";
import { useHistory } from "react-router-dom";

import { handleChangePassword } from "./Action";
import { DashboardUserContext } from "./Layout";
import { ProfileComponent } from "./AddressBook";
const AddAddressModal = () => {
    const { data, dispatch } = useContext(DashboardUserContext);
    const { thisPage, setThisPage } = useState(true);
    const [fData, setFdata] = useState({
        label: "",
        user: "",
        isDefault: "",
        fullName: "",
        region: "",
        city: "",
        zone: "",
        addressLine: "",
        phone: "",
        effectiveDelivery: ""
    });
    const history = useHistory();
    useEffect(() => {

    }, [thisPage]);

    const postAddress = async () => {
        let userId = JSON.parse(localStorage.getItem("jwt"))
            ? JSON.parse(localStorage.getItem("jwt")).user._id
            : "";

        let body = {
            label: fData.label,
            user: userId,
            address: [{
                fullName: fData.fullName,
                region: fData.region,
                city: fData.city,
                zone: fData.zone,
                addressLine: fData.addressLine,
                phone: fData.phone,
                effectiveDelivery: fData.effectiveDelivery
            }],
            isDefault: fData.isDefault
        }
        let responseData = await postAddressNew(body);
        alert("Address Added Successfuly.");
        history.push('/user/profile')
    }

    if (fData.success || fData.error) {
        setTimeout(() => {
            setFdata({ ...fData, success: false, error: false });
        }, 1500);
    }

    if (data.loading) {
        return (
            <div className="w-full md:w-9/12 flex items-center justify-center ">
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
        );
    }
    return (
        <Fragment>{thisPage ? (<AddAddressModal />) : (
            <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
                <div className="shadow-lg border">
                    <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
                        Add New Address
                    </div>
                    <hr />
                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
                        {fData.success ? (
                            <div className="bg-green-200 px-4 py-2 rounded">
                                {fData.success}
                            </div>
                        ) : (
                            ""
                        )}
                        {fData.error ? (
                            <div className="bg-red-200 px-4 py-2 rounded">{fData.error}</div>
                        ) : (
                            ""
                        )}

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="label">Address Label</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, label: e.target.value })
                                }
                                value={fData.label}
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, fullName: e.target.value })
                                }
                                value={fData.fullName}
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="region">Region</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, region: e.target.value })
                                }
                                value={fData.region}
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="city">City</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, city: e.target.value })
                                }
                                value={fData.city}
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="zone">Zone</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, zone: e.target.value })
                                }
                                value={fData.zone}
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="addressLine">Address Line</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, addressLine: e.target.value })
                                }
                                value={fData.addressLine}
                                placeholder="Ex Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
                                type="text"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phone">Contact Number</label>
                            <input
                                onChange={(e) =>
                                    setFdata({ ...fData, phone: e.target.value })
                                }
                                value={fData.phone}
                                type="number"
                                id="label"
                                className="border px-4 py-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="effectiveDelivery">Set a label for effective Delivery</label>
                            <select
                                name="effectiveDelivery"
                                onChange={(e) =>
                                    setFdata({ ...fData, effectiveDelivery: e.target.value })
                                }

                                className="px-4 py-2 border focus:outline-none"
                                id="effectiveDelivery"
                            >
                                <option name="effectiveDelivery" value="Home">
                                    Home
                                </option>
                                <option name="effectiveDelivery" value="Office">
                                    Office
                                </option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="isDefault">Default Address Type</label>
                            <select
                                name="isDefault"
                                onChange={(e) =>
                                    setFdata({ ...fData, isDefault: e.target.value })
                                }
                                className="px-4 py-2 border focus:outline-none"
                                id="isDefault"
                            >
                                <option name="isDefault" value="true">
                                    Default Address
                                </option>
                                <option name="isDefault" value="false">
                                    Non Default Address
                                </option>
                            </select>

                        </div>
                        <div
                            onClick={() => postAddress()}
                            style={{ background: "#303031" }}
                            className="w-full text-center cursor-pointer px-4 py-2 text-gray-100"
                        >
                            Confirm Add Address
                        </div>
                    </div>
                </div>
            </div>
        )}
        </Fragment>
    );
};


export default AddAddressModal;
