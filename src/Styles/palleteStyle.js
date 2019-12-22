export default {
  palette: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: props => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "white",
      background: "rgba(255, 255, 255, 0.3)",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",

      fontSize: "1rem",
      lineHeight: "30px",

      boxShadow: "none",
      border: "none",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }
};
