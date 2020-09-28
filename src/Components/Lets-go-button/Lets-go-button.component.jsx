import React from "react";

import "./Lets-go-button.component.css";

const LetsGo = (props) => {
  return (
    <button onClick={props.func} className={"my-button " + props.size}>
      {props.text}
    </button>
  );
};

export default LetsGo;
