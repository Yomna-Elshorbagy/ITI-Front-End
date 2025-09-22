import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod";
import { TokenContext } from "../../Context/TokenContext";
export default function Login() {
  const [apiError, setAPIError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUserData } = useContext(TokenContext);
  const navigate = useNavigate();
  const schema = z.object({
    email: z.email("Invalid email"),
    password: z.string().regex(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  let { register, handleSubmit, formState } = form;

  async function handleLogin(value) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://notes-mrp9.onrender.com/signin",
        value
      );
      if (res.data.message == "welocme") {
        navigate("/home");
        localStorage.setItem("token", res.data.token);
        setUserData(res.data.token);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      setAPIError(error.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Sign in</h2>
            <p className="text-muted">Sign in to continue to your account</p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            {apiError ? <p className="alert alert-danger">{apiError}</p> : ""}

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
                <p className="alert alert-danger p-1 mt-1 text-center">
                  {formState.errors.email.message}
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
                <p className="alert alert-danger p-1 mt-1 text-center">
                  {formState.errors.password.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none small text-primary">
                Forgot password?
              </a>
            </div>

            <div className="d-grid mb-4">
              <button className="btn btn-success btn-lg rounded-3 fw-semibold shadow">
                {isLoading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>

            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted small">or continue with</span>
              <hr className="flex-grow-1" />
            </div>

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

            <p className="text-center text-muted mt-4 mb-0">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-decoration-none fw-semibold text-primary"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
