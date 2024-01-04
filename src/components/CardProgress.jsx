import React from "react";

function CardProgress(props) {
  function challenge1calc() {
    let z = Math.round((9 / 30) * 100);
    return z + "%";
  }
  function challenge2calc() {
    let z = Math.round((15 / 30) * 100);
    return z + "%";
  }
  function challenge3calc() {
    let z = Math.round((2 / 30) * 100);
    return z + "%";
  }

  let challenge1bar = {
    width: challenge1calc(),
  };
  let challenge2bar = {
    width: challenge2calc(),
  };
  let challenge3bar = {
    width: challenge3calc(),
  };

  return (
    <div class={props.className + " neo-box card"}>
      <div class="subtitle">
        <img
          alt="challenges"
          src="https://cdn-icons-png.flaticon.com/256/7140/7140139.png"
        />
        <h2>{props.header}</h2>
      </div>
      <ul>
        <li>
          {props.bar1}
          <div class="progress-container">
            <div class="progress-bar" style={challenge1bar} />
          </div>
        </li>
        <li>
          {props.bar2}
          <div class="progress-container">
            <div class="progress-bar" style={challenge2bar} />
          </div>
        </li>
        <li>
          {props.bar3}
          <div class="progress-container">
            <div class="progress-bar" style={challenge3bar} />
          </div>
        </li>
      </ul>
    </div>
  );
}
export default CardProgress;
