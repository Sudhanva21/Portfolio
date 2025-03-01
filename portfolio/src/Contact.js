import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import { useMediaQuery } from "@mui/material";
import file from "./images/file.png";
import { useState } from "react";
import resume from "./images/Sudhanva_Mangalwede_Resume.pdf";
import ContactModal from "./components/contact";
import { Fade } from "react-awesome-reveal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25rem",
  boxShadow: 100,
  backgroundColor: "#313030",
  p: 0,
  borderRadius: "10px",
  textAlign: "center",
};

const Contact = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  // Separate state for each modal
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  // Separate handleOpen and handleClose for each modal
  const handleOpenFirstModal = () => setOpenFirstModal(true);
  const handleCloseFirstModal = () => setOpenFirstModal(false);

  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);

  return (
    <Box>
      <Heading name="ContactMe" />

      <Fade cascade damping={0.5}>
        <Box
          display={isNotMobile ? "flex" : "grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          gap={isNotMobile ? "3rem" : "2rem"}
          maxWidth="80%"
          ml="auto"
          mr="auto"
          mt="6rem"
        >
          {/* First File */}
          <Box>
            <button
              style={{
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleOpenFirstModal}
            >
              <Box>
                <img src={file} width="100px" alt="pic" />
                <Typography fontFamily={"Poppins"}>resume</Typography>
              </Box>
            </button>
            <Modal
              open={openFirstModal}
              borderRadius="10px"
              onClose={handleCloseFirstModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(49, 48, 48, 0.8)",
              }}
            >
              <Box sx={style}>
                <Typography
                  backgroundColor="#050917"
                  color="#19f411"
                  fontFamily={"Courier Prime"}
                  fontSize="1.2rem"
                  textAlign={"left"}
                  border="2px solid #2AE1FD"
                  borderRadius="5px 5px 0 0"
                >
                  {">>"}Resume
                </Typography>
                <Box p="1rem" backgroundColor="#313030" borderRadius="5px" border="2px solid #2AE1FD">
                  <a
                    href={resume}
                    download="Sudhanva_Mangalwede_Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      style={{
                        backgroundColor: "#313030",
                        fontFamily: "Courier Prime",
                        padding: "0.5rem",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        border: "1.5px solid #69ADB5",
                        borderRadius: "10px",
                        color: "#19f411",
                      }}
                    >
                      Download Resume
                    </button>
                  </a>

                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#313030",
                      paddingTop: "1rem",
                    }}
                  >
                    click anywhere to close
                  </Typography>
                </Box>
              </Box>
            </Modal>
          </Box>

          <ContactModal
            name="email"
            url="mailto:sudhanvamangalwede.com"
            desc="sudhanvamangalwede@gmail.com"
          />
          <ContactModal
            name="linkedin"
            url="https://linkedin.com/in/sudhanva-mangalwede-aa957b273"
            desc="view linkedin profile"
          />
          <ContactModal
            name="github"
            url="https://github.com/Sudhanva21"
            desc="view github profile"
          />
          <ContactModal
            name="leetcode"
            url="https://leetcode.com/u/Sudhanva_Mangalwede"
            desc="view leetcode profile"
          />

          {/* <ContactModal
            name="source code"
            url="https://github.com/advika-kharat/portfolio-website"
            desc="view source code"
          /> */}
        </Box>
      </Fade>

      <Navbar prev="Certifications" />
    </Box>
  );
};

export default Contact;
