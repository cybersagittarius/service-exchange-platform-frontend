import React from "react"

import MyAlert from "../layout/Alert";
import ButtonMU from "../layout/ButtonMU";

//3rd party package
import RegionCountrySelector from "../selector/RegionCountrySelector";

const RegistrationForm = (props) => {
  return (
    <>
      <div className="backRegister">
        <div className="card div-center">
          <div className="container">
            <div className="card-body">

              <div className="d-flex justify-content-end">
                <ButtonMU
                  buttonVariant={"outlined"}
                  buttonColor={"primary"}
                  buttonSize={"small"}
                />
              </div>
              <br />
              <form onSubmit={props.submitHandler}>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <label>First Name</label>

                    <input
                      type="text"
                      name="firstName"
                      value={props.firstName}
                      placeholder="your first name"
                      className="form-control"
                      onChange={props.changeFirstName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-6">
                    <label>Last Name</label>

                    <input
                      type="text"
                      name="lastName"
                      value={props.lastName}
                      placeholder="your last name"
                      className="form-control"
                      onChange={props.changeLastName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-12">
                    <label>Country</label>
                    <RegionCountrySelector
                      country={props.country}
                      region={props.region}
                      setParentCountry={(val) => props.changeCountry(val)}
                      setParentRegion={(val) => props.changeRegion(val)}
                    />
                  </div>

                  <div className="form-group col-lg-7">
                    <label>Email</label>

                    <input
                      type="text"
                      name="email"
                      value={props.email}
                      placeholder="your email address"
                      className="form-control"
                      onChange={props.changeEmail}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-5">
                    <label>User Name</label>

                    <input
                      type="text"
                      name="username"
                      value={props.userName}
                      placeholder="unique, no space"
                      className="form-control"
                      onChange={props.changeUserName}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-7">
                    <label>
                      Set Password (8-12 characters, at least 1 uppercase, 1 lowercase, 1
                      number, 1 special character. No Whitespace)
                    </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      value={props.passWord}
                      placeholder="Please ensure you follow the password setting request"
                      className="form-control"
                      onChange={props.changePassWord}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-5">
                    <label className="mb-4">Confirm Password</label>
                    <br />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={props.confirmPW}
                      placeholder="Please confirm your password"
                      className="form-control"
                      onChange={props.changeConfirmPW}
                      required
                    />
                  </div>

                  <div className="form-group col-lg-3">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Submit
                    </button>
                  </div>
                  <div className="form-group col-lg-9">
                    {props.alertEM && (
                      <MyAlert
                        alertType={"warning"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Email "}
                      />
                    )}
                    {props.alertPW && (
                      <MyAlert
                        alertType={"danger"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Password "}
                      />
                    )}
                    {props.alertPWCheck && (
                      <MyAlert
                        alertType={"warning"}
                        alertHeading={"Error!"}
                        alertMessage={"Inconsistent Password!"}
                      />
                    )}
                  </div>                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
