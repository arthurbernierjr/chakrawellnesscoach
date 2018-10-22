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

import blog4 from "assets/img/main-imgs/heal4.jpg";
import blog3 from "assets/img/main-imgs/heal3.jpg";
import blog1 from "assets/img/main-imgs/heal2.jpg";
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
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            Did you know…….Essential oils come from plants?
          </h3>
          <p>
                          Modern medicine comes from plant medicine.
                          Essential oils are not all created equal in purity and
                           potency.
                         Some essential oils are safe for pregnant women, children,
                         infants,  and animals.
You can enhance your health on all levels with essential oils and even reduce or get rid of the pharmaceuticals you use now.
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
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
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            You can enhance your health on all levels with use of essential oils and even reduce or get rid of the pharmaceuticals you use now.<br/>
Both doTERRA essential oils and CTFO CBD oils are top of the line in quality, purity, and effectiveness.<br/>
**The gift included in your book is a sample of doTERRA’s Deep Blue Rub – a lotion that soothes achy joints and muscles with both a warming and cooling effect and no harmful chemicals. So potent only a pea size amount is needed!!
          </p>
        </GridItem>
            <h1 className={classes.textCenter}>Click The Image Below To Get Your Copy ...</h1>
        <GridItem xs={12} sm={12} md={12} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <a href="/e-commerce">
              <img src={banner} alt="..." className={imgClasses} />
            </a>

            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
