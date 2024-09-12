import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Settings.css";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DashboardHeader from "./DashboardHeader";

function Settings() {
  const elements = [
    <SettingsTab />,
    <StoreTab />,
    <NotificationsTab />,
    <AccountTab />,
  ];
  const [index, setIndex] = useState("0");

  const buttons = document.querySelectorAll(".tabs button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
  return (
    <div className="page-main">
      <Nav />
      <DashboardHeader />

      <div className="content-area">
        <div className="content">
          <div className="content-head">
            <h2>Settings</h2>
            <div className="tabs">
              <button className="active" onClick={() => setIndex("0")}>
                Surpise Bag
              </button>
              <button onClick={() => setIndex("1")}>Store</button>
              <button onClick={() => setIndex("2")}>Notifications</button>
              <button onClick={() => setIndex("3")}>Account</button>
            </div>
          </div>
          {elements[index]}
        </div>
      </div>
    </div>
  );
}

export default Settings;

function SettingsTab() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [reccs, setReccs] = useState("");
  useEffect(() => {
    const reccsSaveBtn = document.querySelector(".Btn");
    if (reccs !== "") {
      reccsSaveBtn.classList.remove("disabled");
      localStorage.setItem("reccs", reccs);
    } else {
      reccsSaveBtn.classList.add("disabled");
    }
  }, [reccs]);
  const [collection, setCollection] = React.useState(
    "Food container and bag, customer may bring their own bag"
  );

  // Collection Handle Change
  const handleChange = (event) => {
    setCollection(event.target.value);
    const CollectionSaveBtn = document.querySelector(".Btn.collection");
    CollectionSaveBtn.classList.remove("disabled");
    localStorage.setItem("collection", collection);
  };

  return (
    <>
      <div className="bag-details-card settings-card">
        <div className="card-head">Surpise Bag details</div>
        <hr />
        <div className="card-data">
          <div className="row">
            <div className="block">
              <p className="title">Name</p>
            </div>
          </div>
          <div className="row">
            <div className="block">
              <p className="title">Description</p>
              <p>Save a Surprise Bag and enjoy a delicious meal.</p>
            </div>
          </div>
          <div className="row">
            <div className="block">
              <p className="title">Price</p>
              <p>4.99USD</p>
            </div>
            <div className="block">
              <p className="title">Minimum value</p>
              <p>15USD</p>
            </div>
            <div className="block">
              <p className="title">Category</p>
              <p>--</p>
            </div>
            <div className="block">
              <p className="title">Dietary type</p>
              <p>--</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Item-Images-card settings-card">
        <div className="card-head">Item Images</div>
        <hr />
        <div className="card-data">
          <div className="row">
            <p>Logo</p>
            <div className="logo">H</div>
          </div>
          <div className="row">
            <p>Background image</p>
            <div className="bg-img"></div>
            <button className="change-img">Change Image</button>
          </div>
        </div>
      </div>
      <div className="food-safety-rec settings-card">
        <div className="card-head">Food safety recommendations</div>
        <hr />
        <div className="card-data">
          <h4 style={{ marginBottom: "10px" }}>Buffet food safety</h4>
          <p>
            If this Surprise Bag contains food from a buffet, please enable the
            toggle below. This way we can show buffet-specific food safety
            recommendations to the users in the app.
          </p>
          <div className="row">
            <h5>This Surprise Bag contains food from a buffet</h5>
            <Switch
              {...label}
              onChange={() => {
                window.alert("Your Changes were saved");
              }}
            />
          </div>
          <hr></hr>
          <div className="row">
            <h4>
              Additional recommendations{" "}
              <span style={{ color: "grey", fontWeight: "normal" }}>
                (optional)
              </span>
            </h4>
            <p style={{ lineHeight: "1.5", marginTop: "10px" }}>
              If your business has defined recommendations on how to handle and
              store your food, you’re welcome to share them in the field below.
              The recommendations will be shown in the Too Good To Go app.
            </p>
          </div>
          <input
            type="text"
            value={reccs}
            className="reccs"
            placeholder="Enter your description here"
            onChange={(e) => setReccs(e.target.value)}
          />
          <button
            onClick={() => {
              window.alert("Your Changes were saved");
              setReccs("");
            }}
            className="primary-button Btn disabled"
          >
            Save
          </button>
        </div>
      </div>
      <div className="collection-info settings-card">
        <div className="card-head">Collection information</div>
        <hr />
        <div className="card-data">
          <h4>Packaging</h4>
          <p>
            Select the type of packaging you will be offering to customers when
            they collect their order.
          </p>
        </div>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={collection}
              onChange={handleChange}
            >
              <MenuItem
                value={
                  "Food container and bag, customer may bring their own bag"
                }
              >
                Food container and bag, customer may bring their own bag
              </MenuItem>
              <MenuItem value={"Food container and bag"}>
                Food container and bag
              </MenuItem>
              <MenuItem value={"Food container, no bag"}>
                Food container, no bag
              </MenuItem>
            </Select>
          </FormControl>
          <button className="primary-button Btn collection disabled">
            Save
          </button>
        </Box>
      </div>
    </>
  );
}

function StoreTab() {
  const [ref, setRef] = useState("");
  useEffect(() => {
    const refSaveBtn = document.querySelector(".Btn.ref");
    if (ref !== "") {
      refSaveBtn.classList.remove("disabled");
      localStorage.setItem("reference", ref);
    } else {
      refSaveBtn.classList.add("disabled");
    }
  }, [ref]);

  return (
    <>
      <div className="storeinfo settings-card">
        <div className="card-head">Store information</div>
        <hr />
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Here you can see the information we have registered about your store.
          If any of this information is incorrect and needs to be changed,
          please get in touch with us.
        </p>
        <div className="card-data">
          <div className="col">
            <div className="left">
              <h4>Store details</h4>
              <p className="title">Name</p>
              <p>{localStorage.getItem("store Name")}</p>
              <p className="title">Address</p>
              <p>1400 Keller Parkway</p>
              <p className="title">Postal code</p>
              <p>201515</p>
              <p className="title">City</p>
              <p>Alexandria</p>
              <p className="title">Region</p>
              <p>Egypt</p>
              <p className="title">Country</p>
              <p>Egypt</p>
              <p className="title">Currency</p>
              <p>EGP</p>
            </div>
            <div className="mid"></div>
            <div className="right">
              <h4>Store details</h4>
              <p className="title">Phone number</p>
              <p>+20123456789</p>
              <p className="title">Emails</p>
              <p>hahaha@gmail.com</p>
            </div>
          </div>
          <hr className="center" />
          <h4 style={{ marginTop: "20px" }}>Store description</h4>
          <p style={{ color: "grey", marginTop: "10px" }}>
            Your store does not currently have a description.
          </p>
        </div>
      </div>
      <div className="storeinfo settings-card">
        <div className="card-head">
          Internal store reference{" "}
          <span style={{ color: "grey" }}>(optional)</span>
        </div>
        <hr />
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          If your store is part of a larger chain and you have an internal store
          reference for reporting, you can change it here. If specified, it will
          be used in chain reports sent by Too Good To Go.
        </p>
        <TextField
          sx={{ width: "100%", marginTop: "10px" }}
          id="standard-basic"
          variant="standard"
          onChange={(e) => setRef(e.target.value)}
        />
        <button className="primary-button Btn ref disabled">Save</button>
        <div className="card-data"></div>
      </div>
    </>
  );
}

function NotificationsTab() {
  return (
    <>
      <div className="storeinfo settings-card">
        <div className="card-head">Email settings</div>
        <hr />
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Email settings We send you different kinds of emails about the orders
          you receive on the Too Good To Go platform. Here you can select the
          ones you would like to receive and see which email addresses we will
          send them to.
        </p>
        <div className="card-data">
          <div className="row">
            <div className="block">
              <h4>Order confirmation</h4>
              <p>Email sent for each order that has been placed.</p>
            </div>
            <Switch inputProps={{ "aria-label": "controlled" }} />
            <hr />
          </div>
          <div className="row">
            <div className="block">
              <h4>Order cancellation</h4>
              <p>
                Email sent if an order has been cancelled before it has been
                collected.
              </p>
            </div>
            <Switch inputProps={{ "aria-label": "controlled" }} />
            <hr />
          </div>
          <div className="row">
            <div className="block">
              <h4>Monthly Insights</h4>
              <p>
                Monthly email detailing your results and performance on Too Good
                To Go.
              </p>
            </div>
            <Switch inputProps={{ "aria-label": "controlled" }} />
            <hr />
          </div>
          <div className="row">
            <div className="block">
              <h4>Marketing emails</h4>
              <p>
                Newsletters, updates to MyStore and other emails relevant to
                your store.
              </p>
            </div>
            <Switch inputProps={{ "aria-label": "controlled" }} />
            <hr />
          </div>
          <h4>These emails are sent to the following addresses:</h4>
          <p className="email">hahaha@gmail.com</p>
        </div>
      </div>
    </>
  );
}

function AccountTab() {
  const [lang, setLang] = useState("English(UK)");
  return (
    <>
      <div className="Account settings-card">
        <div className="card-head">Account information</div>
        <hr />
        <div className="card-data">
          <p style={{ margin: "10px 0" }} className="title">
            User's name
          </p>
          <p>Unknown</p>
          <p style={{ margin: "10px 0" }} className="title">
            User's email address
          </p>
          <p>hahaha@gmail.com</p>
        </div>
      </div>
      <div className="Accountlang settings-card">
        <div className="card-head">Language</div>
        <hr />
        <div className="card-data">
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            sx={{ width: "100%" }}
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <MenuItem value={"En-Uk"}>English(UK)</MenuItem>
            <MenuItem value={"En-US"}>English(US)</MenuItem>
            <MenuItem value={"Gr"}>Germany</MenuItem>
            <MenuItem value={"italy"}>Italiano</MenuItem>
          </Select>
        </div>
      </div>
      <div className="cookies settings-card">
        <div className="card-head">Cookie consent</div>
        <hr />
        <div className="card-data">
          <p>
            To be able to give you an optimal user experience, we collect,
            process, and store data about you and your use of our services.
          </p>
        </div>
      </div>
    </>
  );
}

// Account information
