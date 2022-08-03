import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //fetching data from backend
    onSubmit: function (data) {
      axios
        .post("http://localhost:1335/api/login", data)
        .then((res) => {
          toast.success("Logged in successfully");
          console.log(res.data);
          localStorage.setItem("auth", JSON.stringify(res.data));
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  return (
    <div className=" login">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl mb-3 text-center">Login</h1>
        <br></br>

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
            type="Password"
            name="password"
            id="pwd"
            className={`block w-full rounded border py-1 px-2 ${
              formik.touched.password && formik.errors.password
                ? "border-red-400"
                : "border-gray-300"
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            required
          />
          {formik.touched.age && formik.errors.age && (
            <span className="text-red-400">{formik.errors.age}</span>
          )}
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary rounded p-3 text-white"
            type="submit"
          >
            Login
          </button>
          <br></br>
          <br></br>
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
