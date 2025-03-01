import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import shopO from "./images/ShopO.png";
import mvr from "./images/Attendance.png";
// import fashioned from "./images/fashioned.png";
// import transactions from "./images/transactions.png";
// import learnify from "./images/learnify.png";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectComponent from "./components/projects";

const Projects = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="Projects" />

      <Box
        display="flex"
        maxWidth="80%"
        ml="auto"
        mr="auto"
        mt="3rem"
        flexDirection={"column"}
        gap="2rem"
        mb="10rem"
      >
        <Fade cascade damping={0.1}>
          <ProjectComponent
            title="ShopO-Multivendor web app"
            description="Designed and built an online platform to help local vendors register as seller and sell their items on our platform to the nearby registered users on our platform."
            tech="React.js, MongoDB, Express.js, Node.js, EJS"
            img={shopO}
            link="https://github.com/Sudhanva21/ShopO-Multivendor"
            isNotMobile={isNotMobile}
          />

           <ProjectComponent
            title="Face Recognition Attendance System"
            description="Created a attendance system using face recognition and CNN achieving 95% accuracy. It was tested on the students of 70 students and also used as attendance system for one week achieving 95% success."
            tech=" Python,pandas,face-recognition,CNN"
            img={mvr}
            link="https://github.com/Sudhanva21/Face-Attendance-System"
            isNotMobile={isNotMobile}
          />
        </Fade>
      </Box>

      <Navbar prev="skills" next="Certifications" />
    </Box>
  );
};

export default Projects;
