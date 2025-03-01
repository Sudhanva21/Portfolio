import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "@mui/material";

const Heading = ({ name }) => {
    const isNotMobile = useMediaQuery("(min-width:1024px)");

    return (

        <Box maxWidth={isNotMobile ? "80%" : "80%"}
            ml="auto"
            mr="auto"
            mt="2rem"
            mb="-1rem"
            border="1px solid #10CDEB"
            backgroundColor="#050917"
            borderRadius={"10px"}


        >
            <Typography
                backgroundColor="#2AE1FD"
                borderRadius={"10px 10px 0 0 "}
                pl="1rem"
                fontFamily="Courier Prime"
                color="black"
            >you are viewing</Typography>
            <Box paddingLeft="2rem"
                backgroundColor="#050917"
                borderRadius={"0 0 10px 10px"}
            >

                <Typography
                    backgroundColor="#050917"
                    borderRadius={"0 0 10px 10px"}
                    style={{
                        fontSize: "2em",
                        fontFamily: "Courier Prime",
                        color: "#19f411"
                    }}
                >{">> cd "}
                    <TypeAnimation
                        sequence={[
                            `${name}`
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block', backgroundColor: "#050917",color: "#19f411" }}

                    />
                </Typography>


            </Box>

        </Box>
    );
}

export default Heading;