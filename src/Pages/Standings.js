import { useEffect, useState } from "react";
import { FetchStandings } from "../Components/ConnectAxios";
import PageWrapper from "./PageWrapper";
import CustomTable from "../Components/CustomTable";

function Standings() {
  const [score, setScore] = useState(null);
  useEffect(() => {
    FetchStandings("DriverStandings").then((result) =>
      setScore(result.StandingsLists[0])
    );
  }, []);

  const generateRows = () =>
    score.DriverStandings.map((element) => (
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
        <PageWrapper
          title={
            "Driver Standings" +
            "\n" +
            "Season: " +
            score.season +
            " - Round: " +
            score.round
          }
        >
          <CustomTable
            titles={["Position", "Name", "Team", "Points", "Wins"]}
            callback={generateRows}
          />
        </PageWrapper>
      )}
    </>
  );
}

export default Standings;
