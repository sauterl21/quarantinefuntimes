import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Source Sans Pro:400", "sans-serif"]
  }
});

const theme = {
  colors: {
    devLogo: "#FC6264",
    mainBackground: "#FFF"
  },
  fonts: {
    primary: {
      family: "Times, sans-serif",
      weight: 400
    },
    cards: {
      family: "arial, sans-serif",
      weight: 800,
      size: "4.8em",
      height: "2.5em",
      width: "5.7em",
    }
  }
};

export default theme;
