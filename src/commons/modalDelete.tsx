import React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, ButtonBase, ButtonGroup } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDeleteProduct } from "../hooks/useProducts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DeleteProductModalProps {
  id: number;
}
export const DeleteProductModal = ({ id }: DeleteProductModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { deleteProduct } = useDeleteProduct();

  const handleDelete = async () => {
    await deleteProduct(id);
    handleClose();
    window.location.href = "/products";
  };
  return (
    <div>
      <ButtonBase onClick={handleOpen}>
        <DeleteIcon sx={{ color: red[700], marginTop: 0 }} />
      </ButtonBase>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Seguro que desea eliminar el registro
          </Typography>
          <ButtonGroup>
            <Button onClick={handleDelete}>Aceptar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};
