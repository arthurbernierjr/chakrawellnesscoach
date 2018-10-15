import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";

import bg12 from "assets/img/main-imgs/heal4.jpg";
import office2 from "assets/img/main-imgs/heal5.jpg";
import dg1 from "assets/img/main-imgs/heal1.jpg";
import dg2 from "assets/img/main-imgs/heal2.jpg";
import dg3 from "assets/img/main-imgs/heal3.jpg";

function SectionCarousel({ ...props
}) {
  const {
    classes,
    ...rest
  } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
      // we've set the className to cd-section so we can make smooth scroll to it
      <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
  <div>
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <h1 className={classes.title}>Be Your Own Spiritual Nurse</h1>
                    <h4>
                      Get your copy today and learn more…..here’s why.
                    </h4>
                    <br />
                    <a href="/spiritual-nurse">
                    <Button color="primary" size="lg">

                      Read more
                    </Button>
                    </a>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>You Should Have Essential Oils. <br/>Why?</h1>
                    <h3>
                    .....
                    </h3>
                    <br />
                    <a href="/essential-oils">
                    <Button color="primary" size="lg">
                      Read more
                    </Button>
                  </a>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(classes.mlAuto, classes.textRight)}
                  >
                    <h1 className={classes.title}>Become a Business Owner and Make Money
                    With Me</h1>
                    <br />
                    <a href="/business">
                    <Button color="primary" size="lg">
                      Learn More
                    </Button>
                  </a>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}
        </Carousel>
      </div> { /* HEADER 3 END */ } <
  /div>
);
}

export default withStyles(headersStyle)(SectionCarousel);
