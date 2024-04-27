import React from "react";
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Staff = () =>{
    const settings = {
        dots:true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      };
    return(
        <Typography component='div' sx={{padding:'50px 0'}}>
        <Typography component='div' sx={{display:'flex',justifyContent:'center'}}>
          <Typography component='div' sx={{textAlign:'center',width:'50%'}}>
            <Typography component='p' sx={{color:'#eb7328'}}>OUR STAFF</Typography>
            <Typography component='h3' sx={{fontWeight:'bolder',fontSize:{xs:'20px',sm:'25px',md:'40px',lg:'40px',xl:'40px'}}}>Our Professional Electrician Staff</Typography>
          </Typography>
        </Typography>
        <Slider {...settings}>
          {/* 1 */}
          <Typography component='div' sx={{textAlign:'center',padding:'20px 54px'}}>

            <Typography component='div' id='staff'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/team-3.jpg'></img></Typography>
            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='div' className='line1'></Typography>
              <Typography component='div' className='line2'></Typography>
              <Typography component='div' className='line3'></Typography>
            </Typography>

            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='h5' variant='h5'>Gerard Butler</Typography>
              <Typography component='span' sx={{color:'#6E6E6E'}}>Domestic Electrician</Typography>
              <Typography component='p' sx={{color:'#6E6E6E'}}>His main tasks are Tests, diagnoses, and repairs various building control systems like refrigeration, heating, and air conditioning systems.</Typography>
            </Typography>

          </Typography>
          {/* 2 */}
          <Typography component='div' sx={{textAlign:'center',padding:'20px 54px'}}>

            <Typography component='div' id='staff'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/team-2.jpg'></img></Typography>
            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='div' className='line1'></Typography>
              <Typography component='div' className='line2'></Typography>
              <Typography component='div' className='line3'></Typography>
            </Typography>

            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='h5' variant='h5'>Gerard Butler</Typography>
              <Typography component='span' sx={{color:'#6E6E6E'}}>Domestic Electrician</Typography>
              <Typography component='p' sx={{color:'#6E6E6E'}}>His main tasks are Tests, diagnoses, and repairs various building control systems like refrigeration, heating, and air conditioning systems.</Typography>
            </Typography>

          </Typography>
          {/* 3 */}
          <Typography component='div' sx={{textAlign:'center',padding:'20px 54px'}}>

            <Typography component='div' id='staff'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/team-1.jpg'></img></Typography>
            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='div' className='line1'></Typography>
              <Typography component='div' className='line2'></Typography>
              <Typography component='div' className='line3'></Typography>
            </Typography>

            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='h5' variant='h5'>Gerard Butler</Typography>
              <Typography component='span' sx={{color:'#6E6E6E'}}>Domestic Electrician</Typography>
              <Typography component='p' sx={{color:'#6E6E6E'}}>His main tasks are Tests, diagnoses, and repairs various building control systems like refrigeration, heating, and air conditioning systems.</Typography>
            </Typography>

          </Typography>
          {/* 4 */}
          <Typography component='div' sx={{textAlign:'center',padding:'20px 54px'}}>

            <Typography component='div' id='staff'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/team-8.jpg'></img></Typography>
            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='div' className='line1'></Typography>
              <Typography component='div' className='line2'></Typography>
              <Typography component='div' className='line3'></Typography>
            </Typography>

            <Typography component='div' sx={{textAlign:'center'}}>
              <Typography component='h5' variant='h5'>Gerard Butler</Typography>
              <Typography component='span' sx={{color:'#6E6E6E'}}>Domestic Electrician</Typography>
              <Typography component='p' sx={{color:'#6E6E6E'}}>His main tasks are Tests, diagnoses, and repairs various building control systems like refrigeration, heating, and air conditioning systems.</Typography>
            </Typography>

          </Typography>    
        </Slider>
    </Typography>    
    )
}
export default Staff