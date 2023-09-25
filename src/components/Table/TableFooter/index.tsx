import { useEffect } from "react";

import styles from "./TableFooter.module.css";
import { Countries } from "../../../hooks/useTable";

interface TableFooterProps {
  range: number[];
  setPage: (page: number) => void;
  page: number;
  slice: Countries[]
}
export const TableFooter = ({ range, setPage, page, slice }: TableFooterProps) => {

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${page === el ? styles.activeButton : styles.inactiveButton
            }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
