import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Input from "@material-ui/core/Input";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";
import "assets/scss/add-on.css";
class SectionWork extends React.Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.section}>
        <form className="form-group newsletter-subscribe" role="form" id="contact" name="contactform" method="post" action="https://progressandfortune.com/trudy/assets/contact-form-handler.php">
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Get On The Pre-Order List</h2>
            <h4 className={classes.description}>
              Pre Order Your Copy of <em>Be Your Own Spiritual Nurse</em> and get a free gift for being a part of our family.
            </h4>

{/*
                          <label className="control-label">Your name</label>
                          <input type="text" name="name" className="form-control" />
                          <label className="control-label">Email address</label>
                          <input type="email" name="email" className="form-control" />

                          <label className="control-label">Phone</label>
                          <input type="text" name="phone" className="form-control" />

                          <label className="control-label">Your message</label>
                          <textarea name="message" className="form-control" id="message" rows="6"></textarea> */}

<fieldset>
  <input placeholder="Your name" name="name"type="text" tabindex="1" required autofocus/>
</fieldset>
<fieldset>
  <input placeholder="Your Email Address" name="email"type="email" tabindex="2" required/>
</fieldset>
<fieldset>
  <textarea placeholder="Any Question You May Have...." name="message" tabindex="5" required></textarea>
</fieldset>
                          <div className={classes.textCenter}>
                            <Button type="submit"color="primary" round>
                              Get Your Copy Now
                            </Button>
                          </div>
                          {/* <input  className="btn btn-primary btn-raised btn-round" value="Contact Us" /> */}

          </GridItem>
        </GridContainer>
        </form>
      </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
