import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  ButtonGroup,
  Stack,
} from "@mui/material";

import { AddProductModal } from "../../commons/ModalAdd";
import { UpdateProductModal } from "../../commons/modalEdit";
import { DeleteProductModal } from "../../commons/modalDelete";
import { useProducts } from "../../hooks/useProducts";
import { useEffect } from "react";

export const TablePage = () => {
  const { products, getProducts } = useProducts();
  // function createData(
  //   Handle: string,
  //   Title: string,
  //   Description: string,
  //   SKU: number,
  //   Grams: number,
  //   Stock: number,
  //   Price: number,
  //   ComparePrice: number,
  //   Barcode: number
  // ) {
  //   return {
  //     Handle,
  //     Title,
  //     Description,
  //     SKU,
  //     Grams,
  //     Stock,
  //     Price,
  //     ComparePrice,
  //     Barcode,
  //   };
  // }

  // const rows = [
  //   createData(
  //     "Frozen yoghurt",
  //     "pepe",
  //     "brocha",
  //     24,
  //     4.0,
  //     100,
  //     500,
  //     500,
  //     654161615156
  //   ),
  //   createData(
  //     "Ice cream sandwich",
  //     "elpepe",
  //     "juancho",
  //     37,
  //     4.3,
  //     25,
  //     25,
  //     23,
  //     65
  //   ),
  //   createData(
  //     "Ice cream sandwich",
  //     "elpepe",
  //     "juancho",
  //     37,
  //     4.3,
  //     25,
  //     25,
  //     23,
  //     65
  //   ),
  //   createData(
  //     "Ice cream sandwich",
  //     "elpepe",
  //     "juancho",
  //     37,
  //     4.3,
  //     25,
  //     25,
  //     23,
  //     65
  //   ),
  //   createData(
  //     "Ice cream sandwich",
  //     "elpepe",
  //     "juancho",
  //     37,
  //     4.3,
  //     25,
  //     25,
  //     23,
  //     65
  //   ),
  // ];

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <h3>products table</h3>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Handle</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">SKU&</TableCell>
            <TableCell align="right">Grams&nbsp;(g)</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">ComparePrice</TableCell>
            <TableCell align="right">Barcode</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.Handle}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>

              <TableCell align="right">{row.Handle}</TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.SKU}</TableCell>
              <TableCell align="right">{row.Grams}</TableCell>
              <TableCell align="right">{row.Stock}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.ComparePrice}</TableCell>
              <TableCell align="right">{row.Barcode}</TableCell>
              <TableCell align="right">
                <ButtonGroup>
                  <Stack spacing={2} direction="row">
                    <AddProductModal />
                    <UpdateProductModal id={row.id} />
                    <DeleteProductModal id={row.id} />
                  </Stack>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
