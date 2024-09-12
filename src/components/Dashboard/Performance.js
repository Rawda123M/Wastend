import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./styles/Performance.css";
import DashboardHeader from "./DashboardHeader";

function Performance() {
  const elements = [<Statistics />, <Insights />];
  const [index, setIndex] = useState("0");

  useEffect(() => {
    const buttons = document.querySelectorAll(".tabs .parent-tab");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        buttons.forEach((button) => {
          button.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    });

    const filters = document.querySelectorAll(".filters .filter");
    filters.forEach((filter) => {
      filter.addEventListener("click", (e) => {
        if (e.target.nodeName === "H5" || e.target.nodeName === "H4") {
          filters.forEach((filter) => {
            filter.classList.remove("active");
          });
          e.target.parentElement.classList.add("active");
        } else {
          filters.forEach((filter) => {
            filter.classList.remove("active");
          });
          e.target.classList.add("active");
        }
      });
    });

    const tabs = document.querySelectorAll(".tabs .inner-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    });
  }, [index]);

  return (
    <div className="page-main performance">
      <Nav />
      <DashboardHeader />
      <div className="content-area">
        <div className="content">
          <div className="content-head">
            <h2>Performance</h2>
            <div className="tabs">
              <button
                className="parent-tab active"
                onClick={() => setIndex("0")}
              >
                Statistics
              </button>
              <button className="parent-tab" onClick={() => setIndex("1")}>
                Insights
              </button>
            </div>
          </div>
          {elements[index]}
        </div>
      </div>
    </div>
  );
}

export default Performance;

// Statistics Tab
function Statistics() {
  //   const elements = [];

  return (
    <>
      <div className="statistics">
        <div style={{ fontWeight: "bold" }} className="card-head">
          All-time statistics
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Here you can see an overview of all your results since you joined
          Wastend. You can see the total number of meals you’ve saved, the
          corresponding CO2 equivalents avoided, the total number of users that
          have ever marked you as their favourite and the amount of impressions
          you've gotten in the app.
        </p>
        <h4 style={{ margin: "40px 0" }}>Stats for selected period</h4>
        <div className="card-data">
          <div className="tabs">
            <button className="inner-tab active">Last 30 days</button>
            <button className="inner-tab">Last 12 weeks</button>
            <button className="inner-tab">Last 12 months</button>
          </div>
          <div className="stats filters">
            <div className="filter active">
              <h5>Meals Saved</h5>
              <h4>-</h4>
            </div>
            <div className="filter">
              <h5>Favourites</h5>
              <h4>-</h4>
            </div>
            <div className="filter">
              <h5>Impressions</h5>
              <h4>-</h4>
            </div>
          </div>
          <div className="period">
            <div className="data">
              <h5>No data to show for the selected period</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Insights Tab
function Insights() {
  const [data, setData] = useState("0");
  const element = [
    <OverallRating />,
    <SurBagRating />,
    <StrExpRating />,
    <Cancellations />,
    <Refunds />,
  ];
  return (
    <>
      <div className="insights">
        <div style={{ fontWeight: "bold" }} className="card-head">
          Insights
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          This page gives you an overview of how your store is doing on Wastend
          according to user ratings and cancellations. Each box shows the
          average rating or rate for your store within the selected time frame.
          Click on each of the five metrics below to see a detailed breakdown.
        </p>
        <h4 style={{ margin: "40px 0" }}>Stats for selected period</h4>
        <div className="card-data">
          <div className="tabs">
            <button className="inner-tab active">Last 30 days</button>
            <button className="inner-tab">Last 12 weeks</button>
            <button className="inner-tab">Last 12 months</button>
          </div>
          <div className="insights filters">
            <div onClick={() => setData("0")} className="filter active">
              <h5>Overall rating</h5>
              <h4>-</h4>
            </div>
            <div onClick={() => setData("1")} className="filter">
              <h5>Surprise Bag rating</h5>
              <h4>-</h4>
            </div>
            <div onClick={() => setData("2")} className="filter">
              <h5>Store experience rating</h5>
              <h4>-</h4>
            </div>
            <div onClick={() => setData("3")} className="filter">
              <h5>Cancellations</h5>
              <h4>-</h4>
            </div>
            <div onClick={() => setData("4")} className="filter">
              <h5>Refunds</h5>
              <h4>-</h4>
            </div>
          </div>
          <div className="filter-data">{element[data]}</div>
        </div>
      </div>
    </>
  );
}

function OverallRating() {
  return (
    <>
      <div className="info">
        <h5>Overall rating</h5>
        <p>
          Once a customer has picked up their Surprise Bag we ask them to rate
          their purchase from one to five stars. This is a rating of their
          overall experience. Please aim to keep this rating above 3,5.
        </p>
      </div>
    </>
  );
}

function SurBagRating() {
  return (
    <>
      <div className="info">
        <h5>Surprise Bag rating</h5>
        <p>
          The Surprise Bag rating shows how the customer valued the quantity,
          quality and variety of food in their Surprise Bag. Please aim to keep
          this rating above 3,5.
        </p>
      </div>
    </>
  );
}

function StrExpRating() {
  return (
    <>
      <div className="info">
        <h5>Store experience rating</h5>
        <p>
          The store experience rating describes the customers' experience during
          the collection part of their purchase. This rating is an indication of
          what the customers thought of the service and the waiting time in your
          store. Please aim to keep this rating above 3,5.
        </p>
      </div>
    </>
  );
}

function Cancellations() {
  return (
    <>
      <div className="info">
        <h5>Cancellations</h5>
        <p>
          The cancellation rate is the percentage orders that your store has
          cancelled. We expect you to keep the cancellation rate below 5%.
          <br />
          <br />
          <br /> If your cancellation rate is too high, consider adjusting your
          weekly schedule to better reflect the amount of surplus food you have
          available. If it is necessary to make cancellations, please do so at
          least two hours before the collection time starts.
        </p>
      </div>
    </>
  );
}
function Refunds() {
  return (
    <>
      <div className="info">
        <h5>Refunds</h5>
        <p>
          The refund rate is the percentage of orders that have been refunded. A
          meal is refunded when customers arrived at a closed store, were
          unhappy about their food or if there was no food left. We expect a
          refund rate below 5%.
          <br />
          <br />
          <br /> If your refund rate is too high, it's likely because you forgot
          to register holidays. Remember to add a Special Day on days where your
          store is closed, and when you are open, to keep an eye on your
          Dashboard and adjust if needed.
        </p>
      </div>
    </>
  );
}
