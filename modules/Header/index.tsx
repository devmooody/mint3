import React from "react";
import { HeaderHolder } from "./style";
import { Button, Container , Grid } from "@mui/material";
const header = "https://art.seatheme.net/portfolio/wp-content/uploads/sites/41/2020/07/f1.jpg"

const Header = () => {
  return (
    <HeaderHolder> 
      <Container>
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={6}>
        <h1>Hello!!! <br/> We Are Creative Digital Agency.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Button> SEND MESSAGE</Button>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>

        <img src={header}/>
      </Grid>
    </Grid>
    </Container>
    </HeaderHolder>
  );
};

export default Header;
