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

import image1 from "assets/img/main-imgs/freere1.png";
import image2 from "assets/img/main-imgs/freere2.png";
import image3 from "assets/img/main-imgs/freere3.png";

const imageStyle = {
  height: "35vh"
}
class CaptureForm extends React.Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.section}>
        <form className="form-group newsletter-subscribe" role="form" id="contact" name="captureform" method="post" action="https://progressandfortune.com/trudy/assets/capture-form-handler.php">
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
          <GridContainer justify="center">
          <GridItem md={4}>
          <img  style={imageStyle} src={image1} alt="Trudy Book" />
          </GridItem>
          <GridItem md={4}>
          <img style={imageStyle} src={image2} alt="Trudy Book" />
          </GridItem>
          <GridItem md={4}>
          <img style={imageStyle} src={image3} alt="Trudy Book" />
          </GridItem>
          </GridContainer>
            <h2 className={classes.title}>Get Your Free Chapter</h2>
            <h4 className={classes.description}>
            So take advantage of this limited time offer and get your totally free "Secret Book Chapter" NOW!
We just need your name & email address and you will have instant access to more valuable "healing secrets!" Plus more free goodies! No credit or debit card needed...at all!
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

                          <div className={classes.textCenter}>
                            <Button type="submit"color="primary" round>
                              Get Your Secret Chapter Now
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

export default withStyles(workStyle)(CaptureForm);
