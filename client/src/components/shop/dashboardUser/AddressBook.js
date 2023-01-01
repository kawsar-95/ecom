import React, { Fragment, useContext, useState, useEffect } from "react";
import Layout from "./Layout";
import { DashboardUserContext } from "./Layout";
import { fetchData, updatePersonalInformationAction } from "./Action";
import { getAddressByuId, deleteAddressById } from "./FetchApi";
import AddAddressModal from "./AddAddressModal";

const ProfileComponent = () => {
    const { data, dispatch } = useContext(DashboardUserContext);
    const userDetails = data.userDetails !== null ? data.userDetails : "";
    const [address, setAddress] = useState();
    const [addressdelete, setAddressDelete] = useState(false);
    const [addAddressModal, setAddAddressModal] = useState(false);

    let responseData;
    const [fData, setFdata] = useState({
        id: "",
        uID: "",
        label: "",
        name: "",
        addressLine: "",
        region: "",
        city: "",
        zone: "",
        phone: "",
        effectiveDelivery: "",
        success: false,
    });

    const fetchData = async () => {
        let userId = JSON.parse(localStorage.getItem("jwt"))
            ? JSON.parse(localStorage.getItem("jwt")).user._id
            : "";
        responseData = await getAddressByuId(userId);
        setAddress(responseData);
        setTimeout(() => {
            if (responseData && responseData?.addressBook) {
                dispatch({ type: "addressBook", payload: responseData?.addressBook });
                dispatch({ type: "loading", payload: false });
            }
        }, 500);
    }
    useEffect(() => {
        fetchData();
    }, [addressdelete]);

    const handleSubmit = () => {
        updatePersonalInformationAction(dispatch, fData);
    };

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
        <Fragment>{addAddressModal ? (<AddAddressModal />) :
            (<div className="col-span- overflow-auto bg-white shadow-lg p-4">
                <div className="py-4 px-4 text-rg font-semibold border-t-2 border-yellow-700">
                    Address Book

                    {/* Close Modal */}
                    <span
                        style={{ float: "right" }}
                        onClick={(e) =>
                            setAddAddressModal(true)
                        }
                        className="cursor-pointer bg-black text-white py-2 px-2 rounded-full"
                    >
                        + Add Address
                    </span>
                </div>
                <hr />
                <table className="table-fixed border w-full my-2">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Label</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Phone</th>
                            <th className="px-4 py-2 border">Address</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {address ? (address.addressBook ? (
                            address.addressBook.map((item, index) => {
                                return (
                                    <CategoryTable
                                        key={index}
                                        address={item}
                                        addressDelete={setAddressDelete}
                                    />

                                )
                            })

                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-xl text-center font-semibold py-8"
                                >
                                    No Address found
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="text-xl text-center font-semibold py-8"
                                >
                                    No Address found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div >
            )}
        </Fragment >
    );
};


/* Single Category Component */
const CategoryTable = (item, key, setAddressDelete) => {
    const deleteAddressReq = (id) => {
        let responseData = deleteAddressById(id);
        alert("Address Deleted Successfully")
        window.location.reload(true);


    }

    return (
        <Fragment>
            <tr className="border-b">
                {/* <td>
                    <td className="p-2 flex items-center justify-center">
                        <span
                            onClick={(e) => editOrder(order._id, true, order.status)}
                            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
                        >
                            <svg
                                className="w-6 h-6 fill-current text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span
                            onClick={(e) => deleteOrderReq(order._id, dispatch)}
                            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
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
                    </td>
                </td> */}
                <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
                    {item.address.label}
                    {/* {address.map((item, i) => {
                        return (
                            <span className="block flex items-center space-x-2" key={i}>
                                <img
                                    className="w-8 h-8 object-cover object-center"
                                    src={`${apiURL}/uploads/products/${item.id.pImages[0]}`}
                                    alt="productImage"
                                />
                                <span>{item.id.pName}</span>
                                <span>{item.quantitiy}x</span>
                            </span>
                        );
                    })} */}
                </td>
                <td className="hover:bg-gray-200 p-2 text-center cursor-default">
                    {item.address.address[0].fullName}
                    {/* {order.status === "Not processed" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Processing" && (
                        <span className="block text-yellow-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Shipped" && (
                        <span className="block text-blue-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Delivered" && (
                        <span className="block text-green-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )}
                    {order.status === "Cancelled" && (
                        <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
                            {order.status}
                        </span>
                    )} */}
                </td>
                <td className="hover:bg-gray-200 p-2 text-center">
                    {item.address.address[0].phone}
                </td>
                <td className="hover:bg-gray-200 p-2 text-center">
                    {item.address.address[0].region + ">" + item.address.address[0].city + ">" + item.address.address[0].zone + " " + item.address.address[0].addressLine}
                </td>
                <td className="hover:bg-gray-200 p-2 text-center">
                    {item.address.address[0].effectiveDelivery}
                </td>
                <td className="p-2 flex items-center justify-center">
                    {/* <span
                            // onClick={(e) => editOrder(order._id, true, order.status)}
                            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
                        >
                            <svg
                                className="w-6 h-6 fill-current text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span> */}
                    <span
                        onClick={(e) => deleteAddressReq(item.address._id)}
                        className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
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
                </td>


            </tr>
        </Fragment>
    );
};
const AddressBook = (props) => {
    return (
        <Fragment>
            <Layout children={<ProfileComponent />} />
        </Fragment>
    );
};
export { ProfileComponent };
export default AddressBook;
