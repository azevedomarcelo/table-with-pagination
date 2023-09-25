import { useState } from "react";
import { TableFooter } from "./TableFooter";
import useTable, { Countries } from "../../hooks/useTable";
import styles from "./Table.module.css";

interface TableProps {
  data: Countries[];
  rowsPerPage: number;
}

export const Table = ({ data, rowsPerPage }: TableProps) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Country</th>
            <th className={styles.tableHeader}>Capital</th>
            <th className={styles.tableHeader}>Language</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  )
};