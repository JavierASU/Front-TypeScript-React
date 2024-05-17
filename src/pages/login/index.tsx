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
import { useLogin } from "../../hooks/useAuth";

export const LoginPage = () => {
  const { handleChange, doLogin } = useLogin();
  const navigate = useNavigate();
  const handdleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const result = await doLogin();
    if (result) {
      navigate("/products");
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
              Iniciar session
            </Typography>
            <Box component="form" onSubmit={handdleSubmit}>
              <TextField
                onChange={handleChange}
                name="username"
                margin="normal"
                fullWidth
                label="User"
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField
                onChange={handleChange}
                name="password"
                margin="normal"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Igrersar
              </Button>
              <Link to={"/register"}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: -1.5, mb: 1 }}
                >
                  Registrase
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
