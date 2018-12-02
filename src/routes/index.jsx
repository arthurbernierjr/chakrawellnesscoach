import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import SpiritualNurse from "views/SpiritualNurse/index.jsx";
import EssentialOils from "views/EssentialOils/index.jsx";
import Business from "views/Business/index.jsx";
import FreeReport from "views/salesfunnel/FreeReport.jsx";
import Confirm from "views/salesfunnel/Confirm.jsx";
import ThankYou from "views/salesfunnel/ThankYou.jsx";

var indexRoutes = [
{
    path: "/freegift",
    name: "FreeReport",
    component: FreeReport
  },
  {
      path: "/confirm",
      name: "Confirm",
      component: Confirm
    },  {
        path: "/thankyou",
        name: "ThankYou",
        component: ThankYou
      },
  {
    path: "/",
    name: "freegift",
    component: FreeReport
  }
];

export default indexRoutes;
