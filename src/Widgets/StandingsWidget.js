import { useEffect, useState } from "react";
import { FetchStandings } from "../Components/ConnectAxios";
import CustomTable from "../Components/CustomTable";
import Title from "../Components/Title";

function StandingsWidget() {
  const [score, setScore] = useState(null);
  useEffect(() => {
    FetchStandings("DriverStandings").then((result) =>
      setScore(result.StandingsLists[0])
    );
  }, []);

  const generateRows = () =>
    score.DriverStandings.slice(0, 3).map((element) => (
      <>
        <td>{element.position}</td>
        <td>{element.Driver.givenName + " " + element.Driver.familyName}</td>
        <td>{element.Constructors.map((i) => i.name)}</td>
        <td>{element.points}</td>
        <td>{element.wins}</td>
      </>
    ));

  return (
    <>
      {score && (
        <div className="h-fit">
          <Title
            title={
              "Top 3 Standings" +
              "\n" +
              "Season: " +
              score.season +
              " -  Round: " +
              score.round
            }
          />
          <CustomTable
            titles={["Position", "Name", "Team", "Points", "Wins"]}
            callback={generateRows}
          />
        </div>
      )}
    </>
  );
}

export default StandingsWidget;
