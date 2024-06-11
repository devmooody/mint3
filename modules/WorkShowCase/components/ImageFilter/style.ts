import { styled } from "@mui/material/styles";
export const ImageFilterCaption = styled("div")({
  "&:hover": {
    background:"#fbe831e6",
    zindex: 1,
  },

  position: 'absolute',
  top: 0,
  display: 'none',
  alignItems:'center',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  "& Button": {
    fontSize: 15,
    fontWeight: 500,
    color:'#1e1e1e',
    background:"#f9c801",
    padding:"17px 35px",
    fontFamily: "Montserrat ,sans-serif",
  },

});


export const ImageFilterHolder = styled("div")({
position:'relative',
cursor: 'pointer',
"&:hover .hero": {
  display:"flex",
  width:'100%',
},

});