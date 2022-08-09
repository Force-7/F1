import { useEffect, useState } from "react";
import { FetchRaces } from "../Components/ConnectAxios";
import CustomTable from "../Components/CustomTable";
import Title from "../Components/Title";

function NextRaceWidget() {
  const [nextRace, setNextRace] = useState(null);

  useEffect(() => {
    FetchRaces("next").then((result) => setNextRace(result.Races[0]));
  }, []);

  const formatDate = (date, time) => {
    const myTime = new Date(time + date);

    return (
      <td>
        {`${myTime.getDate()}-${myTime.getMonth()}-${myTime.getFullYear()}`}
        <br />
        {`${myTime.getHours()}:${
          (myTime.getMinutes() < 10 ? "0" : "") + myTime.getMinutes()
        }`}
      </td>
    );
  };

  const generateInfoRows = () => [
    <>
      <td>{nextRace.Circuit.circuitName}</td>
      <td>{nextRace.Circuit.Location.locality}</td>
      {formatDate(nextRace.date, nextRace.time)}
    </>,
  ];

  const generateRaceRows = () => [
    <>
      {formatDate(nextRace.FirstPractice.date, nextRace.FirstPractice.time)}

      {formatDate(nextRace.SecondPractice.date, nextRace.SecondPractice.time)}

      {nextRace.ThirdPractice === undefined ? (
        <td>---</td>
      ) : (
        formatDate(nextRace.ThirdPractice.date, nextRace.ThirdPractice.time)
      )}

      {formatDate(nextRace.Qualifying.date, nextRace.Qualifying.time)}

      {nextRace.Sprint === undefined ? (
        <td>---</td>
      ) : (
        formatDate(nextRace.Sprint.date, nextRace.Sprint.time)
      )}
    </>,
  ];

  return (
    <>
      {nextRace && (
        <div className="h-fit w-full aspect-auto">
          <Title title={"Upcoming Race" + "\n" + nextRace.raceName} />
          <CustomTable
            titles={["Name", "Locality", "Date & Time"]}
            callback={generateInfoRows}
          />

          <CustomTable
            titles={[
              "1 Practice",
              "2 Practice",
              "3 Practice",
              "Qualifications",
              "Sprint",
            ]}
            callback={generateRaceRows}
          />
        </div>
      )}
    </>
  );
}

export default NextRaceWidget;
