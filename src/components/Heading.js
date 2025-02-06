import Box from "@mui/material/Box";

export default function Heading() {
    return (
        <>
            <Box sx={{
                width: { sm: "100%", md: "46%" },
                textAlign: "center",
                margin: "0 auto 20px",
                fontWeight: "400"

            }}>
                <h1 style={{ color: "#FEF7EE", }}>Our Collection</h1>
                <p style={{ marginTop: "6px", lineHeight: "1.4", color: "#6F757C" }}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            </Box>

        </>
    );
}