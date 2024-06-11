import React from "react";
import { WorkShowCaseHolder } from "./style";
import ImageFilter from "./components/ImageFilter";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const WorkShowCase = () => {
  return (
    <Container>
      <WorkShowCaseHolder>
        <Typography variant="h2" component="h2" mb={"20px"}>
          WORK SHOWCASE
        </Typography>
        <ImageFilter />
      </WorkShowCaseHolder>
    </Container>
  );
};

export default WorkShowCase;
