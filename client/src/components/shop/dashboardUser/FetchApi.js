import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const getUserById = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/api/user/signle-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePersonalInformationFetch = async (userData) => {
  try {
    let res = await axios.post(`${apiURL}/api/user/edit-user`, userData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (uId) => {
  try {
    let res = await axios.post(`${apiURL}/api/order/order-by-user`, { uId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async (formData) => {
  try {
    let res = await axios.post(`${apiURL}/api/user/change-password`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAddressByuId = async (uId, dispatch) => {
  let body =
    { uId: uId }
  try {
    let res = await axios.post(`${apiURL}/api/addressbook/address-by-user`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postAddressNew = async (body) => {
  console.log(body);
  try {
    let res = await axios.post(`${apiURL}/api/addressbook/create-address`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAddressById = async (aId, dispatch) => {
  let body =
    { aId: aId }
  try {
    let res = await axios.post(`${apiURL}/api/addressbook/delete-address`, body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
