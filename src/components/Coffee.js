import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Heading from "./Heading";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import { useCoffee } from "../Context/CoffeeApi";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Chip from '@mui/material/Chip';

export default function Coffee() {
    const { coffee } = useCoffee();

    const [alignment, setAlignment] = useState('all');

    function handleChange(e) {
        setAlignment(e.target.value);
    }

    const availableCoffee = coffee.filter((item) => item.available === true);

    let finalResult = coffee;

    if (alignment === "available") {
        finalResult = availableCoffee;
    }

    // mapping the coffee array to display the coffee cards
    const newArr = finalResult.map((item) => {
        return <Grid size={{ xs: 12, md: 4, }}
            // sx={{
            //     xs: { width: "100%" },
            // }}
            key={item.id} >
            <Card sx={{
                position: "relative",
                maxWidth: { md: 300 },
                borderRadius: "0",
                backgroundColor: "transparent",
                boxShadow: "none",
                // width: "100% !important",
            }}>
                {item.popular ? <Chip label="Popular" sx={{ position: "absolute", left: "10px", top: "10px", color: "#302522", backgroundColor: "#F6C768", fontWeight: "600" }} /> : ""}
                <CardMedia
                    component="img"
                    sx={{
                        height: "160px",
                        borderRadius: "10px",
                        // width: "225px !important",
                    }}
                    image={item.image || '../../public/images/images.jpeg.jpg'}
                    title={`${item.name}`}
                />
                <CardContent sx={{
                    paddingLeft: "0 !important",
                    paddingRight: "0 !important",

                }} >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <div style={{ color: "#FEF7EE", }}>
                            <Typography variant="h6" component="div"
                            >
                                {item.name}
                            </Typography>
                        </div>
                        <div style={{
                            color: "#111315",
                            backgroundColor: "#BEE3CC",
                            padding: "5px 10px",
                            fontWeight: "500",
                            borderRadius: "6px",
                            fontSize: "14px",
                        }}>
                            <span>{item.price}</span>
                        </div>
                    </div>
                    <Typography variant="body2"
                        component="div"
                        sx={{ color: 'text.secondary', }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontWeight: "600", }}>
                                <div style={{ display: "flex", alignItems: "center" }}>{item.votes !== 0 ? <StarIcon sx={{ color: "#F6C768" }} /> : <StarBorderIcon sx={{ color: "#6F757C" }} />}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#FEF7EE" }}>
                                    {item.rating}
                                    {item.votes !== 0 ? (
                                        <span style={{ color: '#6F757C' }}>({item.votes} votes)</span>
                                    ) : <span style={{ color: '#6F757C' }}>No ratings</span>}
                                </div>
                            </div>
                            <div style={{
                                color: "#ED735D",
                                fontSize: "14px",
                                fontWeight: "600",
                            }}>{item.available ? "" : "Sold out"}</div>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    });

    return (
        <>
            <Box sx={{ padding: { xs: "0 20px", sm: "0 40px" }, width: "100%", }}>
                <Container maxWidth="lg" sx={{
                    backgroundColor: "#1B1D1F",
                    width: {
                        xs: "100%",
                        sm: "90%",
                    },
                    borderRadius: "10px",
                }}>
                    {/* <Chip label="Chip Filled" sx={{ position: "absolute", left: "10px", top: "10px", color: "white", backgroundColor: "green" }} /> */}

                    {/* Start the Div of the main content */}
                    <Box sx={{
                        padding: { xs: "20px", sm: "60px" },
                        width: "100%",
                    }}>

                        {/* Start the Header */}
                        <Heading />
                        {/* end the Header */}

                        {/* Start the togglebutton */}
                        <ToggleButtonGroup
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                                marginBottom: '30px',
                            }}
                        >
                            <ToggleButton
                                value="all"
                                sx={{
                                    fontSize: "15px",
                                    textTransform: "capitalize",
                                    fontWeight: "600 ",
                                    color: '#FEF7EE',
                                    '&.Mui-selected': {
                                        backgroundColor: '#4D5562',
                                        color: '#FEF7EE',
                                    },
                                    '&:hover': {
                                        backgroundColor: alignment === "all" ? '#6F757C !important' : "transparent !important",
                                        color: '#FEF7EE',
                                    },
                                    borderRadius: "8px !important",
                                }}
                            >
                                All Products
                            </ToggleButton>
                            <ToggleButton
                                value="available"
                                sx={{
                                    fontSize: "15px",
                                    textTransform: "capitalize",
                                    color: '#FEF7EE',
                                    '&.Mui-selected': {
                                        backgroundColor: '#4D5562',
                                        color: '#FEF7EE',
                                    },
                                    '&:hover': {
                                        backgroundColor: alignment === "available" ? '#6F757C !important' : "transparent !important",
                                        color: '#FEF7EE',
                                    },
                                    borderRadius: "8px !important",
                                }}
                            >
                                Available Now
                            </ToggleButton>
                        </ToggleButtonGroup>
                        {/* end the togglebutton */}



                        <Box sx={{ flexGrow: 1, }}>
                            <Grid container spacing={3}>
                                {newArr}
                            </Grid>
                        </Box>

                    </Box>
                    {/* end the Div of the main content */}
                </Container >
            </Box >

        </>

    );
}