import React from "react";
import NextRaceWidget from "../Widgets/NextRacesWidget";
import PreviousRacesWidget from "../Widgets/PreviousRacesWidget";
import StandingsWidget from "../Widgets/StandingsWidget";
import HomePage from "./HomePage";

function Home() {
  return (
    <HomePage>
      <div className="flex flex-col justify-center  xl:grid xl:grid-cols-2 xl:gap-5 xl:justify-items-center ">
        <StandingsWidget />
        <NextRaceWidget />

        <div className="col-span-3 md:max-w-[60vw]">
          <PreviousRacesWidget />
        </div>
      </div>
    </HomePage>
  );
}

export default Home;
