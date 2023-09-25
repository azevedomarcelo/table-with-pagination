import { useState } from "react";
import { Table } from "./components/Table/index";
import countriesData from "./data/countries";
import styles from "./App.module.css";

function App() {
  const [countries] = useState([...countriesData]);
  const [dataPerPage, setDataPerPage] = useState(5);

  function handleRowsPerPage(numberOfData: number) {
    setDataPerPage(numberOfData);
  }

  return (
    <main className={styles.container}>
      <div className={styles.rowsPerPageContainer}>
        <p>Rows per page: </p>
        <select
          className={styles.select}
          onChange={(e) => handleRowsPerPage(Number(e.target.value))}
        >
          <option value={5}>{5}</option>
          <option value={15}>{15}</option>
          <option value={25}>{25}</option>
          <option value={countries.length}>All</option>
        </select>
      </div>
      <div className={styles.wrapper}>
        <Table data={countries} rowsPerPage={dataPerPage} />
      </div>
    </main>
  )
}

export default App
