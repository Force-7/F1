import { useEffect, useState } from "react";
import { FetchRaces } from "../Components/ConnectAxios";
import CustomTable from "../Components/CustomTable";
import Title from "../Components/Title";

function PreviousRacesWidget() {
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    FetchRaces("last/results").then((result) => setLastResult(result.Races[0]));
  }, []);

  const generateRows = () =>
    lastResult.Results.slice(0, 5).map((element) => (
      <>
        <td>{element.position}</td>
        <td>{element.Driver.givenName + " " + element.Driver.familyName}</td>
        <td>{element.Constructor.name}</td>
        <td>
          {element.status === "Finished" ? element.Time.time : element.status}
        </td>
      </>
    ));

  return (
    <>
      {lastResult && (
        <div className="h-fit">
          <Title title={"Previous Race" + "\n" + lastResult.raceName} />
          <CustomTable
            titles={["Position", "Name", "Team", "Time"]}
            callback={generateRows}
          />
        </div>
      )}
    </>
  );
}

export default PreviousRacesWidget;
