import React from "react";
import data from "./data";

function CardTable(props) {
  let dataGroup = props.data;

  return (
    <div class={props.className + " neo-box card"}>
      <div class="subtitle">
        <img alt={props.imgalt} src={props.imgsrc} />
        <h2>{props.header}</h2>
      </div>
      <table>
        <tr>
          <th>{props.column1}</th>
          <th>{props.column2}</th>
          <th>{props.column3}</th>
        </tr>
        {dataGroup === "scheduleData" &&
          data.scheduleData.map((tableItem, index) => {
            return (
              <tr>
                <td>{tableItem.date}</td>
                <td>{tableItem.exercise}</td>
                <td>{tableItem.time}</td>
              </tr>
            );
          })}
        {dataGroup === "exerciseHistory" &&
          data.exerciseHistory.map((tableItem, index) => {
            return (
              <tr>
                <td>{tableItem.exercise}</td>
                <td>{tableItem.duration}</td>
              </tr>
            );
          })}
      </table>
      {props.button === "true" && <button>Show all</button>}
    </div>
  );
}

export default CardTable;
