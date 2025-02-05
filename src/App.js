import logo from './logo.svg';
import './App.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { paste } from '@testing-library/user-event/dist/paste';
import TimerIcon from '@mui/icons-material/Timer';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import Header from './Component/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BorderAll } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import Slid from './Component/Slid';
import ConstructionIcon from '@mui/icons-material/Construction';
import CableIcon from '@mui/icons-material/Cable';
import CheckIcon from '@mui/icons-material/Check';
import Twopart from './Component/Twopart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Lcard from './Component/Lcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Animated from './Component/Animated';
import Staff from './Component/Staff';
import Only_img from './Component/Onlyimg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Faq from './Component/Faq';
import Logo_slid from './Component/Logo_slid';
import CardActions from '@mui/material/CardActions';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Conte from './Component/Conte';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Four_box from './Component/Four_box';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import News from './Component/News';
import Footer from './Component/Footer';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BatteryStdIcon from '@mui/icons-material/BatteryStd';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import Pricetable from './Component/Pricetable';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Slider from "react-slick";
// import { baseUrl } from "./config";
import Element from './Pages/Element';
import Page from './Pages/Page';
import Blog from './Pages/Blog';
import Contect from './Pages/Contect';
import About from './Pages/About';
import Testimonials from './Component/Testimonials';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const settingssss = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };

  return (
  <>
    {/* <Header />
    <Slid />
    <Twopart/>
    <Lcard />
    <Animated />
    <Staff />
    <Only_img />
    <Faq />
    <Logo_slid />
    <Testimonials/>
    <Pricetable />
    <Conte />
    <Four_box />
    <News />
    <Footer /> */}

    <Router>
      <Header/>
      <Switch>

        <Route exact path='/'>
          <Slid />
          <Twopart/>
          <Lcard />
          <Animated />
          <Staff />
          <Only_img />
          <Faq />
          <Logo_slid />
          <Testimonials/>
          <Pricetable />
          <Conte />
          <Four_box />
          <News />
        </Route>

        <Route path='/Page'>
          <Page/>
        </Route>

        <Route path='/About'>
          <About/>
        </Route>

        <Route path='/Element'>
          <Element/>
        </Route>

        <Route path='/Blog'>
          <Blog/>
        </Route>

        <Route path='/Contect'>
          <Contect/>
        </Route>


      </Switch>
      <Footer/>
    </Router>
    
    
  </>
  );
}

export default App;
