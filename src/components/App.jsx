import React from "react";
import Nav from "./Nav";
import MainCard from "./MainCard";
import CardTable from "./CardTable";
import CardHighlights from "./CardHighlights";
import CardProgress from "./CardProgress";
import FriendsListCard from "./FriendsListCard";

function App() {
  return (
    <div class="dashboard">
      <div class="data">
        <MainCard />
        <CardTable
          className="schedule-table"
          header="Weekly Schedule"
          data="scheduleData"
          column1="Day"
          column2="Scheduled Exercise"
          column3="Time"
        />
        <CardTable
          className="exercise-table"
          header="Last 5 Exercises"
          data="exerciseHistory"
          column1="Exercise"
          column2="Duration"
          button="true"
        />
        <CardHighlights
          header="Active Calories"
          className="calories"
          highlight1="Today"
          highlight2="This Week"
          highlight3="This Month"
          highlight1data="500 kcal"
          highlight2data="3500 kcal"
          highlight3data="14,000 kcal"
          imgsrc="https://cdn-icons-png.flaticon.com/256/7140/7140091.png"
          imgalt="calories"
        />
      </div>
      <div class="achievements">
        <CardHighlights
          header="Personal Bests"
          className="personal-bests"
          highlight1="Fastest 5K Run"
          highlight2="Longest Exercise Streak"
          highlight3="Longest Plank"
          highlight1data="22 min"
          highlight2data="250 lbs"
          highlight3data="3 min"
          imgsrc="https://cdn-icons-png.flaticon.com/256/7140/7140103.png"
          imgalt="bests"
        />
        <CardProgress
          header="Challenges"
          className="challenges"
          bar1="30-Day Running Streak"
          bar2="1000 Pushups in a Month"
          bar3="Swim 20km in a Month"
        />
        <FriendsListCard />
      </div>
    </div>
  );
}
export default App;
