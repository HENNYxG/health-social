import React from "react";

function CardHighlights(props) {
  return (
    <div class={props.className + " neo-box card"}>
      <div class="subtitle">
        <img alt={props.imgalt} src={props.imgsrc} />
        <h2>{props.header}</h2>
      </div>
      <ul>
        <li>
          {props.highlight1}
          <div class="number">{props.highlight1data}</div>
        </li>
        <li>
          {props.highlight2}
          <div class="number">{props.highlight2data}</div>
        </li>
        <li>
          <strong>{props.highlight3}</strong>
          <div class="number">{props.highlight3data}</div>
        </li>
      </ul>
    </div>
  );
}

export default CardHighlights;
