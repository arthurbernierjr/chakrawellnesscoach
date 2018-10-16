import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.jsx";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.jsx";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.jsx";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import SectionContact from "views/AboutUsPage/Sections/SectionContact";
import Button from "components/CustomButtons/Button.jsx";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header
          brand="Trudy Dintzner"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
        />
        <Parallax image={require("assets/img/main-imgs/slider1.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>About Trudy Ditzner</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionTeam />
            <GridContainer>
            <GridItem md={12} sm={12} className="newsletter-subscribe"style={{marginBottom:"100px",backgroundColor:"lavender"}}>
              <InfoArea style={{width:"100vw"}}
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

export default withStyles(aboutUsStyle)(AboutUsPage);
