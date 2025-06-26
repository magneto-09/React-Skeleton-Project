// SignupForm.tsx
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters or more")
    .required("Password is required"),
});

const SignupForm = () => {
  return (
    <div className="flex-1 content-center h-svh w-full md:w-auto px-4">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 border-2 border-red-400">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          validateOnChange={true}
          onSubmit={(values) => {
            console.log("Form data", values);
            // You can perform API call here
          }}
        >
          {({ isSubmitting, handleChange, handleBlur, setFieldValue }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e: any) => {
                    handleChange(e);
                  }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  onBlur={(e: any) => {
                    handleBlur(e);

                    const curr = e?.target?.value;
                    const upp = curr?.toUpperCase();

                    setFieldValue("email", upp);

                    console.log(upp);
                  }}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
