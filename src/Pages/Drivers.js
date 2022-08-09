import { useEffect, useState } from "react";
import { FetchDrivers } from "../Components/ConnectAxios";
import CustomTable from "../Components/CustomTable";
import PageWrapper from "./PageWrapper";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    FetchDrivers("drivers").then((result) => setDrivers(result.Drivers));
  }, []);

  const generateRows = () =>
    drivers.map((item) => (
      <>
        <td>{item.givenName + " " + item.familyName}</td>
        <td>{item.permanentNumber === null ? "" : item.permanentNumber}</td>

        <td>{item.nationality}</td>
        <td>{item.dateOfBirth}</td>
      </>
    ));
  return (
    <PageWrapper title="Current Drivers">
      <CustomTable
        titles={["Driver Name", "Permanent", "Nationality", "DOB"]}
        callback={generateRows}
      />
    </PageWrapper>
  );
}

export default Drivers;
