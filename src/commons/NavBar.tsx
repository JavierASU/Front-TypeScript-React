import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useValidateSession } from "../hooks/useAuth";
import { AddProductModal } from "./ModalAdd";

export const NavBar = () => {
  const [isLoggedId, setIsLoggedIn] = useState(false);
  const { validateSession } = useValidateSession();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    async function load() {
      if (location.pathname === "/login" || location.pathname === "/register") {
        return;
      }

      const result = await validateSession();
      setIsLoggedIn(result);
      if (!result) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
    load();
  }, [navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoggedId && (
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="xl">
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item>
                  <Typography>Prueba Javier</Typography>
                </Grid>
                <Grid item>
                  <Stack direction={"row"} spacing={5}>
                    <Typography>
                      New Porduct
                      <AddProductModal />
                    </Typography>
                    <Button variant="outlined" onClick={handleLogOut}>
                      <LogoutIcon />
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};
