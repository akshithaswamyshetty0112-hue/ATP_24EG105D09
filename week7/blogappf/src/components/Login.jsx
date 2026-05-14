import { useForm } from "react-hook-form";

import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
  loadingClass,
} from "../styles/common";

import {
  NavLink,
  useNavigate,
} from "react-router";

import { useAuth } from "../store/authStore";

import { useEffect } from "react";

import { toast } from "react-hot-toast";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // auth store
  const {
    login,
    currentUser,
    loading,
    error,
    isAuthenticated,
  } = useAuth((state) => state);

  // login submit
  const onUserLogin = async (
    userCredObj
  ) => {
    await login(userCredObj);
  };

  // redirect based on role
  useEffect(() => {

    if (
      isAuthenticated &&
      currentUser
    ) {

      const role =
        currentUser.role?.toLowerCase();

      // USER
      if (role === "user") {

        toast.success(
          "Login successful"
        );

        navigate("/user-profile");
      }

      // AUTHOR
      else if (
        role === "author"
      ) {

        toast.success(
          "Author login successful"
        );

        navigate(
          "/author-profile"
        );
      }

      // ADMIN
      else if (
        role === "admin"
      ) {

        toast.success(
          "Admin login successful"
        );

        navigate(
          "/admin-profile"
        );
      }
    }

  }, [
    isAuthenticated,
    currentUser,
    navigate,
  ]);

  // loading
  if (loading) {
    return (
      <p className={loadingClass}>
        Loading...
      </p>
    );
  }

  return (
    <div
      className={`${pageBackground} flex items-center justify-center py-16 px-4`}
    >

      <div className={formCard}>

        {/* TITLE */}
        <h2 className={formTitle}>
          Sign In
        </h2>

        {/* ERROR */}
        {error && (
          <p className={errorClass}>
            {error}
          </p>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(
            onUserLogin
          )}
        >

          {/* EMAIL */}
          <div className={formGroup}>

            <label className={labelClass}>
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
              {...register("email", {
                required:
                  "Email is required",

                validate: (
                  value
                ) =>
                  value.trim()
                    .length > 0 ||
                  "Email cannot be empty",
              })}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className={formGroup}>

            <label className={labelClass}>
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className={inputClass}
              {...register(
                "password",
                {
                  required:
                    "Password is required",

                  validate: (
                    value
                  ) =>
                    value.trim()
                      .length > 0 ||
                    "Password cannot be empty",
                }
              )}
            />

            {errors.password && (
              <p className={errorClass}>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right -mt-2 mb-4">
            <a
              href="/forgot-password"
              className={`${linkClass} text-xs`}
            >
              Forgot password?
            </a>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className={submitBtn}
          >
            Sign In
          </button>

        </form>

        {/* FOOTER */}
        <p
          className={`${mutedText} text-center mt-5`}
        >
          Don't have an account?{" "}

          <NavLink
            to="/register"
            className={linkClass}
          >
            Create one
          </NavLink>
        </p>

      </div>
    </div>
  );
}

export default Login;