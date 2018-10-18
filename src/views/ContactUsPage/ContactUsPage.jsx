import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 26.64, lng: -81.87 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 26.64353, lng: -81.873928 }} />
    </GoogleMap>
  ))
);

class ContactUsPage extends React.Component {
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
          links={<HeaderLinks dropdownHoverColor="dark" />}
          fixed
          color="dark"
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAh9s0vi2SVmoC5S9B67Q0d-xoL43p4QRE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>We Would Love To Hear From You</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    Contact us by any means listed on this page.
                    We'll get in touch with you as soon as possible.
                    <br />
                    <br />
                  </p>
                  {/* <form>
                    <CustomInput
                      labelText="Your Name"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Phone"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Your message"
                      id="float"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 6
                      }}
                    />
                    <div className={classes.textCenter}>
                      <Button color="primary" round>
                        Contact us
                      </Button>
                    </div>
                  </form> */}
                  <form className="form-group newsletter-subscribe" role="form" id="contact" name="contactform" method="post" action="https://progressandfortune.com/trudy/assets/contact-form-2.php">
                  <GridContainer justify="center">
                    <GridItem cs={12} sm={8} md={8}>
                      <h2 className={classes.title}>Send Trudy A Message</h2>
                      <h4 className={classes.description}>
                        Trudy would love to hear from you. For any reason.
It could be about private coaching, to find out about starting your own business from home with doTerra essential oils, purchasing doTerra oils for your own potential health enhancement, setting up a live speaking engagement, more about her book, or any other reason.
You can use the form on this page or if you prefer you can send a direct email. Trudy should get back to you within 48 hours.
                      </h4>
          <fieldset>
            <input placeholder="Your name" name="name"type="text" tabindex="1" required autofocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" name="email"type="email" tabindex="2" required/>
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
          </fieldset>
                                    <div className={classes.textCenter}>
                                      <Button type="submit"color="primary" round>
                                        Contact us
                                      </Button>
                                    </div>
                                    {/* <input  className="btn btn-primary btn-raised btn-round" value="Contact Us" /> */}

                    </GridItem>
                  </GridContainer>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Start enhancing your health today with pure, potent, and natural essential oils."
                    description={
                      <p>
                        Be empowered to take control of your well-being on the physical, mental, emotional, spiritual, and financial levels.  Whether you deal with any issues or just want to be healthier, there is an oil for that!!  Be free of harmful chemicals by replacing the contents of your medicine cabinet as well as your cleaning cabinet with essential oil products.
                        <hr/><br/>
                        Learn More at doTerra at

                        <a className="text-center"href="http://my.doterra.com/trudyd">
                        <Button color="warning">
                           my.doterra.com/trudyd
                        </Button>
                        </a><br/>
                        {' '}Or{' '}<hr/><br/>
                        get CTFO CBD oil here at
                          <a className="text-center" href="http://trudyd.MyCTFOCBD.com">
                          <Button color="danger">
                             trudyd.MyCTFOCBD.com
                          </Button>
                          </a>
                          <hr/><br/><span className="text-center" style={{display:"block",textAlign:"center"}}>And Get A Copy Of :</span> 
                          <a className="text-center" href="/e-commerce">
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

export default withStyles(contactUsStyle)(ContactUsPage);
