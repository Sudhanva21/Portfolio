import { Box, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import { useState } from "react";
import file from "../images/file.png";


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
    // border:"2px solid #2AE1FD",
};



const ContactModal = ({ name, url, desc }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <button
                style={{
                    border: "none",
                    cursor: "pointer",
                }}
                onClick={handleOpen}
            >
                <Box>
                    <img src={file} width="100px" alt="pic" />
                    <Typography fontFamily={"Poppins"}>{name}</Typography>
                </Box>
            </button>
            <Modal
                open={open}
                borderRadius="10px"
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    backdropFilter: "blur(0px)", // Add backdrop filter for blur effect
                    backgroundColor: "#F0F0F047", // Adjust the rgba values as needed
                }}
            >
                <Box sx={style}>
                    <Typography
                        backgroundColor="#050917"
                        color="#19f411"
                        fontFamily={"Courier Prime"}
                        fontSize="1.2rem"
                        textAlign={"left"}
                        borderRadius="5px 5px 0 0"
                        border="2px solid #2AE1FD"
                    >
                        {">>"}{name}
                    </Typography>
                    <Box p="1rem" backgroundColor="#313030" borderRadius="5px" border="2px solid #2AE1FD">
                        <a
                            href={url}
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
                                    border: "1.5px solid #75EBF8",
                                    borderRadius: "10px",
                                    color: "#19f411",
                                }}
                            >
                                {desc}
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

    );
}

export default ContactModal;