import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const Register = (props) => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    //fetching data from backend
    onSubmit: function (values) {
      console.log(values);
      axios
        .post("http://localhost:1335/api/register", values)
        .then((res) => {
          toast.success("Successs");
          navigate("/login");
          console.log(res);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  return (
    <div className="bg-blue-300 ">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl mb-3 text-center">Register</h1>
        <br></br>
        <div className="mb-4">
          <label for="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            className={`block w-full rounded border py-1 px-2 ${
              formik.touched.name && formik.errors.name
                ? "border-red-400"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Full Name"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-400">{formik.errors.name}</span>
          )}
        </div>
        <div className="mb-4">
          <label for="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            className={`block w-full rounded border py-1 px-2 ${
              formik.touched.email && formik.errors.email
                ? "border-red-400"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-400">{formik.errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          <label for="pwd"></label>
          <input
            type="password"
            name="password"
            id="pwd"
            className={`block w-full rounded border py-1 px-2 ${
              formik.touched.password && formik.errors.password
                ? "border-red-400"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            required
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary rounded p-3 text-white"
            type="submit"
          >
            Register
          </button>
          <br></br>
          <br></br>
          <Link to="/login" classname="Link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
