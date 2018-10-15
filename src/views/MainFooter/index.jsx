import React from "react";
import Footer from "components/Footer/Footer.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import classNames from "classnames";
import Favorite from "@material-ui/icons/Favorite";

const MainFooter = ({classes}) => (
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
                Trudy Ditzner
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

)
export default MainFooter;
