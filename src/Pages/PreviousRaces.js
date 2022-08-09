import { useEffect, useState } from "react";
import { ForwardRace } from "../Components/ConnectAxios";
import PageWrapper from "./PageWrapper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CustomTable from "../Components/CustomTable";

function PreviousRaces() {
  const [lastResult, setLastResult] = useState(null);
  const [round, setRound] = useState(null);
  const [nextExists, setNextExists] = useState(false);

  useEffect(() => {
    ForwardRace("last").then((response) => setRound(parseInt(response.round)));
  }, []);

  useEffect(() => {
    if (round) {
      ForwardRace(round).then((result) => setLastResult(result.Races[0]));
      ForwardRace(round + 1).then((result) =>
        setNextExists(result.Races.length > 0 ? true : false)
      );
    }
  }, [round]);

  const NextRaceButton = () => {
    if (nextExists) {
      setRound(round + 1);
    }
  };

  const PrevRaceButton = () => {
    if (round >= 1) {
      setRound(round - 1);
    }
  };

  const generateRows = () =>
    lastResult.Results.map((element) => (
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
        <PageWrapper
          title={lastResult.raceName + "\n" + "Round: " + lastResult.round}
        >
          <div className="mb-5">
            <button
              className={`${
                round > 1 ? "visible" : "invisible"
              } text-4xl text-secondary mr-5`}
              onClick={PrevRaceButton}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={`${
                round < 10 ? "visible" : "invisible"
              } text-4xl text-secondary ml-5`}
              onClick={NextRaceButton}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <CustomTable
            titles={["Position", "Name", "Team", "Time"]}
            callback={generateRows}
          />
        </PageWrapper>
      )}
    </>
  );
}

export default PreviousRaces;
