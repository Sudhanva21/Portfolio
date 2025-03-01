// import Card from "./components/card";
import {Box,Card, CardContent, CardMedia,Typography, Button} from "@mui/material"
const Certi = ({ logo, description, link }) => (
    <Card
      sx={{
        maxWidth: "400px" ,
        height: 420,
        mx: "auto",
        textAlign: "center",
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": { transform: "translateY(-5px)" },
        border: "2px solid #2AE1FD ",
        justifyContent: "space-between",
        borderRadius: "10px"
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={logo}
        alt="Certification Logo"
        sx={{objectFit: "Contain"}}
        marginRight="10px"
        // sx={{  padding: "10px", paddingRight:"20px" }}
      />
      <CardContent sx={{height:420}}>
        <Typography variant="body1" 
           style={{
              fontFamily:"Poppins",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              height: "50px"
           }}
        >
          {description}
        </Typography>
        <a href={link} target="_blank" rel="noreferrer">
            <button
             variant="contained"
          color="primary"
          href={link}
          target="_blank"
          sx={{ mt: 2 }}
          marginTop="10px"

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
                View certificate
            </button>
        </a>
      </CardContent>
    </Card>

    
 
  );

export default Certi;