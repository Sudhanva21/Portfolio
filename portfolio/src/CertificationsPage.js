import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import {Fade} from "react-awesome-reveal";
import Heading from "./components/heading";
import HRin from "./images/intermediate.png";
import mongo from './images/mongo.png';
import sql from './images/sql.png';
import { useMediaQuery } from "@mui/material";
import Certi from "./components/certificates";
import Navbar from "./components/navbar"

const CertificationsPage=()=>{
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box >
      <Heading name="Certifications & Achievements" />
      <Box
        maxWidth={isNotMobile ? "60%" : "100%"}
        ml="auto"
        mr="auto"
        mt="2rem"
        mb="10rem"
        display="grid"
        gap={4}
        gridTemplateColumns={isNotMobile ? "repeat(3,1fr)" : "repeat(2,1fr)"}
      >
        <Fade cascade damping={0.1}>
          <Certi
            logo={HRin}
            description="HackerRank Intermediate Problem Solving"
            link="https://www.hackerrank.com/certificates/bf30db19f97e"
          />
          <Certi 
              logo={mongo}
              description="MongoDb Basics ICT"
              link="https://learn.mongodb.com/c/39UACJzxSxCcQat0I0FovQ"
          />

          <Certi 
            logo={sql}
            description="HackerRank SQL basic"
            link="https://www.hackerrank.com/certificates/491819d1534c"
          />
          
        </Fade>
      </Box>
      <Navbar prev="projects" next="contact" />

    </Box>
  );
}
  


export default CertificationsPage;
