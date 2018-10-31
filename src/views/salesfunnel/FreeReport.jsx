import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import LineStyle from "@material-ui/icons/LineStyle";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
//import { Link } from "react-router-dom";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import LbButton from "components/CustomButtons/LbButton.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import CaptureForm from "./CaptureForm.jsx" ;

const dashboardRoutes = [];

class FreeReport extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const {
      classes,
      ...rest
    } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/main-imgs/secret.jpg")} filter="primary" >
          <div className={`${classes.container}`}>
            <GridContainer >
              <GridItem  xs={12} sm={12} md={12}>
                <h1 className={classes.title} style={{display:"flex", justifyContent:"center",textAlign:"center", fontSize: "4rem"}}>This Was Almost A Secret....</h1>
                <h3 style={{display:"flex", textAlign:"center",justifyContent:"center"}}>
                Get a Secret Chapter For Free...Held Back From My Book<br/> 'Be Your Own Spiritual Nurse'...<br/>Plus, Special Offers & More...
Just give us your name & email address...no debit or credit card needed at all
                </h3>
                <br />

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <CaptureForm />
          </div>
        </div>
        <Footer
          // theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/"
                      className={classes.block}
                    >
                      Trudy Dintzner
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/about-us"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/contact-us"
                      className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                  <span dangerouslySetInnerHTML={{__html: '&copy;'}} /> {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.arthurbernierjr.com"
                  className={classes.aClasses}
                >
                  Arthur Bernier Jr
                </a>{" "}
                .
              </div>
            </div>
          }
        />
      </div>
  );
}
}

export default withStyles(landingPageStyle)(FreeReport);
