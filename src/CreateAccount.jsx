import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import FloatingLabelInput from "./FloatingLabelInput";
import { Link } from "react-router";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="mx-auto flex flex-col justify-between">
        <div className="w-30 p-14">
          <img className="w-full h-10" src="./logo-white.png" alt="" />
        </div>
        <h1 className="text-white font-bold text-center mb-16 text-xl hidden lg:block">
          Register and Start <br />
          creating memorable events <br /> your attendees will love
        </h1>
      </div>

      <div className=" lg:w-2/3  bg-white lg:rounded-bl-3xl rounded-tr-3xl lg:rounded-tr-none rounded-tl-3xl h-screen ">
        <div className="">
          <h1 className="font-bold text-4xl text-center py-8">
            Create Account
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-3 items-center lg:justify-center lg:px-28 ">
          <FloatingLabelInput
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            width="80%"
          />
          <FloatingLabelInput
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            width="80%"
          />
        </div>

        <div className="flex flex-col mt-2 items-center lg:px-8">
          <FloatingLabelInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            width="80%"
          />
          <FloatingLabelInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            width="80%"
          />
          <FloatingLabelInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            width="80%"
          />
        </div>

        <div className="text-center mt-4 lg:mx-8">
          <button
            className="bg-pink-600  text-white font-semibold p-2 rounded-lg hover:bg-pink-700 duration-500 "
            style={{ width: "80%" }}
          >
            Create Account
          </button>
        </div>

        <div className="flex justify-center mt-3">
          <hr className="border" />
          <span>or</span>
          <hr />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center lg:justify-center mt-3 lg:px-28">
          <button
            className="p-2 flex justify-center rounded-lg border border-black
          "
            style={{ width: "80%" }}
          >
            <FcGoogle className="text-2xl px-1" />
            <span>Sign Up With Google</span>
          </button>
          <button
            className="border w-[252px] p-2 flex justify-center rounded-lg border-black"
            style={{ width: "80%" }}
          >
            <FaXTwitter className="text-2xl px-1" />
            <span>Sign Up with X</span>
          </button>
        </div>

        <p className="text-center mt-4">
          Already have an account?
          <span>
            <Link to="/Login" className="text-blue-800 hover:underline">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
