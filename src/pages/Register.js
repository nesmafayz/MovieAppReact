import React, { useState } from "react";
import img from "../login.avif";

export default function Register() {
  const [register, setregister] = useState({
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [registerError, setRegisterError] = useState({
    Name: null,
    Email: null,
    Password: null,
    ConfirmPassword: null,
  });
  const handleRegisterFormChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setregister({
        ...register,
        [name]: value, 
      });
    /////name Validation////
      if (name === "Name") {
        setRegisterError({
          ...registerError,
          Name:
            value.length === 0
              ? "This field is required"
              : value.length < 3
              ? "Minimum length is 3"
              : null,
        });
      }
        ///////Email validation////
      if (name === "Email") {
        if(!value.includes("@")){
          setRegisterError({
            ...registerError,
            Email:"Please Enter valid Email"
          });
        }
        else if (!/[A-Z]/.test(value)) {
          setRegisterError({
            ...registerError,
            Email: "Email must contain at least one uppercase letter",
          });
        }
          else{
            setRegisterError({
              ...registerError,
              Email: null,
            })
          }
        }
        ///////password validation////
        if(name==="Password"){
          if(value.length <6){
            setRegisterError({
              ...registerError,
              Password:"Password Cant be less than 6 characters",
            })
          }
          else{
            setRegisterError({
              ...registerError,
              Password: null,
            })
          }
        }
          ///////confirm password validation////
         // Confirm password validation
if (name === "ConfirmPassword") {
  if (value !== register.Password) {
    setRegisterError({
      ...registerError,
      ConfirmPassword: "Password Confirmation doesn't match",
    });
  } else {
    setRegisterError({
      ...registerError,
      ConfirmPassword: null,
    });
  }
}

  }
  const handlesubmit = (event) => {
    event.preventDefault();
    // Clear the form data
    setregister({
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-flex align-items-center">
              <img
                src={img}
                alt="Loginimage"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
            <div className=" col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
              <form onSubmit={handlesubmit} className="loginform  px-5">
                <div className="text-danger"></div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="formExample">
                    Name{" "}
                  </label>
                  <input
                    name="Name"
                    value=""
                    placeholder="Your Name"
                    className="form-control form-control-lg"
                    onChange={handleRegisterFormChange}
                  />
                    {registerError.Name && (
                    <div className="text-danger">{registerError.Name}</div>
                  )}
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="formExample">
                    Email{" "}
                  </label>
                  <input
                    name="Email"
                    placeholder="Your email address"
                    className="form-control form-control-lg"
                    onChange={handleRegisterFormChange }
                  />
                  {registerError.Email &&(
                    <div className="text-danger">{registerError.Email}</div>
                  )}
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="formExample">
                    Password
                  </label>
                  <input
                  name="Password"
                    placeholder="********"
                    className="form-control form-control-lg"
                    onChange={handleRegisterFormChange}
                  />
                    {registerError.Password &&(
                    <div className="text-danger">{registerError.Password}</div>
                  )}
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="formExample">
                    Confirm Password
                  </label>
                  <input
                   name="ConfirmPassword"
                    placeholder="********"
                    className="form-control form-control-lg"
                    onChange={handleRegisterFormChange}
                  />
                    {registerError.ConfirmPassword &&(
                    <div className="text-danger">{registerError.ConfirmPassword}</div>
                  )}
                </div>

                <div className="pt-1 mb-4">
                  <button
                    type="submit"
                    className="Main-btn btn btn-primary btn-lg"
                    style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
