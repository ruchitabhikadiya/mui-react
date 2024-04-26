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
// import Slider from "react-slick";




function App() {
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
  <>
    <Header />
    <Slid />
    <Twopart/>
    <Lcard />
    <Animated />
    <Staff />
    <Typography sx={{width:'100%',position:'relative'}}>

    <Typography sx={{width:'100%'}}>

    <Slider {...settingss}>
        <Typography component='div' sx={{width:'100%',overflow:'hidden'}} id='onlyimg'>
          <Typography component='div'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-2.jpg'></img>
          </Typography>
        </Typography>


          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
       </Typography>

       <Typography component='div' className='y'sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'25%',alignItems:'center'}} >
          <Typography component='div' id='vline' sx={{width:'100%'}}></Typography>
          <Typography component='div' id='hline' sx={{width:'100%'}}></Typography>
          <Typography component='div' sx={{width:'100%',marginTop:'30px'}}>
            <Typography component='h5' variant='h5' sx={{padding:'16px 32px',backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
          <Typography component='div' sx={{marginTop:'30px',width:'100%'}}>
            <Typography component='p' variant='p' sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
       </Typography>

       </Typography>

  </>
  );
}

export default App;
