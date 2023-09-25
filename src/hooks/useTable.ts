import { useEffect, useState } from "react";

export interface Countries {
  id: number
  name: string
  language: string
  capital: string
}

/**
 * The function calculates the range of page numbers based on the number of rows per page and the total
 * number of data items.
 * @param {Countries[]} data - The `data` parameter is an array of objects representing countries. Each
 * object in the array should have properties such as `name`, `population`, `capital`, etc.
 * @param {number} rowsPerPage - The `rowsPerPage` parameter is the number of rows or items that you
 * want to display per page in a paginated list or table.
 * @returns The function `calculateRange` returns an array of numbers representing the range of pages
 * for pagination.
 */
const calculateRange = (data: Countries[], rowsPerPage: number) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

/**
 * The function "sliceData" takes an array of "Countries" objects, a page number, and a number of rows
 * per page, and returns a sliced portion of the data based on the page and rowsPerPage values.
 * @param {Countries[]} data - The `data` parameter is an array of `Countries` objects.
 * @param {number} page - The `page` parameter represents the current page number that you want to
 * display.
 * @param {number} rowsPerPage - The `rowsPerPage` parameter represents the number of rows or items
 * that should be displayed per page in a paginated data set.
 * @returns The function `sliceData` returns a subset of the `data` array based on the `page` and
 * `rowsPerPage` parameters.
 */
const sliceData = (data: Countries[], page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: Countries[], page: number, rowsPerPage: number) => {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<Countries[]>([]);

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is used to calculate the range of pages and slice the data based on the current
  page and rows per page values. */
  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);

    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice, rowsPerPage]);

  return { slice, range: tableRange };
};

export default useTable;
