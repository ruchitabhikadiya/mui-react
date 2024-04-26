import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from '@mui/material';

const Slid = () =>{
    var settings = {
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
    <>
    {/* slider start */}
  
    <Slider {...settings}>
      <Typography component='div' className='slider1 slider'>
        <Typography component='div' className='shape1'></Typography>
        <Typography component='div' className='shape2'></Typography>
        <Typography component='div' className='shape3'></Typography>

        <Typography component='div' className='slider-content' sx={{paddingLeft:{xs: '60px',sm: '80px',md: '90px',lg: '100px',xl: '100px'},paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px'}}>
          <Typography component='h2' sx={{fontSize:{
            xs: '30px',
            sm: '40px',
            md: '50px',
            lg: '60px',
            xl: '60px'
          },fontWeight:'700',color:'white'}}>Spectacular <br/>
            <Typography component='span' sx={{fontSize:{xs: '30px',sm: '40px',md: '50px',lg: '60px',xl: '60px'},fontWeight:'700',color:'#eb7328'}}>Customer Service<br/></Typography> on the market
          </Typography>
          <Typography component='p' sx={{color:'white'}}>Easton offers a spectacular level of Customer Service that's hard to match.</Typography>
        </Typography>

        <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
            <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
               <Typography component='h6' sx={{backgroundColor:'#ffc803', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Request Service Today</Typography>
            </Typography>
        </Typography>
      </Typography>

      <Typography component='div' className='slider2 slider'>
        <Typography component='div' className='shape1'></Typography>
        <Typography component='div' className='shape2'></Typography>
        <Typography component='div' className='shape3'></Typography>

        <Typography component='div' className='slider-content' sx={{paddingLeft:{xs: '60px',sm: '80px',md: '90px',lg: '100px',xl: '100px'},paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px'}}>
          <Typography component='h2' sx={{fontSize:{
            xs: '30px',
            sm: '40px',
            md: '50px',
            lg: '60px',
            xl: '60px'
          },fontWeight:'700',color:'white'}}>Spectacular <br/>
            <Typography component='span' sx={{fontSize:{xs: '30px',sm: '40px',md: '50px',lg: '60px',xl: '60px'},fontWeight:'700',color:'#eb7328'}}>Customer Service<br/></Typography> on the market
          </Typography>
          <Typography component='p' sx={{color:'white'}}>Easton offers a spectacular level of Customer Service that's hard to match.</Typography>
        </Typography>

        <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
            <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
               <Typography component='h6' sx={{backgroundColor:'#ffc803', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Request Service Today</Typography>
            </Typography>
        </Typography>
      </Typography>
      
      <Typography component='div' className='slider3 slider'>
        <Typography component='div' className='shape1'></Typography>
        <Typography component='div' className='shape2'></Typography>
        <Typography component='div' className='shape3'></Typography>

        <Typography component='div' className='slider-content' sx={{paddingLeft:{xs: '60px',sm: '80px',md: '90px',lg: '100px',xl: '100px'},paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px'}}>
          <Typography component='h2' sx={{fontSize:{
            xs: '30px',
            sm: '40px',
            md: '50px',
            lg: '60px',
            xl: '60px'
          },fontWeight:'700',color:'white'}}>Spectacular <br/>
            <Typography component='span' sx={{fontSize:{xs: '30px',sm: '40px',md: '50px',lg: '60px',xl: '60px'},fontWeight:'700',color:'#eb7328'}}>Customer Service<br/></Typography> on the market
          </Typography>
          <Typography component='p' sx={{color:'white'}}>Easton offers a spectacular level of Customer Service that's hard to match.</Typography>
        </Typography>

        <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
            <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
               <Typography component='h6' sx={{backgroundColor:'#ffc803', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Request Service Today</Typography>
            </Typography>
        </Typography>
      </Typography>
    </Slider>
    {/* slider end */}
    {/* form box start */}
    <Typography component='div' sx={{position:'relative',top:'-50px',boxShadow:'0px 15px 60px 0px rgba(0, 0, 0, 0.10)',display:'flex',justifyContent:'center',width:'100%'}}>
      <Container>
            <Typography component='form' sx={{padding:'20px',backgroundColor:'#fff',display:'flex',flexWrap:'wrap',alignItems:'center'}}>
              <Typography component='div' sx={{width:{xs: '100%',sm: '100%',md: '20%',lg: '20%',xl: '20%'},margin:'7px'}}><input type='text' placeholder="Your name" className='input'></input></Typography>
              <Typography component='div' sx={{width:{xs: '100%',sm: '100%',md: '20%',lg: '20%',xl: '20%'},margin:'7px'}}><input type='mail' placeholder="Your email" className='input'></input></Typography>
              <Typography component='div' sx={{width:{xs: '100%',sm: '100%',md: '20%',lg: '20%',xl: '20%'},margin:'7px'}}><input type='number' placeholder="Your number" className='input'></input></Typography>
              <Typography component='div' sx={{width:{xs: '100%',sm: '100%',md: '20%',lg: '20%',xl: '20%'},margin:'7px'}}><input type='date' placeholder="Your name" className='input'></input></Typography>
              <Typography style={{color:'black',alignItems:'center',margin:'7px'}}>
                <Button className='button-third-nav'>Appointment</Button>
              </Typography>
            </Typography>
        </Container>
      </Typography> 
    {/* form box end */}
    
    </>
    )
}
export default Slid;