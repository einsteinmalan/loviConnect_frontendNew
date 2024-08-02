import React from "react";
//import { useForm } from "react-hook-form";
import { useFormik } from 'formik';
import axios from "axios";
import Input from "../../components/ui/Input";
import guestRoute from "../GuestRoute";
import { useNavigate } from "react-router-dom";
//import { useRouter } from "next/router";
//import Link from "next/link";
import { Link } from "react-router-dom";
import DateInput from "../ui/DateInput";

const Signup = (): JSX.Element => {
  //const { register, handleSubmit } = useForm();
  //const router = useRouter();
  const formik = useFormik({ initialValues: 
    { fullName: '', 
      phoneNumber: '',
    }, 
    onSubmit: values => { console.log(values); }, }
  );
  const navigate = useNavigate();
  const onSubmit = async (data: {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    try {
      const result = await axios.post("/api/signup", data);
      if (result.status === 200) navigate("/signin");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="bg-white sm:border sm:rounded  max sm:shadow-md px-6 py-10 sm:p-10 max-w-xl m-auto w-full h-full sm:overflow-y-auto overflow-y-scroll sm:h-auto">
      <h3 className="my-4 text-2xl font-semibold text-gray-700 mt-0">
        Create an Account
      </h3>
      <form
       onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-5"
      >
        
        <Input
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
        />
        <div className="flex flex-wrap space-y-5 sm:space-y-0">
          <Input
            name="phoneNumber"
            label="Phone number"
            placeholder="Enter your phone number"
            className="w-full sm:w-1/2 sm:pr-2"
          />
     
        </div>
        
        <input
          className="bg-green-500 hover:bg-green-400 text-white p-2 rounded"
          type="submit"
          value="Signup"
        />
      </form>
      <div className="text-center mt-4 text-sm sm:text-base">
        <span className="text-gray-400">
          Already have an account ?{" "}
          <Link to="/signin">
            <a className="underline bold">Sign in instead</a>
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default guestRoute(Signup);
