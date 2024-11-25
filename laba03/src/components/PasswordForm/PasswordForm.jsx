import { useState } from "react";
import { useForm } from "react-hook-form";

function PasswordForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const password = watch("password");

  return (
    <>
      <div className="col-md-3 mt-2">
        <h1>Create password</h1>
        <p>
          Use a minimum of 10 characters, including uppercase letters, lowercase
          letters and numbers.
        </p>

        <form
          className="password-form"
          onSubmit={handleSubmit((data) => {
            if (!props.userData || !props.userData.email) {
              alert("Email is missing in userData");
              return;
            }

            const updatedUserData = {
              email: props.userData.email,
              password: data.password,
            };
            props.setUserData(updatedUserData);

            alert(JSON.stringify(updatedUserData));
          })}
        >
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              {...register("password", {
                required: "Please, input your password",
                maxLength: {
                  value: 64,
                  message: "Password length must not exceed 64 characters",
                },
                minLength: {
                  value: 10,
                  message: "Password length must be at least 10 characters",
                },
              })}
            />
            {errors.password && (
              <p
                style={{
                  color: "red",
                  marginBottom: 0,
                  marginTop: 2,
                }}
              >
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="form-group mt-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              className="form-control"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please, confirm your password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p
                style={{
                  color: "red",
                  marginBottom: 0,
                  marginTop: 2,
                }}
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button type="submit" className="mt-3 btn btn-primary w-100">
            Confirm Password
          </button>
        </form>
        <div className="text-with-line mt-2 mb-3">
          <div className="background-line"></div>
        </div>

        <p className="agree-rules">
          By signing in or creating an account, you agree with our Terms &
          conditions and Privacy statement
        </p>

        <div className="copyright">
          <div>All rights reserved.</div>
          <div>Copyright (2006 - 2024) - Booking.com™</div>
        </div>
      </div>
    </>
  );
}

export default PasswordForm;
