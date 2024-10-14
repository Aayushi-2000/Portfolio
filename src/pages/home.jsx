import { Box, Button, Grid, Typography } from "@mui/material";
import Typewriter from "../components/common/typewriter";

import linkedin from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import telegram from "../assets/telegram.svg";
import { StyledTypography } from "../styles";

const Home = () => {
  return (
    <>
      <Box>
        <Grid
          container
          display={{ xs: "none", md: "flex", sm: "none" }}
          pt={20}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display={{ md: "inline-block" }}
            pl={20}
            pt={5}
          >
            <StyledTypography variant="h4" color="white">
              Hii<span className="wave">👋</span>, I'm
            </StyledTypography>
            <Typography variant="h3" className="nameModeMob">
              Aayushi Malviya
            </Typography>
            <Typewriter text="React.js Developer" delay={150} Color="white" />
            <StyledTypography variant="body2">
              2 Years of Experience
            </StyledTypography>
            <Box sx={{ pt: 5 }}>
              <Button variant="contained" className="buttonContactMob">
                Contact Me
              </Button>
            </Box>

            <div className="social-mediaMob">
              <a
                href="https://www.linkedin.com/in/aayushi-malviya-32b817258"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Aayushi-2000"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  style={{
                    backgroundColor: "black",
                    borderRadius: "100%",
                  }}
                />
              </a>
              <a
                href="https://wa.me/6266994318"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
              <a
                href="https://t.me/CodeVinayak"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </Grid>
          <Grid
            display={{ xs: "none", md: "flex", sm: "none" }}
            sm={6}
            md={6}
            p={10}
          >
            <img
              src="/coding-removebg-preview.png"
              width="70%"
              height="70%"
              alt=""
            />
          </Grid>
        </Grid>

        <Grid
          container
          display={{ xs: "ruby-text", md: "none", sm: "flex" }}
          pt={20}
        >
          <Grid
            item
            xs={12}
            sm={6}
            display={{ sm: "inline-block" }}
            sx={{ p: { sm: 5 } }}
          >
            <StyledTypography variant="h5" color="white">
              Hii<span className="wave">👋</span>, I'm
            </StyledTypography>
            <Typography variant="h5" className="nameModeMob">
              Aayushi Malviya
            </Typography>
            <Typewriter text="React.js Developer" delay={150} Color="white" />
            <StyledTypography variant="body2">
              2 Years of Experience
            </StyledTypography>
            <Box sx={{ pt: 5 }}>
              <Button variant="contained" className="buttonContactMob">
                Contact Me
              </Button>
            </Box>

            <div className="social-mediaMob">
              <a
                href="https://www.linkedin.com/in/aayushi-malviya-32b817258"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Aayushi-2000"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  style={{
                    backgroundColor: "black",
                    borderRadius: "100%",
                  }}
                />
              </a>
              <a
                href="https://wa.me/6266994318"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>
              <a
                href="https://t.me/CodeVinayak"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram" />
              </a>
            </div>
          </Grid>
          <Grid
            display={{ sm: "flex", xs: "none", justifyContent: "center" }}
            sm={6}
          >
            <img
              src="/coding-removebg-preview.png"
              width="90%"
              height="90%"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Home;
