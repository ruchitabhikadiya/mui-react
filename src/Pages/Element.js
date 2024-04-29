import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Element = () =>{
    var settings = {
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
        <Typography component='div' sx={{width:'100%'}} className='page-slider'>
          <Typography component='div' className='page' sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"104px 0px 106px 0px",position:'relative',zIndex:"999"}}>
            <Typography component='div'>
              <Typography component='h3' variant='h3'>Slider Block</Typography>
              <Typography component='p' sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>home <KeyboardArrowRightIcon/>Slider Block</Typography>
            </Typography>
          </Typography>
        </Typography>
    
        {/* slider 2 start */}
    
        <Typography component='div' sx={{width:'100%'}}>
        <Slider {...settings}>
          <Typography component='div' className='element'>
            <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>
              {/* <Typography component='div' className='j'></Typography> */}
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider1'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}>
              <Typography component='h2' sx={{fontSize:{
                xs: '30px',
                sm: '40px',
                md: '50px',
                lg: '60px',
                xl: '60px'
              },fontWeight:'700',color:'black'}}>Best <span style={{color:'#eb7328'}}>Electricty</span> Service for Your Family
              </Typography>
              <Typography component='p' sx={{color:'black'}}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</Typography>
            </Typography>
    
            <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
                <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
                   <Typography component='h6' sx={{backgroundColor:'#eb7328',color:'white', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Appointment</Typography>
                </Typography>
            </Typography>
            </Typography>
    
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider1-2'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}></Typography>
            </Typography>
    
            </Typography>
          </Typography>
    
          <Typography component='div' className='element'>
            <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>
              {/* <Typography component='div' className='j'></Typography> */}
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider1'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}>
              <Typography component='h2' sx={{fontSize:{
                xs: '30px',
                sm: '40px',
                md: '50px',
                lg: '60px',
                xl: '60px'
              },fontWeight:'700',color:'black'}}>Best <span style={{color:'#eb7328'}}>Electricty</span> Service for Your Family
              </Typography>
              <Typography component='p' sx={{color:'black'}}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</Typography>
            </Typography>
    
            <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
                <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
                   <Typography component='h6' sx={{backgroundColor:'#eb7328',color:'white', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Appointment</Typography>
                </Typography>
            </Typography>
            </Typography>
    
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider2-2'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}></Typography>
            </Typography>
    
            <Typography component='div' className='t'></Typography>
    
            </Typography>
          </Typography>
    
    
          <Typography component='div' className='element'>
            <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>
              {/* <Typography component='div' className='j'></Typography> */}
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider1'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}>
              <Typography component='h2' sx={{fontSize:{
                xs: '30px',
                sm: '40px',
                md: '50px',
                lg: '60px',
                xl: '60px'
              },fontWeight:'700',color:'black'}}>Best <span style={{color:'#eb7328'}}>Electricty</span> Service for Your Family
              </Typography>
              <Typography component='p' sx={{color:'black'}}>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</Typography>
            </Typography>
    
            <Typography component='div' sx={{position:'relative',backgroundColor:'transparent',top:'-50px'}}>
                <Typography component='div' sx={{textAlign:'center', position:'relative'}}>
                   <Typography component='h6' sx={{backgroundColor:'#eb7328',color:'white', display:'inline-block', padding:'8px 20px 6px 20px',fontSize:'16px',fontWeight:'700'}}>Appointment</Typography>
                </Typography>
            </Typography>
            </Typography>
    
            <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'},backgroundColor:'#f5f0ed',padding:'40px'}} className='element-slider1-2'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',zIndex:'999',textAlign:'center'}}></Typography>
            </Typography>
    
            <Typography component='div' className='t'></Typography>
    
            </Typography>
          </Typography>
        </Slider>
        </Typography>
    
      {/* slider 2 end */}
    
      {/* slider 3 start */}
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
    
          </Typography>
        </Slider>
      {/* slider 3 end */}
    
      {/* slider 4 start */}
      <Slider {...settings}>
          <Typography component='div' className='slider4-1 slider' sx={{position:'relative'}} >
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
            <Typography component='div' className='d'></Typography>
            <Typography component='div' className='h'></Typography>
          </Typography>
    
          <Typography component='div' className='slider4-2 slider' sx={{position:'relative'}} >
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
            <Typography component='div' className='d'></Typography>
            <Typography component='div' className='h'></Typography>
          </Typography>
          
          <Typography component='div' className='slider4-3 slider' sx={{position:'relative'}} >
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
            <Typography component='div' className='d'></Typography>
            <Typography component='div' className='h'></Typography>
          </Typography>
    
        </Slider>
      {/* slider 4 end */}
    
      {/* slider 5 start */}
      <Slider {...settings}>
          <Typography component='div' className='slider5-1 slider'  >
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',textAlign:"center"}}>
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
          </Typography>
    
          <Typography component='div' className='slider5-2 slider'  >
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',textAlign:'center'}}>
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
          </Typography>
          
          <Typography component='div' className='slider5-3 slider'>
            <Typography component='div' className='slider-content' sx={{paddingTop:'100px',paddingBottom:'100px',position:'relative',lineHeight:'0px',textAlign:'center'}}>
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
          </Typography>
    
        </Slider>
      {/* slider 5 end */}
    </>
    )
}
export default Element;