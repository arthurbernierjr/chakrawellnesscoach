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

import blog4 from "assets/img/main-imgs/slider2.jpg";
import blog3 from "assets/img/main-imgs/girl.png";
import blog1 from "assets/img/main-imgs/heal1.jpg";
import banner from "assets/img/main-imgs/banner1.png";

import BusinessCenter from "@material-ui/icons/BusinessCenter";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

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
        <GridItem md={12} sm={12} className="newsletter-subscribe" style={{marginBottom:"1rem", backgroundColor:"thistle"}}>
          <InfoArea
            className={classes.info}
            title="Start enhancing your health today with pure, potent, and natural essential oils."
            description={
              <p>
                Be empowered to take control of your well-being on the physical, mental, emotional, spiritual, and financial levels.  Whether you deal with any issues or just want to be healthier, there is an oil for that!!  Be free of harmful chemicals by replacing the contents of your medicine cabinet as well as your cleaning cabinet with essential oil products.
                <hr/><br/>
                Learn More at doTerra at

                <a href="my.doterra.com/trudyd">
                <Button color="warning">
                   my.doterra.com/trudyd
                </Button>
                </a><br/>
                {' '}Or{' '}<hr/><br/>
                get CTFO CBD oil here at
                  <a href="http://trudyd.MyCTFOCBD.com">
                  <Button color="danger">
                     trudyd.MyCTFOCBD.com
                  </Button>
                  </a>
                  <hr/><br/> And Get A Copy Of
                  <a href="/e-commerce">
                  <Button size="lg" fullWidth color="success">"Be Your Own Spiritual Nurse"</Button></a>
              </p>
            }
            icon={BusinessCenter}
            iconColor="primary"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
