import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/main-imgs/girl.png";
import blog1 from "assets/img/examples/blog1.jpg";
import banner from "assets/img/main-imgs/banner1.png";

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
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title}>
            Use the insights you learn from the book to help you to help others...
          </h3>
          <p>
            doTERRA essential oils and CFTO CBD oils will not only enhance your health, they will also enhance the health and well-being of those you share these amazing oils with.
          </p>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            *Use the insights you learn from the book to help you to help others*
You can also be compensated for sharing.  Everyone can benefit from these products, so your opportunity scope is wide open!!
            <br />
            Whether you want to:
      1) Get your products paid for<br/>
      2) Supplement your income with a part time business<br/>
      3) Multiply your income— - and let your current job go—with a full time business<br/>
          </p>
          <p>
            I will show you how—it’s easier than you think!!
          </p>
          <p>
            With all you Have to Gain, Why Wait to Start Reading?…
          </p>

        </GridItem>
          <h1 className={classes.textCenter}>Click The Book To Get Your Copy ...</h1>
        <GridItem xs={12} sm={12} md={12}>
          <a href="/e-commerce">
          <img src={banner} alt="..." className={imgClasses} />
        </a>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
