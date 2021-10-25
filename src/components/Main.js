import React, { useState } from "react";
import "./css/Main.css";
import Info from "./Info";

function Main(props) {
  const [info, setInfo] = useState(true);
  const style = () => {
    setInfo(info);
    props.parent();
    document.querySelector(".main").style.width = "100%";
  };

  return (
    <div className="main bg-success ">
      <div className="content d-flex mt-3  ">
        <button className="btn bg-light" onClick={style}>
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
