import { styled } from "@mui/material/styles";
export const HeaderHolder = styled("div")({
  padding:'125px 0',
  "& h1": {
    fontSize: 50,
    fontWeight: 900,
    margin:'40px 0',
  },
  "& p": {
    fontSize: 15,
    lineHeight:'25px',
    fontWeight:500,
    margin:'40px 0',
  },
  "& Button": {
    fontSize: 15,
    fontWeight: 500,
    color:'#1e1e1e',
    background:"#f9c801",
    padding:"17px 35px",
    fontFamily: "Montserrat ,sans-serif",
  },

});
