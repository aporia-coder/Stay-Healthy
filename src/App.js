import React, { useEffect } from "react";
import "./styles/styles.scss";
import { Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
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
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:fooditem" component={SingleProduct} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/calculator" component={CalorieCalculator} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
