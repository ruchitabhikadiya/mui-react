import React from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
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
// import MenuIcon from '@mui/icons-material/Menu';
// import Header from './Component/Header';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Header = () =>{
    return(
        <>
{/* first-navbar-start */}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" classname='first-navbar' style={{backgroundColor:'#37393d'}}>
        <Toolbar style={{minHeight:'46px'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ElectricBoltIcon style={{color:"#eb7328"}} />
            <Typography variant="p" style={{fontSize:'16px'}}>Best Electrical Service in USA.</Typography>
          </IconButton>
          <Typography
            variant="li"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{textAlign:'end'}}
          >
            <FacebookRoundedIcon style={{marginRight:'12px'}} className='icon-hover'/>
            <LinkedInIcon style={{marginRight:'12px'}} className='icon-hover'/>
            <TwitterIcon style={{marginRight:'12px'}} className='icon-hover'/>
            <YouTubeIcon className='icon-hover'/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box> 
{/* first-navbar-end */}
{/* second-navbar-start  */}
  <Box sx={{ flexGrow: 1 ,
    display:{
    xs: 'none',
    sm: 'none',
    md: 'block',
    lg: 'block',
    xl: 'block',
  }
  
  }}>
      <AppBar position="static" style={{backgroundColor:'#faf8f5'}}>
        <Toolbar>
          <Box className='second-nev-logo' style={{backgroundColor:'#eb7328', padding:'20px'}}>
            <Link to='/'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/footer-logo.png'></img></Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} style={{display:'flex', justifyContent:'end'}}>
            <Typography component="ul" style={{display:'flex', justifyContent:'space-between'}}>
              <Typography component="li" style={{display:'flex' , alignItems:'center', paddingRight:'20px'}}>
                <Box><a href=''><TimerIcon style={{fontSize:'43px', paddingTop:'10px',paddingRight:'0px',paddingLeft:'10px',color:'#eb7328'}}/></a></Box>
                <Box><h5 style={{color:'black', fontSize:'20px'}}>Sun-Thu: 8AM-5PM</h5>
                <Typography component='p' style={{fontSize:'15px', color:'black'}}>Friday Holiday</Typography></Box>
              </Typography>
              <Typography component="li" style={{display:'flex' , alignItems:'center', paddingRight:'20px'}}>
                <Box><a href=''><VpnLockIcon style={{fontSize:'43px',paddingRight:'0px',paddingTop:'10px',color:'#eb7328'}}/></a></Box>
                <Box><h5 style={{color:'black', fontSize:'20px'}}>Newyork, USA</h5>
                <Typography component='p' style={{fontSize:'15px', color:'black'}}>380 Albert St, Melborne</Typography></Box>
              </Typography>
              <Typography component="li" style={{display:'flex' , alignItems:'center'}}>
                <Box><a href=''><TimerIcon style={{fontSize:'43px', paddingTop:'10px',color:'#eb7328'}}/></a></Box>
                <Box><h5 style={{color:'black', fontSize:'20px'}}>Need Help?</h5>
                <Typography component='p'style={{fontSize:'15px', color:'black'}}>+1 (230)-456-155-23</Typography></Box>
              </Typography>
            </Typography>
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box> 
{/* second-navbar-end */}
{/* third-navbar-start */}
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#fff'}}>
        <Toolbar>
            <Typography component='div'sx={{
              flexGrow: 1,
              display:{
              xs: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            }}}><MenuIcon sx={{color:'black', fontSize:'30px', paddingTop:'5px'}}/></Typography>
           <Typography component="div" sx={{ flexGrow: 1}}>
            <Typography component="ul" className='third-nav' sx={{display:{
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            }}}>
              <Typography className='thirdnav'><Link to='/' style={{color:'#eb7328 '}}>Home</Link>
                <Typography component='div' className='third-nav-drop'>
                    <Typography component='ul'>
                      <Typography component='li'><a href=''>Home Page 01</a></Typography>
                      <Typography component='li'><a href=''>Home Page 02</a></Typography>
                      <Typography component='li'><a href=''>Home Page 03</a></Typography>
                      <Typography component='li'><a href=''>Home Page 04</a></Typography>
                      <Typography component='li'><a href=''>Home Page 05</a></Typography>
                      <Typography component='li'><a href=''>Home Page 06</a></Typography>
                      <Typography component='li'><a href=''>Onepage Home</a></Typography>
                      <Typography component='li'><a href=''>RTL Home</a></Typography>
                    </Typography>
                </Typography>
              </Typography>
              <Typography component='li' className='thirdnav'><a href=''>About</a></Typography>
              <Typography className='thirdnav'><Link to='/Page'>Pages</Link>

                <Typography component='div'  className='third-nav-drop'>
                  <Typography component='ul'>
                    <Typography component='li' className='third-nav-sec-drop-main'><a href=''>Services</a><a href=''><KeyboardArrowRightIcon/></a>
                      <Typography component='ul' className='third-nav-sec-drop'>
                        <Typography component='li'><a href=''>Services 01</a></Typography>
                        <Typography component='li'><a href=''>Services 02</a></Typography>
                        <Typography component='li'><a href=''>Services 03</a></Typography>
                        <Typography component='li'><a href=''>Air Conditioning</a></Typography>
                        <Typography component='li'><a href=''>Heating Service</a></Typography>
                        <Typography component='li'><a href=''>Power Outlets</a></Typography>
                        <Typography component='li'><a href=''>Indoor Lighting</a></Typography>
                        <Typography component='li'><a href=''>Electrical Panels</a></Typography>
                      </Typography>
                    </Typography>
                    <Typography component='li' className='third-nav-sec-drop-main'><a href=''>Team</a><a href=''><KeyboardArrowRightIcon/></a>
                      <Typography component='ul' className='third-nav-sec-drop'>
                        <Typography component='li'><a href=''>Our Team 01</a></Typography>
                        <Typography component='li'><a href=''>Our Team 02</a></Typography>
                        <Typography component='li'><a href=''>Team Details</a></Typography>
                      </Typography>
                    </Typography>
                    <Typography component='li' className='third-nav-sec-drop-main'><a href=''>Projects</a><a href=''><KeyboardArrowRightIcon/></a>
                      <Typography component='ul' className='third-nav-sec-drop'>
                        <Typography component='li'><a href=''>Projects 01</a></Typography>
                        <Typography component='li'><a href=''>Projects 02</a></Typography>
                        <Typography component='li'><a href=''>House Wiring Repair</a></Typography>
                        <Typography component='li'><a href=''>Landscape Lighting</a></Typography>
                        <Typography component='li'><a href=''>Vehicle Wiring</a></Typography>
                        <Typography component='li'><a href=''>Safety Inspection</a></Typography>
                        <Typography component='li'><a href=''>House Wiring Repair</a></Typography>
                      </Typography>
                    </Typography>
                    <Typography component='li'><a href=''>Testimonial</a></Typography>
                    <Typography component='li'><a href=''>Our Clients</a></Typography>
                    <Typography component='li'><a href=''>Pricing Table</a></Typography>
                    <Typography component='li'><a href=''>Faq’s</a></Typography>
                    <Typography component='li'><a href=''>Appointment</a></Typography>
                    <Typography component='li'><a href=''>404</a></Typography>
                    
                   </Typography>
                  </Typography>
                </Typography>

              <Typography component='li' className='thirdnav'><Link to='/Element'>Elements</Link>
                <Typography component='div' className='third-nav-drop'>
                  <Typography component='ul'>
                    <Typography component='li'><a href=''>Slider Block</a></Typography>
                    <Typography component='li'><a href=''>Request Block</a></Typography>
                    <Typography component='li'><a href=''>About Block</a></Typography>
                    <Typography component='li'><a href=''>Feature Block</a></Typography>
                    <Typography component='li'><a href=''>Service Block</a></Typography>
                    <Typography component='li'><a href=''>Choosus Block</a></Typography>
                    <Typography component='li'><a href=''>Team Block</a></Typography>
                    <Typography component='li'><a href=''>Faq Block</a></Typography>
                    <Typography component='li'><a href=''>Clients Block</a></Typography>
                    <Typography component='li'><a href=''>Testimonials Block</a></Typography>
                   
                  </Typography> 
                </Typography>
              </Typography>

              <Typography component='li' className='thirdnav'><Link to='/Blog'>Blog</Link>
                <Typography component='div'>
                  <Typography component='ul' className='third-nav-drop'>
                      <Typography component='li'><a href=''>Blog Grid</a></Typography>
                      <Typography component='li'><a href=''>Blog Standard</a></Typography>
                      <Typography component='li'><a href=''>Blog Details</a></Typography>
                  </Typography>
                </Typography>
              </Typography>
              <Typography component='li' className='thirdnav'><Link to='/Contect'>Contact</Link></Typography>
            </Typography>
          </Typography>
          <Typography style={{color:'black', display:'flex',alignItems:'center',gap:'20px'}}>
            <SearchIcon />
            <Button className='button-third-nav'>Appointment</Button>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
{/* third-navbar-end */}
  </>
    )
}
export default Header;