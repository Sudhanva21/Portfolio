import { Box, InputBase, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import sudpic from "./images/sudhanva.jpeg";
import { Fade, Flip } from "react-awesome-reveal";
import Heading from "./components/heading";

const Home = () => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "npm run start") {
      navigate("/experience");
    } else {
      setAlert(
        <Alert
          variant="outlined"
          severity="warning"
          backgroundColor="transparent"
          mt="2rem !important"
          color="warning"
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              color: "orange",
            }}
          >
            please type npm run start and press enter.
          </Typography>
        </Alert>
      );
      setText("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const isNotMobile = useMediaQuery("(min-width:1024px)");

  return (
    <Box mb="2rem">
      <Heading name="Portfolio" />
      <Box
        display="flex"
        flexDirection={isNotMobile ? "row" : "column"}
        justifyContent={"space-around"}
        maxWidth="90%"
        m="4rem auto auto auto"
      >
        <Box>
          <Box
            padding="1rem"
            width={isNotMobile ? "45vw" : "90vw"}
            backgroundColor="#090A18"
            border="2px solid #11D6F44F"
            borderRadius="0.4rem"
            mb="1rem"
          >
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "22rem",
                display: "block",
                backgroundColor: "transparent",
                fontFamily: "'Courier Prime",
                fontSize: "1rem",
                color: "#19f411",
              }}
              sequence={[
                `const Portfolio = () => {\n ‎ ‎ const name="Sudhanva Mangalwede";\n‎ ‎  const bio="Full Stack Web Developer"; \n ‎ ‎ const handleClick = () => {\n  ‎ ‎ ‎ ‎ navigate("/nextPage");\n‎ ‎  }\n ‎ ‎ return (\n  ‎ ‎ ‎ ‎ <button onClick={handleClick}> get to know me better </button>\n )\n ‎ ‎ export default Portfolio;
    
                `, 
                300,
              ]}
              repeat={Infinity}
              speed={90}
            />
          </Box>

          <Box
            width={isNotMobile ? "45vw" : "90vw"}
            height="fit-content"
            mb="1rem"
            backgroundColor="#090A18"
            color="#11D6F4 !important"
            border="2px solid #11D6F44F"
            borderRadius="0.4rem"
          >
            <Typography
              backgroundColor="#11D6F4BE"
              color="black"
              style={{
                fontFamily: "Courier Prime",
              }}
            >
              {">>"} Terminal
            </Typography>
            <Typography
              style={{
                fontFamily: "Courier Prime",
              }}
              pl="1rem"
              backgroundColor="transparent"
              color="#19f411"
            >
              C:\Users\Sudhanva{">    ‎‎ "}
              <InputBase
                inputProps={{
                  style: {
                    backgroundColor: "#090A18",
                    color: "#19f411",
                    fontFamily: "Courier Prime",
                  },
                }}
                placeholder="type npm run start"
                onKeyDown={handleKeyPress}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Typography>
          </Box>
          {alert && alert}
        </Box>

        {/* second half */}
        <Box mt="2rem">
          <Box
            display="flex"
            flexDirection={"column"}
            gap="1rem"
            style={{
              fontFamily: "Poppins",
              color: "white",
              alignItems: "center",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            <Flip>
            <img
              src={sudpic}
              alt="pic"
              style={{
                objectFit: "cover",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            />
            </Flip>
            {/* <Fade bottom> */}
              <Fade cascade damping={0.5}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  color: "white",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                Sudhanva R Mangalwede
              </Typography>
              </Fade>
              <Fade cascade damping={0.1}>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                }}
              >
                Welcome to my digital playground! <br />
                I love making websites <br />
                Have a tour! <br />
              </Typography>
              </Fade>
              <Fade cascade damping={0.7}>
              <button
                onClick={() => {
                  navigate("/experience");
                }}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1.02rem",
                  color: "#17E0FEEA",
                  border: "1px solid #11D6F4",
                  cursor: "pointer",
                  borderRadius: "10px",
                  padding: "0.2rem 0.2rem 0.3rem 0.3rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#17E0FEEA";
                  e.target.style.color = "#000000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#17E0FEEA";
                }}
              >
                get to know me better {">>"}
              </button>
              </Fade>
            {/* </Fade> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
