import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Heading from "./Heading";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useCoffee } from "../Context/CoffeeApi";
import Chip from "@mui/material/Chip";

export default function Coffee() {
  const { coffee } = useCoffee();

  const [alignment, setAlignment] = useState("all");

  function handleChange(event, newAlignment) {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  // Extract unique categories
  const categories = [
    "all",
    ...Array.from(new Set(coffee.map((item) => item.category))),
  ];

  // Filter products based on the selected category
  const filteredProducts =
    alignment === "all"
      ? coffee
      : coffee.filter((item) => item.category === alignment);

  return (
    <>
      <Box sx={{ padding: { xs: "0 20px", sm: "0 40px" }, width: "100%" }}>
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#1B1D1F",
            width: { xs: "100%", sm: "90%" },
            borderRadius: "10px",
          }}
        >
          {/* Main Content */}
          <Box sx={{ padding: { xs: "20px", sm: "60px" }, width: "100%" }}>
            {/* Header */}
            <Heading />

            {/* Toggle Button Group for Categories */}
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Product Categories"
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "30px",
                flexWrap: "wrap",
              }}
            >
              {categories.map((category) => (
                <ToggleButton
                  key={category}
                  value={category}
                  sx={{
                    fontSize: "15px",
                    textTransform: "capitalize",
                    fontWeight: "600 ",
                    color: "#FEF7EE",
                    "&.Mui-selected": {
                      backgroundColor: "#4D5562",
                      color: "#FEF7EE",
                    },
                    "&:hover": {
                      backgroundColor:
                        alignment === category
                          ? "#6F757C !important"
                          : "transparent !important",
                      color: "#FEF7EE",
                    },
                    borderRadius: "8px !important",
                  }}
                >
                  {category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            {/* Product Grid */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {filteredProducts.map((item) => (
                  <Grid item xs={12} md={4} key={item.id}>
                    <Card
                      sx={{
                        position: "relative",
                        maxWidth: { md: 300 },
                        borderRadius: "0",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      {item.popular && (
                        <Chip
                          label="Popular"
                          sx={{
                            position: "absolute",
                            left: "10px",
                            top: "10px",
                            color: "#302522",
                            backgroundColor: "#F6C768",
                            fontWeight: "600",
                          }}
                        />
                      )}
                      <CardMedia
                        component="img"
                        sx={{
                          height: "160px",
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                        image={item.image}
                        title={item.name}
                      />
                      <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <Typography variant="h6" color="#FEF7EE">
                            {item.name}
                          </Typography>
                          <Box
                            sx={{
                              color: "#111315",
                              backgroundColor: "#BEE3CC",
                              padding: "5px 15px",
                              fontWeight: "500",
                              borderRadius: "7px",
                              fontSize: "14px",
                            }}
                          >
                            {item.price}
                          </Box>
                        </Box>
                        {item.description && (
                          <Typography variant="body2" color="#FEF7EE">
                            {item.description}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
