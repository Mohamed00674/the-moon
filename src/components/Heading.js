import Box from "@mui/material/Box";
import logoImage from "../logo.jpg"

export default function Heading() {
    return (
      <>
        <Box
          sx={{
            width: { sm: "100%", md: "46%" },
            textAlign: "center",
            margin: "0 auto 20px",
            fontWeight: "400",
          }}
        >
          <h1 style={{ color: "#FEF7EE" }}>Our Menu</h1>
          <p
            style={{ marginTop: "6px", lineHeight: "1.4", color: "#e7dcb7" }}
          ></p>
          <Box
            component="img"
            src={logoImage}
            alt="Coffee Logo"
            sx={{  width: { xs: 60, sm: 80, md: 100 }, height: "auto", marginBottom: 1, maxWidth : "100%"  , borderRadius : "50%"   }}
          />
        </Box>
      </>
    );
}