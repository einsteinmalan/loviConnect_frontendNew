import React, { useState } from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/Button";
import { useUpdateUserData } from "../../../../utils/requests/userRequests";
import { useUser } from "../../../../components/auth";
//import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import LoadingRing from "../../../../components/ui/Icons/LoadingRing";

const SettingsAccount = () => {
  const updateUserMutation = useUpdateUserData();
  const [{ user }, { loading }] = useUser();
  const [phone, setPhone] = React.useState('');
  //const { register, handleSubmit, errors, getValues, setValue } = useForm();

  /* ------ set fetched user data in the editable fields ------ */
  React.useEffect(() => {
    if (user) {
      const { data } = user;
      setPhone(data?.email)
     // setValue("email", data.email);
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      phone: '',
    
      },
     onSubmit: values => { console.log(values); }, });

  const onSubmit = (data: { password: string; retryPassword: string }) => {
    updateUserMutation.mutate({
      data,
      authorization: user?.authorization || "",
    });
  };

  if (!user || loading)
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingRing color="#33d398" />
      </div>
    );
  return (
    <section className="w-full flex flex-col">
      <div className="w-full border-b border-gray-300 py-4 px-6">
        <h4 className="text-lg font-semibold">
          Change your account informations
        </h4>
        <p className="text-sm text-gray-500">
          See and change your account informations.
        </p>
      </div>
      <div className="p-4 sm:p-6">
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          <Input
            name="phone"
            type="text"
            label="Phone"
            onChange={formik.handleChange}
            placeholder="+1xxxxxxx"
          />
         
       
          <div>
            <Button loading={updateUserMutation.isLoading} isSubmit={true}>
              Save Password
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsAccount;
