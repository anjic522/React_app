



import { useState } from "react";

const ControlForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usererror, setUserError] = useState(false);
  const [passworderror, setPassWordError] = useState(false);
  const [formdata, setFormData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    if (username && password) {
      alert("form success");
    } else {
      alert("enter valid credentials");
    }
    setUserName("");
    setPassword("");
  };

  const EmailAdderss = (event) => {
    const userEntered = event.target.value;
    console.log(userEntered);
    setUserName(userEntered);
    if (validate(userEntered)) {
      setUserError(!true);
    } else {
      setUserError(!false);
    }
  };
  const validate = (value) => {
    return value.length < 15;
  };

  const PassWord = (event) => {
    const userEnteredPassWord = event.target.value;
    console.log(userEnteredPassWord);
    setPassword(userEnteredPassWord);
    if (validate(userEnteredPassWord)) {
      setPassWordError(!true);
    } else {
      setPassWordError(!false);
    }
  };

  return (
    <>
      <h2>Registration form with validation</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={username}
            onChange={EmailAdderss}
          />
          {usererror && (
            <span style={{ color: "red" }}>
              Invalid username please enter less than 15 characters
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={PassWord}
          />
          {passworderror && (
            <span style={{ color: "red" }}>
              Invalid username please enter less than 15 characters
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default ControlForm;