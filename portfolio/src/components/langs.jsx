import { Box, Typography } from "@mui/material";
const Langs = ({ name, exp, url }) => {
    return (
        <Box padding="1rem"

        >
            <Box display="flex" flexDirection={"column"}
                alignItems="center"
                textAlign={"center"}

            >
                {exp ?
                    <img src={url} width="50px" alt={name} style={{ filter: "saturate(10)" }} /> :
                    <img src={url} width="50px" alt={name} />
                }

                <Typography
                    pt="0.5rem"
                    fontFamily="Poppins"
                    color="#FFFFFF"
                >{name}</Typography>
            </Box>
        </Box>
    );
}

export default Langs;