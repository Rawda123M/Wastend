import React, { useState } from "react";
import Nav from "./Nav";
import Switch from "@mui/material/Switch";
import "./styles/Schedule.css";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import DashboardHeader from "./DashboardHeader";

function Schedule() {
  const date = new Date();

  const [value, setValue] = useState(dayjs(date));
  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednsday",
    "thursday",
    "friday",
    "saturday",
  ];

  function handleSwitch(day, checked) {
    if (!checked) {
      let inputsDiv = document.querySelector(`.inputs#${day}`);
      inputsDiv.style.visibility = "hidden";
    } else {
      let inputsDiv = document.querySelector(`.inputs#${day}`);
      inputsDiv.style.visibility = "visible";
    }
  }

  return (
    <div className="page-main">
      <Nav />
      <DashboardHeader />

      <div className="content-area">
        <div className="content">
          <div className="weekly-sch">
            {weekDays.map((day) => {
              return (
                <div className="row" key={day} id={day}>
                  <h5>{day}</h5>
                  {/* Switch */}
                  <div className="switch">
                    <Switch
                      id={day}
                      defaultChecked={true}
                      inputProps={{ "aria-label": "controlled" }}
                      onChange={(e, checked) =>
                        handleSwitch(e.target.id, checked)
                      }
                    />
                    <h5>Pick-up</h5>
                  </div>
                  {/* Switch */}

                  {/* Day Limit */}
                  <div className="inputs" id={day}>
                    <div className="day-limit">
                      <input id={day} type="number" min={0} max={30} />
                      <h5>
                        Daily limit:<span>30</span>
                      </h5>
                    </div>
                    {/* Day Limit */}

                    {/* Time Pickers */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker", "TimePicker"]}>
                        <TimePicker
                          id={day}
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                        <TimePicker
                          id={day}
                          value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    {/* Time Pickers */}
                  </div>
                </div>
              );
            })}
            <button className="primary-button">Update Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
