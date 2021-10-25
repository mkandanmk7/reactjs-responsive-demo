import React, { useState } from "react";
import "./css/Main.css";
import Info from "./Info";

function Main(props) {
  const [info, setInfo] = useState(true);
  return (
    <div className="main w-60 bg-success ">
      <div className="content d-flex mt-3 mx-3 ">
        <button
          className="btn bg-light"
          onClick={() => {
            props.parent();
          }}
        >
          Side
        </button>
        <button className="btn bg-warning " onClick={() => setInfo(!info)}>
          Info
        </button>
      </div>
      {info && <Info />}
    </div>
  );
}

export default Main;
