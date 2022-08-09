import axios from "axios";

async function FetchRaces(file) {
  const response = await axios.get(
    `http://ergast.com/api/f1/current/${file}.json`
  );
  return response.data.MRData.RaceTable;
}

async function ForwardRace(round) {
  const response = await axios.get(
    `http://ergast.com/api/f1/2022/${round}/results.json`
  );
  return response.data.MRData.RaceTable;
}

async function FetchDrivers(file) {
  const response = await axios.get(
    `http://ergast.com/api/f1/current/${file}.json`
  );

  return response.data.MRData.DriverTable;
}

async function FetchStandings(file) {
  const response = await axios.get(
    `http://ergast.com/api/f1/current/${file}.json`
  );
  return response.data.MRData.StandingsTable;
}

export { FetchRaces, FetchDrivers, FetchStandings, ForwardRace };
