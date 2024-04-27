import React from "react";
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Only_img = () =>{
    const settingss = {
        // dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
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
        <>
        <Typography sx={{width:'100%',position:'relative'}}>

<Typography sx={{width:'100%'}}>

<Slider {...settingss}>
    <Typography component='div' sx={{width:'100%',overflow:'hidden'}} id='onlyimg'>
        <Typography component='div'>
          <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-2.jpg'></img>
        </Typography>

        <Typography component='div' className='y'sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',alignItems:'center'}} >
          <Typography component='div' id='vline' sx={{width:'100%'}}></Typography>
          <Typography component='div' id='hline' sx={{width:'100%'}}></Typography>
          <Typography component='div' sx={{width:'100%',marginTop:'30px'}} id='hide'>
            <Typography component='h5' variant='h5' sx={{padding:'16px 32px',backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
          <Typography component='div' sx={{marginTop:'30px',width:'100%'}} id='hide'>
            <Typography component='p' variant='p' sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
        </Typography>
    </Typography>


    <Typography component='div' sx={{width:'100%',overflow:'hidden'}} id='onlyimg'>
        <Typography component='div'>
          <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-3.jpg'></img>
        </Typography>

        <Typography component='div' className='y'sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',alignItems:'center'}} >
          <Typography component='div' id='vline' sx={{width:'100%'}}></Typography>
          <Typography component='div' id='hline' sx={{width:'100%'}}></Typography>
          <Typography component='div' sx={{width:'100%',marginTop:'30px'}} id='hide'>
            <Typography component='h5' variant='h5' sx={{padding:'16px 32px',backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
          <Typography component='div' sx={{marginTop:'30px',width:'100%'}} id='hide'>
            <Typography component='p' variant='p' sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
        </Typography>
    </Typography>

    <Typography component='div' sx={{width:'100%',overflow:'hidden'}} id='onlyimg'>
        <Typography component='div'>
          <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-1.jpg'></img>
        </Typography>

        <Typography component='div' className='y'sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',alignItems:'center'}} >
          <Typography component='div' id='vline' sx={{width:'100%'}}></Typography>
          <Typography component='div' id='hline' sx={{width:'100%'}}></Typography>
          <Typography component='div' sx={{width:'100%',marginTop:'30px'}} id='hide'>
            <Typography component='h5' variant='h5' sx={{padding:'16px 32px',backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
          <Typography component='div' sx={{marginTop:'30px',width:'100%'}} id='hide'>
            <Typography component='p' variant='p' sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
        </Typography>
    </Typography>

    <Typography component='div' sx={{width:'100%',overflow:'hidden'}} id='onlyimg'>
        <Typography component='div'>
          <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/project-4.jpg'></img>
        </Typography>

        <Typography component='div' className='y'sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',alignItems:'center'}} >
          <Typography component='div' id='vline' sx={{width:'100%'}}></Typography>
          <Typography component='div' id='hline' sx={{width:'100%'}}></Typography>
          <Typography component='div' sx={{width:'100%',marginTop:'30px'}} id='hide'>
            <Typography component='h5' variant='h5' sx={{padding:'16px 32px',backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
          <Typography component='div' sx={{marginTop:'30px',width:'100%'}} id='hide'>
            <Typography component='p' variant='p' sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>Better Performance</Typography>
          </Typography>
        </Typography>
    </Typography>

    </Slider>
   </Typography>
   </Typography>

        </>

    )
}
export default Only_img;