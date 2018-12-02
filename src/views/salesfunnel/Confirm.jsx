import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page


import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";

class Confirm extends React.Component {
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
          links={" "}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
        />
        <Parallax style ={{height:"45vh"}}image={require("assets/img/main-imgs/heal3.jpg")} filter="primary">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>Your Free Report<br/> Is On It's Way...</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={`${classes.main}`}>
        <Card>
        <CardHeader>
          <h1 style={{textAlign:"center"}}>
          Thank You For Requesting A Copy Of My Secret Chapter.<br/> Please check your email for your download link. <br/>Be sure to check your spam as well.
          </h1>
          <br />
          </CardHeader>
          </Card>
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

export default withStyles(blogPostPageStyle)(Confirm);
