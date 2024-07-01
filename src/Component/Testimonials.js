import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Testimonials = () =>{
    const settingssss = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
        <Typography component='div' sx={{width:'100%',display:'flex',overflow:'hidden'}}>

            <Typography component='div' sx={{display:{xs:'none', sm:'none',md:'block',lg:'block',xl:'block'},position:'relative'}} className='cross-two-part1'>
            <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/testimonial-bg.jpg'></img>

            <Typography component='div' sx={{position:'absolute',top:'218px',width:'776px'}}>
                <Container>
                    <Typography component='p' sx={{color:'#eb7328'}}>TESTIMONIALS</Typography>
                    <Typography component='h4' variant='h3' sx={{color:'white'}}>What Our Client Say About Easton.</Typography>
                    <Typography component='div' sx={{display:'flex',gap:'20px'}}>
                    <Typography component='div' id='left-arrow' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><ChevronLeftIcon/></Typography>
                    <Typography component='div' id='left-arrow' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><ChevronRightIcon/></Typography>
                    </Typography>
                </Container>
            </Typography>
            </Typography> 

            <Typography component='div' sx={{width:{xs:'100%', sm:'100%' ,md:'100%',lg:'50%',xl:'50%'},position:'relative'}} className='cross-two-part2'>
            <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/testimonial-bg-2.jpg'></img>
            <Typography component='div' sx={{position:'absolute',top:'40px',zIndex:'999'}}>
                <Container>
                <Slider {...settingssss} id='cross_slider'>

                <Typography component='div' sx={{ backgroundColor:'white',padding:'40px'}} className='cross-two-slider'>
                <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-3.png'></img>
                <Typography component='h4' variant='h4' sx={{fontSize:"45px",color:'#eb7328'}}>99</Typography>
                <Typography component='p' sx={{marginBottom:'20px'}}>The fix was really wonderful, prepared things early, performed his tasks, I'll definitely give these guys a call if I ever need assistance again.</Typography>
                <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                    <Typography component='div' className='cross-two-slid-round-img'></Typography>
                    <Typography component='div'>
                    <Typography component='p' sx={{fontWeight:'bold'}}>George Timothy</Typography>
                    <Typography component='p' sx={{color:'#6E6E6E'}}>Store Owner</Typography>
                    </Typography>
                </Typography>
                </Typography>

                <Typography component='div' sx={{ backgroundColor:'white',padding:'40px'}} className='cross-two-slider'>
                <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-3.png'></img>
                <Typography component='h4' variant='h4' sx={{fontSize:"45px",color:'#eb7328'}}>99</Typography>
                <Typography component='p' sx={{marginBottom:'20px'}}>The fix was really wonderful, prepared things early, performed his tasks, I'll definitely give these guys a call if I ever need assistance again.</Typography>
                <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                    <Typography component='div' className='cross-two-slid-round-img2'></Typography>
                    <Typography component='div'>
                    <Typography component='p' sx={{fontWeight:'bold'}}>George Timothy</Typography>
                    <Typography component='p' sx={{color:'#6E6E6E'}}>Store Owner</Typography>
                    </Typography>
                </Typography>
                </Typography>

                <Typography component='div' sx={{ backgroundColor:'white',padding:'40px'}} className='cross-two-slider'>
                <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-3.png'></img>
                <Typography component='h4' variant='h4' sx={{fontSize:"45px",color:'#eb7328'}}>99</Typography>
                <Typography component='p' sx={{marginBottom:'20px'}}>The fix was really wonderful, prepared things early, performed his tasks, I'll definitely give these guys a call if I ever need assistance again.</Typography>
                <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                    <Typography component='div' className='cross-two-slid-round-img3'></Typography>
                    <Typography component='div'>
                    <Typography component='p' sx={{fontWeight:'bold'}}>George Timothy</Typography>
                    <Typography component='p' sx={{color:'#6E6E6E'}}>Store Owner</Typography>
                    </Typography>
                </Typography>
                </Typography>

                
                
            </Slider>
                </Container>
            </Typography>

            </Typography>
        </Typography>

        </>

    )
}
export default Testimonials;