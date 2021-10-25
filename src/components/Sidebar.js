import React from "react";
import { useState } from "react";
import "./css/Sidebar.css";

function Sidebar(props) {
  // const [main, setMain] = useState(false);

  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  const [errnumber, setErrNumber] = useState("");
  const [errDate, setErrDate] = useState("");

  // setNumber(event.target.value);
  const handleChange = ({ target: { name, value } }) => {
    if (name === "number") {
      setNumber(value);
      if (value < 10) {
        setErrNumber("Number should be greater than 10");
      } else {
        setErrNumber("");
      }
    }

    if (name === "date") {
      setDate(value);
      let date = new Date().toDateString();
      let dummyValue = new Date(value).toDateString();
      // console.log(date);

      if (date !== dummyValue) {
        setErrDate("Date should be today date");
      } else {
        setErrDate("");
      }
    }

    console.log("called");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (errDate === "" && errnumber === "") {
      console.log(date, number);
    }
  };

  return (
    <div className="sidebar bg-primary ">
      <button
        className="btn btn-success text mt-3"
        onClick={() => props.parent()}
      >
        Main
      </button>

      <form className="mt-3 p-3 ">
        <div className="form-group">
          <input
            className="form-control"
            type="number"
            value={number}
            name="number"
            placeholder="enter the number"
            onChange={handleChange}
          />
        </div>

        <p className="text-center bg-warning p-2 my-2">{errnumber}</p>
        <div className="form-group">
          <input
            className="form-control"
            type="date"
            value={date}
            name="date"
            onChange={handleChange}
          />
        </div>

        <p className="text-center bg-warning p-2 my-2">{errDate}</p>
        <button type="submit" className="btn btn-danger" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
