import React from "react";
import "./styles/styles.scss";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import CalorieCalculator from "./pages/CalorieCalculator";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// MUI
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#da3b6b",
    },
  },
  typography: {
    fontFamily: `"Open Sans", serif`,
  },
});

function App() {
  AOS.init({
    duration: 1500,
  });
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/calculator" component={CalorieCalculator} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
