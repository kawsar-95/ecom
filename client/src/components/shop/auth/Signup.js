import React, { Fragment, useState } from "react";
import { signupReq } from "./fetchApi";
import 'firebase/analytics';
import 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from "firebase/auth";
import { authentication } from '../../../firebase-config'

const Signup = (props) => {
  const [user, setUser] = useState({
    issignedIn: false,
    name: '',
    email: '',
    photo: ''
  })

  const provider = new GoogleAuthProvider()

  const googleSignIn = () => {
    signInWithPopup(authentication, provider)
      .then(res => {
        console.log(res)
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          issignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser)
        console.log(displayName, photoURL, email)
      })
      .catch(error => {
        console.log(error)
      })

  }
  const googleSignOut = () => {
    signOut(authentication)
      .then((result) => {
        // console.log('user Signed Out')
        const signedOutuser = {
          issignedIn: false,
          name: '',
          photo: '',
          email: ''
        }
        setUser(signedOutuser)
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })

  }
  const FBprovider = new FacebookAuthProvider()
  const facebookSignIn = () => {
    signInWithPopup(authentication, FBprovider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
    error: false,
    loading: false,
    success: false,
  });

  const alert = (msg, type) => (
    <div className={`text-sm text-${type}-500`}>{msg}</div>
  );

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    if (data.cPassword !== data.password) {
      return setData({
        ...data,
        error: {
          cPassword: "Password doesn't match",
          password: "Password doesn't match",
        },
      });
    }
    try {
      let responseData = await signupReq({
        name: data.name,
        email: data.email,
        password: data.password,
        cPassword: data.cPassword,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
          cPassword: "",
        });
      } else if (responseData.success) {
        setData({
          success: responseData.success,
          name: "",
          email: "",
          password: "",
          cPassword: "",
          loading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center text-2xl mb-6">Register</div>
      <form className="space-y-4">
        {data.success ? alert(data.success, "green") : ""}
        <div className="flex flex-col">
          <label htmlFor="name">
            Name<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                name: e.target.value,
              })
            }
            value={data.name}
            type="text"
            id="name"
            className={`${data.error.name ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border rounded-full`}
          />
          {!data.error ? "" : alert(data.error.name, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Email address<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="email"
            id="email"
            className={`${data.error.email ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border rounded-full`}
          />
          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">
            Password<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                password: e.target.value,
              })
            }
            value={data.password}
            type="password"
            id="password"
            className={`${data.error.password ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border rounded-full`}
          />
          {!data.error ? "" : alert(data.error.password, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cPassword">
            Confirm password
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                cPassword: e.target.value,
              })
            }
            value={data.cPassword}
            type="password"
            id="cPassword"
            className={`${data.error.cPassword ? "border-red-500" : ""
              } px-4 py-2 focus:outline-none border rounded-full`}
          />
          {!data.error ? "" : alert(data.error.cPassword, "red")}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="px-4 py-2 focus:outline-none border mr-1"
            />
            <label htmlFor="rememberMe">
              Remember me<span className="text-sm text-gray-600">*</span>
            </label>
          </div>
          <a className="block text-gray-600" href="/">
            Lost your password?
          </a>
        </div>

        <div
          onClick={(e) => formSubmit()}
          style={{ background: "#00c24a" }}
          className="px-4 py-2 text-white text-center cursor-pointer font-medium rounded-full"
        >
          Create an account
        </div>
        <div className="flex items-center">
          <span className="border-b border-gray-500 w-full" />
          <span className="font-medium">or</span>
          <span className="border-b border-gray-500 w-full" />
        </div>
        {
          user.issignedIn ? <div
            onClick={googleSignOut}
            style={{ background: "#fc5345" }}
            className=" px-4 py-2 text-white text-center cursor-pointer font-medium rounded-full"
          >
            Google Sign Out
          </div> :
            <div
              onClick={googleSignIn}
              style={{ background: "#fc5345" }}
              className=" px-4 py-2 text-white text-center cursor-pointer font-medium rounded-full"
            >
              Google Sign In
            </div>
        }
        {
          user.issignedIn && <div>
            <p>Welcome,{user.name}</p>
            <p>Your email:{user.email}</p>
            <img src={user.photo} alt="" ></img>
          </div>
        }

        <div className="flex items-center space-x-2">

        </div>
        <div>
          <div
            onClick={facebookSignIn}
            style={{ background: "#1877f2" }}
            className="px-4 py-2 text-white text-center cursor-pointer font-medium rounded-full"
          >
            Facebook Sign In
          </div>

        </div>

      </form>
    </Fragment>
  );
};

export default Signup;
