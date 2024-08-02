import React from "react";
//import { useForm } from "react-hook-form";
import { useFormik } from 'formik';
import Input from "../../components/ui/Input";
import guestRoute from "../../components/GuestRoute";
import { forgotPasswordRequest } from "../../utils/requests/userRequests";
import Modal from "../ui/Modal";

const PasswordReset = (): JSX.Element => {
  //const { register, handleSubmit } = useForm();
  const formik = useFormik({
    initialValues: {
      phone: '',
      userName: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  const [showSuccessMessage, setShowSuccessMessage] = React.useState<boolean>(
    false
  );
  const onSubmit = async (
    data: { userName: string; email: string },
    e?: React.BaseSyntheticEvent
  ) => {
    e?.preventDefault();
    try {
      const result = await forgotPasswordRequest(data);
      if (result.status === 200) {
        setShowSuccessMessage(true);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="bg-white sm:border rounded  max sm:shadow-md px-6 py-10 sm:p-10 max-w-xl m-auto w-full h-full sm:h-auto">
      <Modal
        onAccept={() => setShowSuccessMessage(false)}
        doShowModal={showSuccessMessage}
        noButton
        acceptText="Continue"
        classNameButton="block w-full text-gray-400 py-2.5 uppercase hover:bg-gray-50"
        description="We've just sent an email to your inbox ! "
      />
      <h3 className="my-4 text-2xl font-semibold text-gray-700 mt-0">
        Forgot your password ?
      </h3>
      <p className="my-2 text-sm font-normal text-gray-400">
        Enter the email linked to your profile and we will send you an email to
        reset your password.
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-5"
      >
       <input
        id="phone"
        name="phone"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
     
        <input
          className="bg-green-500 hover:bg-green-400 text-white p-2 rounded"
          type="submit"
          value="Send OTP"
        />
      </form>
    </div>
  );
};

export default guestRoute(PasswordReset);
