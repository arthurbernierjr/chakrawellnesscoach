import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// core components

import blog1 from "assets/img/main-imgs/banner1.png";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title} id ="learn-more">
            With a little insight, it is really not difficult....
          </h3>
          <p>
              The body’s energy centers are the keys to understanding how and why we feel as we do.  And they show us the way out!!
            <br />
            <br />
          You will get your copy autographed. Plus, included with your book, will be a gift.
          Click the Image Below To Get Your Copy Today
          </p>
        </GridItem>
        <h1 className={classes.textCenter}>Click The Image Below To Get Your Copy ...</h1>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>

            <GridItem xs={12} sm={12} md={12}>
              <a href="/e-commerce">
              <img src={blog1} alt="..." className={imgClasses} />
            </a>
            <a href="/e-commerce">
          </a>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
