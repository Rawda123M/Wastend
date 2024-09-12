import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./styles/Dashboard.css";
import "./styles/MediaQueries.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import DashboardHeader from "./DashboardHeader";
function Dashboard() {
  // const params = useParams();

  useEffect(() => {
    if (localStorage.getItem("Bag Created")) {
      return;
    } else {
      localStorage.setItem("Bag Created", "false");
    }
  }, []);

  return (
    <div className="page-main dashboard">
      <Nav />
      <DashboardHeader />
      <div className="content-area">
        <div className="content">
          <h2 style={{ marginBottom: "30px" }}>
            Hi, {localStorage.getItem("store Name")}
          </h2>
          {localStorage.getItem("Bag Created") === "true" ? (
            <BagCreated />
          ) : (
            <BagNotCreated />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

function BagCreated() {
  function showAccordion(e) {
    if (e.target.classList.contains("accordion-title")) {
      let details = e.target.nextElementSibling;
      details.classList.toggle("show");
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-title">Your Surprise Bag</div>
        <div className="card-content">
          <div className="card-head">
            <div className="card-img">
              <div className="shop-logo">H</div>
              <div className="edit-img">Edit</div>
            </div>
            <p className="data-title">Name</p>
            <p className="data-details">{localStorage.getItem("Bag Name")}</p>
            <p className="data-title">Description</p>
            <p className="data-details">{localStorage.getItem("Bag Desc")}</p>
            <p className="data-title">Minimum value per Surprise Bag</p>
            <p className="data-details">GBP 12.00</p>
            <p className="data-title">Price in app</p>
            <p className="data-details">GBP 4.00</p>
          </div>
        </div>
      </div>
      <div className="tips">
        <h3>Tips and resources</h3>
        <div className="accordions">
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What is a surprise bag?
            </h3>
            <div className="accordion-details">
              A Surprise Bag is what customers buy from you on the Too Good To
              Go app. As most stores can't predict what will be left at the end
              of the day, we make sure not to specify exactly what the contents
              of the bags will be. The contents will vary from day to day and
              always be a surprise to the customer.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              Earnings and payouts
            </h3>
            <div className="accordion-details">
              We take a small fee of 1.09 GBP for every Surprise Bag sold on our
              app – the rest is yours! Once your minimum payout amount has been
              reached, we pay your earnings into your bank account every 3
              months.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              How do I sell my surplus food on your app?{" "}
            </h3>
            <div className="accordion-details">
              Once you've set up your account, your store will be visible to
              customers on our app. On the days you've selected, a set number of
              Surprise Bags will automatically be put up for sale. In the last
              30 minutes before your store closes, customers that have reserved
              a Surprise Bag will come to your store to pick it up. Payment is
              automatically handled in the app – just check for a receipt on
              each customer's phone and hand them their Surprise Bag.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What does Wastend cost?{" "}
            </h3>
            <div className="accordion-details">
              When you sell your surplus food on our marketplace, we take a
              small fee of 1.09 GBP for each sale you make and an annual service
              fee of 39.00 GBP. These fees are deducted from your earnings,
              which means we’ll never bill you for our services. You can always
              cancel your account with us at any time without any commitment or
              extra costs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BagNotCreated() {
  function showAccordion(e) {
    if (e.target.classList.contains("accordion-title")) {
      let details = e.target.nextElementSibling;
      details.classList.toggle("show");
    }
  }
  const [data, setData] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRaduis: "20px",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    if (data === 4) {
      let progressBtn = document.getElementById("progressBtn");
      progressBtn.setAttribute("onClick", setOpen(false));
    }
  }, [data]);

  const modalData = [<Category />, <Storename />, <Prices />, <BagsPerDay />];

  return (
    <>
      <div className="create-bag-area">
        <h3>
          To start selling your surplus food, create your first Surprise Bag
        </h3>
        <button onClick={handleOpen}>Create bag</button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="module-head">
            <h2>Create Your Surprise bag</h2>
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClose();
                setData(0);
              }}
              icon={faXmark}
            />
          </div>
          <div className="info">
            <p>
              Let customers know what they can expect in their Surprise Bags.
            </p>
          </div>
          {modalData[data]}
          <button
            id="progressBtn"
            className="primary-button"
            onClick={() => setData(data + 1)}
          >
            Continue
          </button>
        </Box>
      </Modal>

      <div className="tips">
        <h3>Tips and resources</h3>
        <div className="accordions">
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What is a surprise bag?
            </h3>
            <div className="accordion-details">
              A Surprise Bag is what customers buy from you on the Too Good To
              Go app. As most stores can't predict what will be left at the end
              of the day, we make sure not to specify exactly what the contents
              of the bags will be. The contents will vary from day to day and
              always be a surprise to the customer.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              Earnings and payouts
            </h3>
            <div className="accordion-details">
              We take a small fee of 1.09 GBP for every Surprise Bag sold on our
              app – the rest is yours! Once your minimum payout amount has been
              reached, we pay your earnings into your bank account every 3
              months.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              How do I sell my surplus food on your app?{" "}
            </h3>
            <div className="accordion-details">
              Once you've set up your account, your store will be visible to
              customers on our app. On the days you've selected, a set number of
              Surprise Bags will automatically be put up for sale. In the last
              30 minutes before your store closes, customers that have reserved
              a Surprise Bag will come to your store to pick it up. Payment is
              automatically handled in the app – just check for a receipt on
              each customer's phone and hand them their Surprise Bag.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What does Wastend cost?{" "}
            </h3>
            <div className="accordion-details">
              When you sell your surplus food on our marketplace, we take a
              small fee of 1.09 GBP for each sale you make and an annual service
              fee of 39.00 GBP. These fees are deducted from your earnings,
              which means we’ll never bill you for our services. You can always
              cancel your account with us at any time without any commitment or
              extra costs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Category() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Meals" control={<Radio />} label="Meals" />
        <FormControlLabel
          value="Bread&Pastries"
          control={<Radio />}
          label="Bread&Pastries"
        />
        <FormControlLabel
          value="Groceries"
          control={<Radio />}
          label="Groceries"
        />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

function Storename() {
  const [BagName, setBagName] = useState("");
  const [BagDesc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("Bag Name", BagName);
    localStorage.setItem("Bag Desc", BagDesc);
  }, [BagName, BagDesc]);
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        sx={{ marginBottom: "20px" }}
        variant="outlined"
        onChange={(e) => setBagName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        sx={{ marginBottom: "20px" }}
        variant="outlined"
        onChange={(e) => setDesc(e.target.value)}
      />
    </>
  );
}

function Prices() {
  function showAccordion(e) {
    if (e.target.classList.contains("accordion-title")) {
      let details = e.target.nextElementSibling;
      details.classList.toggle("show");
    }
  }

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Price</FormLabel>
        <RadioGroup
          sx={{ marginBottom: "20px" }}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="12.00 USD value per bag"
            control={<Radio />}
            label="12.00 USD value per bag"
          />
          <FormControlLabel
            value="18.00 USD value per bag"
            control={<Radio />}
            label="18.00 USD value per bag"
          />
          <FormControlLabel
            value="30.00 USD value per bag"
            control={<Radio />}
            label="30.00 USD value per bag"
          />
        </RadioGroup>
      </FormControl>

      <h2 style={{ marginBottom: "20px" }}>Need help?</h2>
      <div className="tips">
        <div className="accordions">
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              How much will I earn per Surprise Bag sold?{" "}
            </h3>
            <div className="accordion-details">
              For each Surprise Bag sold on our platform, we take a small fee of
              1.79 USD – the rest of the amount is yours.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What is the difference between price in app and value per Surprise
              Bag?{" "}
            </h3>
            <div className="accordion-details">
              Surprise Bags are priced at 1/3 of their contents' original retail
              value. That means that if a Surprise Bag is sold at 5.99 USD in
              the app, its contents must be worth at least 18.00 USD. This
              ensures that you and our customers get a great deal on food that
              would otherwise go to waste.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              How do payouts work?{" "}
            </h3>
            <div className="accordion-details">
              Once your minimum payout amount has been reached, we pay your
              earnings into your bank account every 3 months. Be sure to add
              your bank account information for us to be able to pay you out. We
              will store this information securely and only use it to send you
              your payouts.
            </div>
          </div>
          <hr />
          <div className="accordion">
            <h3 onClick={(e) => showAccordion(e)} className="accordion-title">
              What does Wastend cost?{" "}
            </h3>
            <div className="accordion-details">
              When you sell your surplus food on our marketplace, we take a
              small fee of 1.79 USD for each sale you make and an annual service
              fee. These fees are deducted from your earnings, which means we’ll
              never bill you for our services. You can always cancel your
              account with us at any time without any commitment or extra costs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BagsPerDay() {
  localStorage.setItem("Bag Created", "true");
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const style = {
    textAlign: "center",
  };

  function toggleBtn(btn) {
    btn.classList.toggle("selected");
  }
  return (
    <>
      <h2>Surprise Bags per day</h2>
      <p style={{ fontSize: "13px", color: "grey" }}>
        Set the number of Surprise Bags per day
      </p>
      <ToggleButtonGroup
        sx={style}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="2">2</ToggleButton>
        <ToggleButton value="3">3</ToggleButton>
        <ToggleButton value="4">4</ToggleButton>
      </ToggleButtonGroup>
      <hr style={{ margin: "20px 0" }} />
      <div className="days-section">
        <h5>Days of the week</h5>
        <p style={{ fontSize: "13px", color: "grey" }}>
          Set which days you want to sell{" "}
        </p>
        <div className="days">
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Sun
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Mon
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Tue
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Wen
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Thu
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Fri
          </button>
          <button onClick={(e) => toggleBtn(e.target)} className="day">
            Sat
          </button>
        </div>
      </div>
    </>
  );
}
