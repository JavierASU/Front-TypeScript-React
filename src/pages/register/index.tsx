import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";

export const RegisterPage = () => {
  const { handleChange, doRegistry } = useRegister();
  const navigate = useNavigate();
  const handdleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const result = await doRegistry();
    if (result) {
      navigate("/login");
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "5em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Registrar Datos
            </Typography>
            <Box component="form" onSubmit={handdleSubmit}>
              <TextField
                onChange={handleChange}
                name="username"
                margin="normal"
                fullWidth
                label="Usuario"
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField
                onChange={handleChange}
                name="password"
                margin="normal"
                fullWidth
                label="Contraseña"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Registrar
              </Button>
              <Link to={"/login"}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: -1.5, mb: 1 }}
                >
                  Iniciar Session
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
