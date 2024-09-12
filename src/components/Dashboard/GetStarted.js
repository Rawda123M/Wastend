import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import "./styles/GetStarted.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useParams } from "react-router-dom";
export default function GetStarted() {
  const [page, setPage] = React.useState(0);
  const elements = [<SearchStore />, <StoreType />, <StoreDetails />];
  const params = useParams();
  useEffect(() => {
    if (page === 2) {
      let removed = document.getElementById("submit");
      removed.remove();
      let added = document.createElement("a");
      added.setAttribute("href", `/${params.loggedUser}/dashboard`);
      added.className = `stepButton`;
      added.innerHTML = `Save`;
      added.style.display = "block";
      let formHolder = document.querySelector(".form-holder");
      formHolder.appendChild(added);
    }
  }, [page]);
  return (
    <Stack spacing={2}>
      <div className="getStarted">
        <div className="container">
          <div className="form-holder">
            {elements[page]}
            <button
              onClick={() => setPage(page + 1)}
              id="submit"
              className="stepButton"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Stack>
  );
}

function SearchStore() {
  const [storeName, setStoreName] = useState("");
  useEffect(() => {
    if (storeName === "") {
      document.getElementById("submit").classList.add("disabled");
      document.getElementById("submit").style.pointerEvents = "none";
    } else {
      document.getElementById("submit").classList.remove("disabled");
      document.getElementById("submit").style.pointerEvents = "auto";
      localStorage.setItem("store Name", storeName);
    }
  }, [storeName]);
  return (
    <>
      <form>
        <div className="form-head">
          <h2>Search for your store</h2>
          <p>
            Enter your store's name in the search field below to start setting
            up your account
          </p>
        </div>
        <div className="inputs">
          <input
            id="storeName"
            type="text"
            placeholder="Search for your store's name"
            required
            onChange={(e) => setStoreName(e.target.value)}
          />
          <a href="!#">I Can't find my store</a>
        </div>
      </form>
    </>
  );
}

function StoreType() {
  const [storeType, setStoreType] = React.useState("");

  const handleChange = (event) => {
    setStoreType(event.target.value);
  };
  useEffect(() => {
    if (storeType === "") {
      document.getElementById("submit").classList.add("disabled");
      document.getElementById("submit").style.pointerEvents = "none";
    } else {
      document.getElementById("submit").classList.remove("disabled");
      document.getElementById("submit").style.pointerEvents = "auto";
      localStorage.setItem("store Type", storeType);
    }
  }, [storeType]);
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        <h2>Store Type</h2>
        <p>
          Select the category that best describes your store and the type of
          food you offer
        </p>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={storeType}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Restaurant"
          control={<Radio />}
          label="Restaurant"
        />
        <FormControlLabel value="Cafe" control={<Radio />} label="Cafe" />
        <FormControlLabel
          value="Buffet restaurant"
          control={<Radio />}
          label="Buffet restaurant"
        />
        <FormControlLabel
          value="Takeout restaurant"
          control={<Radio />}
          label="Takeout restaurant"
        />
        <FormControlLabel
          value="Sushi restaurant"
          control={<Radio />}
          label="Sushi restaurant"
        />
        <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

function StoreDetails() {
  let localstoreName = localStorage.getItem("store Name");
  let localstoreType = localStorage.getItem("store Type");
  const [storeName, setStoreName] = useState(localstoreName);
  useEffect(() => {
    localStorage.setItem("store Name", storeName);
  }, [storeName]);

  return (
    <>
      <div className="form-head">
        <h2>Review your details</h2>
        <p>
          Take a look at the details about your business and the food you offer
          below, and fill out what is missin
        </p>

        <h4>Your store's name and address</h4>
        <p>Please confirm or edit your store's name and address</p>
      </div>
      <label htmlFor="storeName">Store name</label>
      <input
        type="text"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <label>Store type</label>
      <p className="storeType">{localstoreType}</p>
    </>
  );
}
 