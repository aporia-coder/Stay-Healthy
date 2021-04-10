import React from "react";
import Hero from "../components/Hero";

// MUI
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <>
      <Hero>
        <Paper elevation={3} className="calorie-paper">
          <h5>CONTACT</h5>
          <form data-netlify="true" name="contact-form" method="POST">
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              send
            </Button>
          </form>
        </Paper>
      </Hero>
    </>
  );
};

export default Contact;
