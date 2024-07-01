import React from "react";
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Logo_slid = () =>{
    const settingsss = {
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
      };
    return(
    <>
    <Typography component='div' sx={{width:'100%',marginTop:'80px',marginBottom:'80px'}}>
        <Slider {...settingsss}>
          <Typography component='div' sx={{width:'100%',padding:'20px'}} id='logo_slid'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/05/1.png'></img>
          </Typography>
          <Typography component='div' sx={{width:'100%',padding:'20px'}} id='logo_slid'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/05/2.png'></img>
          </Typography>
          <Typography component='div' sx={{width:'100%',padding:'20px'}} id='logo_slid'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/05/3.png'></img>
          </Typography>
          <Typography component='div' sx={{width:'100%',padding:'20px'}} id='logo_slid'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/05/4.png'></img>
          </Typography>
          <Typography component='div' sx={{width:'100%',padding:'20px'}} id='logo_slid'>
            <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/05/5.png'></img>
          </Typography>
        </Slider>
    </Typography>
    
    </> 
    )
}
export default Logo_slid;