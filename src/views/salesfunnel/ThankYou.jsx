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
import LbButton from "components/CustomButtons/LbButton2.jsx";
// sections for this page
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.jsx";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.jsx";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import SectionContact from "views/AboutUsPage/Sections/SectionContact";



import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";

class ThankYou extends React.Component {
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

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={`${classes.main}`}>
        <Card>
        <CardHeader>
          <h1 style={{textAlign:"center"}}>
          Thank You For Requesting A Copy Of My Secret Chapter.<br/> Your download link is below. Also learn more about why you should order my book below.
          </h1>
          <br />
          <GridContainer style={{display:"flex", justifyContent:"center"}}>
  <a href="https://www.dropbox.com/s/6m2uwzukh464hov/Be_Your_Own_Spiritual_Nurse_Bonus_Chapter.pdf?dl=0" className=""><Button><div><span>Download Your Report</span></div></Button></a>

          </GridContainer>

          </CardHeader>
          </Card>
          <div className={classes.container}>
            <SectionTeam />
            <GridContainer style={{display:"flex", justifyContent:"center"}}>

            <LbButton />
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

export default withStyles(blogPostPageStyle)(ThankYou);
