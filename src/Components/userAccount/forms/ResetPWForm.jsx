import MyAlert from "../layout/Alert";
import ButtonMU from "../layout/ButtonMU"

const ResetPWForm = (props) => {
  return (
    <>
      <div className="backResetPW">
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
            <br/>
              <form onSubmit={props.submitHandler}>
                <div className="form-row">
                  <div className="form-group col-lg-12">
                    <label>
                      Enter your email and we will send you a link to get back
                      into your account
                    </label>

                    <input
                      type="text"
                      name="email"
                      placeholder="your email account"
                      className="form-control"
                      onChange={props.changeEmail}
                      required
                    />
                    <div className="mt-3">
                      <button type="submit" className="btn btn-sm btn-primary">
                        Reset
                      </button>
                    </div>
                    <br />
                    {props.alertEM && (
                      <MyAlert
                        alertType={"danger"}
                        alertHeading={"Error!"}
                        alertMessage={"Please Enter A Valid Email "}
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

export default ResetPWForm;
