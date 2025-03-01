import React from 'react';
import { Box, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; // Make sure to import this

const ProjectComponent = ({ title, description, tech, img, link, isNotMobile }) => {
    return (
        <Box flexBasis="100%" pb="2rem" borderBottom="1.5px solid #8F98A07D">
            <Typography
                fontSize="1.5rem"
                fontFamily="Poppins"
                color="#19f411"
                fontWeight={400}
                pr="1rem"
                pt="0.5rem"
                pl="1rem"
            >
                {"    >>  "}{title}
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
                <img
                    src={img}
                    width={isNotMobile ? "40%" : "100%"}
                    alt="pic"
                    style={{
                        padding: "1rem",
                    }}
                />
                <Typography fontFamily="Poppins" p="1rem">
                    {description}
                    <br />
                    <br />
                    <Typography color="#7FE3F2" fontFamily="Poppins">
                        Tech Stack: {tech}
                        <br />
                        <br />
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        border="1px solid white"
                        width="fit-content"
                        borderRadius="5px"
                        padding="0.3rem"
                    >
                        <a href={link} target="_blank" rel="noreferrer">
                            Open <OpenInNewIcon fontSize="small" />
                        </a>
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
};

export default ProjectComponent;
