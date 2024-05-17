import { Button, Container, Typography } from "@mui/material";
import { useNotification } from "../../context/notification.contex";

export const HomePage = () => {
  const { getError } = useNotification();
  const handleClose = () => {
    getError("pepe");
  };
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant="contained" onClick={handleClose}>
        Home<Typography>hola</Typography>
      </Button>
    </Container>
  );
};
