import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const Navbar = ({ prev, next }) => {
    const navigate = useNavigate()
    return (
        <Box
            backgroundColor="#17235C37"
            style={{
                backdropFilter: "blur(5px)"
            }}
            maxWidth="100%"
            pl="2rem"
            pr="auto"
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            display="flex"
            justifyContent="space-between"
            padding={2}
            borderRadius={2}

            gap="1rem" // Optional border at the top
        >
            <button
                onClick={() => {
                    navigate(`/${prev}`)
                }}
                style={{
                    fontFamily: "Poppins",
                    fontSize: "1.2rem",
                    color: "#17E0FEEA",
                    border: "2px solid #11D6F4",
                    cursor: "pointer",
                    borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#17E0FEEA";
                    e.target.style.color = "#000000";
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#17E0FEEA";
                }}

            >{"<< "}prev</button>

            <div
                onClick={() => {
                    navigate(`/`);
                }}
                style={{
                    cursor: "pointer",
                    backgroundColor: "#17E0FEEA",
                }}
            >
                <HomeRoundedIcon fontSize="large" color="secondary" />
            </div>


            {next &&

                <button
                    onClick={() => {
                        navigate(`/${next}`)
                    }}
                    style={{
                        fontFamily: "Poppins",
                        fontSize: "1.2rem",
                        color: "#17E0FEEA",
                        border: "2px solid #11D6F4",
                        cursor: "pointer",
                        borderRadius: "10px",

                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#17E0FEEA";
                        e.target.style.color = "#000000";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#17E0FEEA";
                    }}
                >next{" >>"}</button>
            }
        </Box>
    );
}

export default Navbar; 