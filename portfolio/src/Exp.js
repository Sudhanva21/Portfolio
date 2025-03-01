import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import jyra from "./images/vsoc.jpeg";
import nodebrew from "./images/terna.jpeg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const Exp = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box mb="10rem">
      <Heading name="Experience" />

      <Box mt="3rem" maxWidth={"80%"} ml="auto" mr="auto">
        <Fade cascade damping={0.4}>
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#19f411"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Research Intern - Web of Synonyms
              </Typography>
              <Typography
                color="#19f411"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Jan 2024 - May 2024
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={nodebrew}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Worked on "Web of Synonyms" model, a query engine that derives efficient keywords with the help of
                graph that was developed by extracting synonyms from the web.  
                The paper was presented in International conference on Intelligent Computing and Big Data analytics.ICICBDA
                Paper will be published in the conference proceedings in Springer CCIS series.
              </Typography>
            </Box>
          </Box>

          <Box border="1px solid #13BAD4">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#19f411"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Open source Contributor - Vinyasa summer of code
              </Typography>
              <Typography
                color="#19f411"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                June 2024 - July 2024
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={jyra}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Languages: HTML, CSS, Javascript, NodeJS, ReactJS <br/>
                 Contribution-AnimateHUB, Foodsy: Increased efficiency by 20% and implemented React pages, Improved design and
                implemented checkout function.<br/>
                I made total 8 PRs that were succesfully merged and my contributions can be seen in my github profile.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
      <Navbar prev="" next="skills" />
    </Box>
  );
};

export default Exp;
