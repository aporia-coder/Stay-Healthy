import React from "react";

// Components
import Banner from "./Banner";
import Button from "./Button";

// Images
import strawberry from "../assets/img/strawberry.jpg";
import pot from "../assets/img/pot.jpg";

const HomeInfo = () => {
  return (
    <section className="section-info">
      <Banner
        title="about us"
        subtitle="Whether you enjoy a delicious rib-eye steak, are completely vegan, or somewhere in between, here at StayHealthy we make it easy for you to find the most delicious, nutritious meals, all catered to your personal daily calory intake! All our meals are provided with health warnings for potential allergies, all their ingredients, aswell as their calorie content so you can be sure that all our recipes are the right ones for you."
        full={true}
      />
      <Banner
        title="our recipes"
        subtitle="Search for specific ingredients, dietary preferences or recipes that fit your personal calorie requirements. Try our free recipe search functionality to find delicous meals especially tailored to your dietary needs."
      >
        <Button name="Our Recipes" className="btn" page="/recipes" />
      </Banner>
      <img
        src={strawberry}
        alt="Strawberry"
        className="image"
        data-aos="fade-down"
      />
      <img src={pot} alt="Pot of food" className="image" data-aos="fade-up" />
      <Banner
        title="calorie calculator"
        subtitle="Try our free calorie calculator to figure out your optimum calorific needs and get recipes tailored specifically to your calorie needs and dietary requirements!"
      >
        <Button name="Calorie Calculator" className="btn" page="/calculator" />
      </Banner>
    </section>
  );
};

export default HomeInfo;
