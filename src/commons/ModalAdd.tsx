import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, ButtonBase, Grid, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { teal } from "@mui/material/colors";
import { useCreateProduct } from "../hooks/useProducts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddProductModal = () => {
  const { createProduct, handleChange } = useCreateProduct();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handdleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    await createProduct();
    handleClose();
    window.location.href = "/products";
    
  };

  return (
    <div>
      <ButtonBase onClick={handleOpen}>
        <AddIcon sx={{ color: teal[700], marginTop: 0 }} />
      </ButtonBase>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handdleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingrese los valores solicitados
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Handle"
                  margin="normal"
                  fullWidth
                  label="Handle"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Title"
                  margin="normal"
                  fullWidth
                  label="Title"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Description"
                  margin="normal"
                  fullWidth
                  label="Description"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="SKU"
                  margin="normal"
                  fullWidth
                  label="SKU"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Grams"
                  margin="normal"
                  fullWidth
                  label="Grams"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Stock"
                  margin="normal"
                  fullWidth
                  label="Stock"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Price"
                  margin="normal"
                  fullWidth
                  label="Price"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="ComparePrice"
                  margin="normal"
                  fullWidth
                  label="ComparePrice"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  onChange={handleChange}
                  name="Barcode"
                  margin="normal"
                  fullWidth
                  label="Barcode"
                  sx={{ mt: 2, mb: 1.5 }}
                  required
                ></TextField>
              </Grid>
            </Grid>
          </Stack>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 1.5, mb: 3 }}
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
