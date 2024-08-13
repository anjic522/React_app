



import "./field.css"


import React, { useState } from "react";

const Fieldvalidations = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [technologies, setSkills] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [dob, setDob] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    console.log(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills({
      ...technologies,
      [event.target.name]: event.target.checked,
    });
  };

  const inputStyle = {
    display: "block",
    margin: "10px 0",
    padding: "8px",
    width: "200px",
  };

  const labelStyle = {
    display: "block",
    margin: "10px 0 5px",
  };

  return (
    <div className="form-input">
      <label style={labelStyle} htmlFor="username" >
        Username
      </label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        style={inputStyle}
        id="username"
      />
      <label style={labelStyle} htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassWord(e.target.value)}
        placeholder="Password"
        style={inputStyle}
        id="password"
      />
      <label style={labelStyle} htmlFor="country">
        Country
      </label>
      <select
        name="country"
        value={country}
        onChange={handleCountryChange}
        style={inputStyle}
        id="country"
      >
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Africa">Africa</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Dallas">Dallas</option>
        <option value="West Indies">West Indies</option>
        <option value="Australia">Australia</option>
        <option value="Canada">Canada</option>
      </select>
      <div style={{ marginTop: "10px" }}>
        <span style={labelStyle}>Gender</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleGenderChange}
          />
          Other
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span style={labelStyle}>technologies</span>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={technologies.html}
            onChange={handleSkillsChange}
          />
          html
        </label>
        <label>
          <input
            type="checkbox"
            name="design"
            checked={technologies.javascript}
            onChange={handleSkillsChange}
          />
          javascript
        </label>
        <label>
          <input
            type="checkbox"
            name="marketing"
            checked={technologies.react}
            onChange={handleSkillsChange}
          />
          reactjs
        </label>
      </div>
      <label style={labelStyle} htmlFor="dob">
        Date of Birth
      </label>
      <input
        type="date"
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        placeholder="Date of Birth"
        style={inputStyle}
        id="dob"
      />
    </div>
  );
};

export default Fieldvalidations;

