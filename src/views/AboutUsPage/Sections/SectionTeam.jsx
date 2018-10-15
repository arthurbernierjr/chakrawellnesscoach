import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.jsx";

import FaceTrudy from "assets/img/main-imgs/headshot.png";
import blog1 from "assets/img/main-imgs/banner1.png";

function SectionTeam(props) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >

        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="/e-commerce">
                <img src={FaceTrudy} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Trudy Dintzner</h3>
              <h4 className={classes.textMuted}>Author, Ph.D, Registered Nurse</h4>
              <h5 className={classes.cardDescription}>Trudy Dintzner, PhD, RN, has been a nurse and administrator for over twenty years working in a hospital environment. Her interest is not only in the area of traditional Western medicine but other healing arenas of: Chakras, essential oils, and mind body integration. Her first book is her beginning step into the wide world of spiritual, body, energy integration and more. Read her book to learn more about these fascinating topics. And to learn how you can potentially help yourself, your family, friends, and others, have better mental, physical, spiritual, health. While having fun too!</h5><br/>
              <p className={classes.cardDescription}>
                The body’s energy centers are the keys to understanding how and why we feel as we do. Let me show you how.
              </p>
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}

export default withStyles(teamStyle)(SectionTeam);
