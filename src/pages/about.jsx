import { Box, Card, Grid, Typography } from "@mui/material";
import react from "../assets/react-icon.svg";
import nextjs from "../assets/nextjs.svg";
import ts from "../assets/typescript-icon.svg";
import nodejs from "../assets/node-icon.svg";
import js from "../assets/js-icon.svg";
import mongodb from "../assets/mongodb.svg";
import redux from "../assets/redux.svg";
import git from "../assets/github.svg";
import vscode from "../assets/vscode-icon.svg";
import azure from "../assets/microsoft-azure.svg";
import jira from "../assets/jira-icon.svg";
import agile from "../assets/icon-agile.svg";
import Typewriter from "../components/common/typewriter";

const AboutMe =
  " I am a dedicated Frontend Developer with 1.5 years of professional experience at Samyotech Software Solutions Pvt. Ltd. and a 6-month internship at Ypsilon IT Solution Pvt. Ltd. I specialize in building dynamic and responsive web applications using React.js, Next.js and Material-ui. My skill set includes JavaScript, TypeScript, Redux, Node.js, and MongoDB. I am proficient with tools like Jira, Azure, VS Code, and GitHub, and I adhere to Agile development principles. I hold a B.Sc. in Biotechnology from Government Holkar Science College, Indore, and have earned certifications in web development and design. I am passionate about creating efficient, user-friendly web solutions and continually advancing my skills to stay updated with industry trends.";
const ArrSkill = [
  { name: "React.js", img: react },
  { name: "Next.js", img: nextjs },
  { name: "Redux", img: redux },
  { name: "JavaScript", img: js },
  { name: "TypeScript", img: ts },
  { name: "Node.js", img: nodejs },
  { name: "Mongo DB", img: mongodb },
];
const ArrTools = [
  { name: "Jira,", img: jira },
  { name: "Azure,", img: azure },
  { name: "Vs Code,", img: vscode },
  { name: "Git Hub,", img: git },
  { name: "Follow Agile Principle.", img: agile },
];

const About = () => {
  return (
    <>
      <Box sx={{ pt: 10, px: { md: 20, sm: 10, xs: 5 }, pb: 5 }}>
        <Box display="flex" justifyContent="center" color="white" sx={{ p: 5 }}>
          <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
            {"< About Me />"}
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
            <Grid item sx={12} sm={6} md={6} display="grid">
              <Typography variant="h5">About me</Typography>
              <Typewriter text={AboutMe} delay={10} Color="Black" />
            </Grid>
            <Grid
              item
              sx={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Box display="block" justifyContent="center">
                <Typography variant="h5" className="skillCard">
                  Here are my Skills:-
                </Typography>
                {ArrSkill.map((item) => (
                  <Box
                    key={item.name}
                    display="flex"
                    sx={{ p: 1 }}
                    className="skillMedia"
                  >
                    <img src={item.img} alt=".png" height={25} width={25} />
                    <Box sx={{ p: 0.5 }}>
                      <Typography variant="body2" fontWeight="bold">
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              display="flex"
              justifyContent="center"
              className="toolCard"
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  display="flex"
                  justifyContent={{ md: "center", xs: "none" }}
                >
                  <Typography variant="h5">Software And Tools:-</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={8}
                  display={{ md: "flex", xs: "block" }}
                >
                  {ArrTools.map((item) => (
                    <Box display="flex" sx={{ p: 1 }} key={item.name}>
                      <img src={item.img} alt=".png" height={25} width={25} />
                      <Box sx={{ p: 0.5 }}>
                        <Typography variant="body2" fontWeight="bold">
                          {item.name}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default About;
