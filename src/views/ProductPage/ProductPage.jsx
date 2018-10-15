import React from "react";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from 'CheckoutForm.js';
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.jsx";

// images
import cardProduct1 from  "assets/img/main-imgs/banner1.png";
import cardProduct3 from  "assets/img/main-imgs/banner1.png";
import cardProduct4 from  "assets/img/main-imgs/banner1.png";
import cardProduct2 from  "assets/img/main-imgs/banner1.png";
import product1 from "assets/img/main-imgs/banner1.png";
import product2 from  "assets/img/main-imgs/banner1.png";
import product3 from  "assets/img/main-imgs/banner1.png";
import product4 from  "assets/img/main-imgs/banner1.png";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const images = [
      {
        original: product3,
        thumbnail: product3
      },
      {
        original: product4,
        thumbnail: product4
      },
      {
        original: product1,
        thumbnail: product1
      },
      {
        original: product2,
        thumbnail: product2
      }
    ];
    return (

      <div className={classes.productPage}>
        <Header
          brand="Trudy Dintzner"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 100,
            color: "primary"
          }}
        />
        <Parallax
          image={require("assets/img/main-imgs/banner1.png")}
          filter="primary"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color="white" className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={images}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>Be Your Own Spiritual Nurse</h2>
                  <h3 className={classes.mainPrice}>$17</h3>
                  <Accordion
                    active={0}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "Description",
                        content: (
                          <p>
                             Get started today and begin to open up a new way of seeing yourself, being happier and more fulfilled, and looking at others through a new lens of understanding.
                          </p>
                        )
                      }
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
                    
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button round color="rose">
                      Buy Now &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
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

export default withStyles(productStyle)(ProductPage);
