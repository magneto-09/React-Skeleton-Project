import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

// const signInSchema = Yup.object().shape()

const SignInForm = () => {
  return (
    <div className="flex-1 content-center h-svh">
      <div className="max-w-md mx-auto bg-white rounder-lg shadow-md p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      </div>
    </div>
  );
};

export default SignInForm;
