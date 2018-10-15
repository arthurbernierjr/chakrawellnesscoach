import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
// import Accordion from "components/Accordion/Accordion.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Are you ready to enhance your health and well-being? </h2>
            <h3 className={classes.description}>
             My book will start you on an exciting path!
           </h3>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Insights"
                description="Within these pages, you will find insights and suggestions to improve how you feel on all levels."
                icon={VerifiedUser}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Healing"
                description="Healing is the process of the restoration of health from an unbalanced, diseased or damaged organism. We will show you the power that you have to heal yourself."
                icon={VerifiedUser}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Well Being"
                description="Health and Well Being is a journey my book will help you discover that journey and enrich your life as a result"
                icon={VerifiedUser}
                iconColor="primary"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
