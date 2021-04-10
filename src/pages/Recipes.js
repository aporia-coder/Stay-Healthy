import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RecipeGrid from "../components/RecipeGrid";

const Products = () => {
  return (
    <>
      <Hero hero="tableHero">
        <h1 className="navbar-logo" id="product-logo">
          StayHealthy
        </h1>
        <Banner title="our recipes" />
      </Hero>
      <RecipeGrid />
    </>
  );
};

export default Products;
