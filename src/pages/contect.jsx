import { Box, Button, Card, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box sx={{ pt: 10, px: { md: 20, sm: 10, xs: 5 }, pb: 5 }}>
        <Box display="flex" justifyContent="center" color="white" sx={{ p: 5 }}>
          <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
            Contact
          </Typography>
        </Box>
        <Card
          sx={{
            backgroundColor: "rgba(245, 248, 251, 0.789)",
            shadowOpacity: 0,
            p: 5,
          }}
        >
          <Grid container display="flex" spacing={5}>
            <Grid
              item
              sx={12}
              sm={12}
              md={12}
              display="grid"
              justifyContent="center"
            >
              <Typography sx={{ typography: { sm: "h6", xs: "body2" } }}>
                Ready to get started on your project?
              </Typography>
              <Typography sx={{ typography: { sm: "h6", xs: "body2" } }}>
                Contact me now for a Free consultation.
              </Typography>
            </Grid>
            <Grid
              item
              sx={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Button variant="contained">Email</Button>
            </Grid>
            <Grid
              item
              sx={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Button variant="contained">Mobile Number</Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};
export default Contact;
