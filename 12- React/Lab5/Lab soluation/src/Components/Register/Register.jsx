import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";
import axios from "axios";
export default function Register() {
  const [apiError, setAPIError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  //===> validate schema
  const schema = z
    .object({
      name: z.string().min(1, "Name is required").max(15, "Max length is 15"),
      email: z.string().email("Invalid email"),
      age: z.coerce
        .number()
        .int("Age must be an integer")
        .positive("Age must be greater than 0"),
      password: z
        .string()
        .regex(
          /^[A-Z][a-zA-Z0-9]{5,}$/,
          "Password must start with uppercase and be at least 6 chars"
        ),
      re_password: z.string(),
    })
    .refine((obj) => obj.password === obj.re_password, {
      message: "Password & Re-Password should match",
      path: ["re_password"],
    });

  // ===> useForm to
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      re_password: "",
      age: 0,
    },
    resolver: zodResolver(schema),
  });

  // ===>
  let { register, handleSubmit, formState } = form;

  async function handleRegister(value) {
    setIsLoading(true);
    setAPIError("");

    try {
      const res = await axios.post(
        "https://notes-mrp9.onrender.com/signup",
        value
      );

      if (res.data?.message === "Done") {
        navigate("/login");
      } else {
        setAPIError(res.data?.message || "Unexpected response");
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 422)
          setAPIError("Validation error: " + (data?.message || ""));
        else if (status === 409) setAPIError("Email already exists.");
        else setAPIError(data?.message || "Server error");
      } else {
        setAPIError("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ maxWidth: "850px", width: "100%" }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Sign Up</h2>
            <p className="text-muted">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)}>
            {apiError ? <p className="alert alert-danger">{apiError}</p> : ""}

            <div className="form-floating mb-4">
              <input
                type="text"
                {...register("name")}
                className="form-control rounded-3"
                id="floatingName"
                placeholder="Name"
              />
              <label htmlFor="floatingName">Full Name</label>

              {formState.errors.name && formState.touchedFields.name ? (
                <p className="alert alert-danger p-2 mt-3 text-center">
                  {formState.errors.name.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="form-floating mb-4">
              <input
                type="email"
                {...register("email")}
                className="form-control rounded-3"
                id="floatingEmail"
                placeholder="Email"
              />
              <label htmlFor="floatingEmail">Email</label>
              {formState.errors.email ? (
                <p className="alert alert-danger  p-2 mt-3 text-center">
                  {formState.errors.email.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="form-floating mb-4">
              <input
                type="number"
                {...register("age")}
                className="form-control rounded-3"
                id="floatingAge"
                placeholder="Age"
                min="1"
              />
              <label htmlFor="floatingAge">Age</label>
              {formState.errors.age ? (
                <p className="alert alert-danger  p-2 mt-3 text-center">
                  {formState.errors.age.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                {...register("password")}
                className="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
              {formState.errors.password ? (
                <p className="alert alert-danger  p-2 mt-3 text-center">
                  {formState.errors.password.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                {...register("re_password")}
                className="form-control rounded-3"
                id="floatingRePassword"
                placeholder="Re-enter Password"
              />
              <label htmlFor="floatingRePassword">Re-enter Password</label>
              {formState.errors.re_password ? (
                <p className="alert alert-danger  p-2 mt-3 text-center">
                  {formState.errors.re_password.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="d-grid mb-4">
              <button
                type="submit"
                className="btn btn-success btn-lg rounded-3 fw-semibold shadow"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">or sign up with</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Social buttons */}
            <div className="d-flex gap-3">
              <button
                type="button"
                className="btn btn-danger w-50 rounded-3 fw-semibold"
              >
                Google
              </button>
              <button
                type="button"
                className="btn btn-info w-50 rounded-3 fw-semibold text-white"
              >
                Twitter
              </button>
            </div>

            {/* Login link */}
            <p className="text-center text-muted mt-4 mb-0">
              Already have an account?{" "}
              <a
                href="#"
                className="text-decoration-none fw-semibold text-success"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
