import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
function BusinessForm(props) {
  return (
    <>
      <form id="register">
        <h2 className="heading">
          {props.normalText} <span>{props.specText}</span>
        </h2>
        <p>Tell us about your business to get started:</p>
        <div className="form-row">
          <label htmlFor="select">Which best describes you?</label>
          <select id="select" required>
            <option>I own a store</option>
            <option>I am a user</option>
          </select>
        </div>
        <input type="text" placeholder="Business name" required />
        <input
          type="number"
          placeholder="Phone number"
          required
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <input type="text" placeholder="Email address" required />
        <input type="text" placeholder="City" required />
        <FormControlLabel
          required
          sx={{
            color: "var(--main-button)",
            textAlign: "start",
            margin: "20px 0",
          }}
          control={<Checkbox />}
          label="I agree to receive newsletters and information from Wastend by email and by SMS. I can unsubscribe at any time."
        />
        <input type="submit" className="main-button" value={"Sign Up Now"} />
        <div className="login">
          <span>Already a member?</span>
          <Link to={"/MyStoreLogin"}>Log In</Link>
        </div>
      </form>
    </>
  );
}

export default BusinessForm;
