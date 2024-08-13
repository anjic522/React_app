import { useState } from "react";
import { Table } from "react-bootstrap";

const Registration = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usererror, setUsererror] = useState(null);
  const [passerror, setPasserror] = useState(null);

  const [userData, setUserData] = useState({});
  const [list, setList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username && password) {
      alert("form successfull");
    } else {
      alert("pls enter correct details");
    }

    const userExist = list.includes(username + "" + password);

    if (userExist) {
      alert("user already exist");
    } else {
      setList([...list]);
    }
  };

  const UserName = (event) => {
    const userNameEntered = event.target.value;
    console.log(userNameEntered);
    setUsername(userNameEntered);
    if (userNameEntered.length > 1 && userNameEntered.length < 20) {
      setUsererror(true);
    } else {
      setUsererror(false);
    }
  };

  const PassWord = (event) => {
    const passwordEntered = event.target.value;
    console.log(passwordEntered);
    setPassword(passwordEntered);
    if (validation(passwordEntered)) {
      setPasserror(true);
    } else {
      setPasserror(false);
    }
  };

  const validation = (input) => {

    return input.length < 15;
  };
  return (
    <>
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
            onChange={UserName}
          />
          {!usererror ? (
            <span style={{ color: "red" }}>(length should be 8 - 15)</span>
          ) : (
            <span style={{ color: "red" }}>(user name satisfied)</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={PassWord}
          />
          {!passerror ? (
            <span style={{ color: "red" }}>
              make sure password have one number and capital & small alphabets
              and special symbols also included (length should be 8 - 15)
            </span>
          ) : (
            <span style={{ color: "red" }}>password satisfied</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Table>
        <thead>
          <tr>usrname</tr>
          <tr>password</tr>
        </thead>
        <tbody>
          {list.map((each) => {
            <div>
              <h1>{each}</h1>
            </div>;
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Registration;