import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import NavBar from "../navBar";

const Layout = () => {
  const location = useLocation();

  return (
    <Box className="homePageBackground">
      <Grid container className="content">
        {location?.pathname !== "/login" ? (
          <Grid item xs={12} className="sticky">
            <NavBar />
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
