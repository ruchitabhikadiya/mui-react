import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Animated = () =>{
    return(
    <>
        <Typography component='div' sx={{width:'100%'}}>
            <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>
                <Typography component='div' sx={{width:{xs:'calc(100% + 285px)',sm:'calc(100% + 285px)',md:'calc(100% + 285px)',lg:'calc(50% + 285px)',xl:'calc(50% + 285px)'},position:'relative'}} id='dot-box'>
                    <Typography component='div' className='dot-half' sx={{width:'292px',height:'139px',position:'relative',zIndex:'999',overflow:'hidden'}}>
                    <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-5.png'></img>
                    </Typography>

                    <Typography component='div' sx={{position:'relative',top:'-42px',width:'72%'}}>
                    <Container>
                        <Typography component='h5' variant='h5' sx={{color:"#eb7328"}}>Why Choose Us</Typography>
                        <Typography component='h2' variant='h3' sx={{fontWeight:'bolder',marginBottom:'25px'}}>Great Reasons For People Choose Easton</Typography>
                        <Typography component='p' variant='p' sx={{fontSize:'18px',color:'#6e6e6e'}}>We believe on our qualified services which made us one of the best service Provider. Our team always focuses on :</Typography>
                    </Container>
                    </Typography>

                    <Typography component='div' sx={{position:'relative',top:'-42px',width:'72%'}}>
                    <Container>
                        <Typography component='div' sx={{display:'flex',flexWrap:'wrap',gap:'10px'}}>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><AttachMoneyIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>Affordable Price</Typography>
                            </Typography>
                        </Typography>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><EngineeringIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>Insured Experts</Typography>
                            </Typography>
                        </Typography>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><ApartmentIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>Flat Rate Pricing</Typography>
                            </Typography>
                        </Typography>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><AttachMoneyIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>Advance Systems</Typography>
                            </Typography>
                        </Typography>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><ElectricalServicesIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>Custom Support</Typography>
                            </Typography>
                        </Typography>

                        <Typography component='div' className='dot-half-card-small' sx={{position:'relative',backgroundColor:'#fff',padding:'30px 10px 21px 10px',textAlign:'center',width:{xs:'100%',sm:'100%',sm:'40%',lg:'31%',xl:'31%'}}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='div' className='dot-half-round' sx={{margin:'auto'}}><WatchLaterIcon sx={{color:'#eb7328',fontSize:'40px'}}/></Typography>
                            <Typography component='h6' variant='h6'>24/7 Availability</Typography>
                            </Typography>
                        </Typography>

                        </Typography>
                    </Container>
                    </Typography>

                </Typography>

                <Typography component='div' sx={{maxWidth:{xs:'100%',sm:'100%',md:'100%',lg:'50%',xl:'50%'},overflow:'hidden',height:'100%',position:{xs:'relative',sm:'relative',md:'relative',lg:'absolute',xl:'absolute'},right:'0'}} id='absoulte'>
                <Container>
                <Typography component='div'position='absolute' sx={{right:'-30px'}} id='scale'><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-6.png'></img></Typography>
                    <Typography component='div' id='cross-1' sx={{display:'flex', gap:'20px',position:'relative',zIndex:'999',paddingTop:'100px'}}>
                    <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/chooseus-1.jpg'></img>
                    <img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/chooseus-2.jpg'></img>
                    </Typography> 
                    <Typography component='div' position='absolute' sx={{top:'100px',bottom:'0',top:{xs:'200px',sm:'250px',md:'300px',lg:'250px',xl:'250px'},zIndex:'9000',left: '65%',display:'flex',justifyContent:'center',alignItems:'center'}} id='round-animation'><PlayArrowIcon sx={{scale:'2',color:'white'}}/></Typography>
                    {/* <Typography component='div' position='absolute' sx={{top:'100px',bottom:'0',top: '317px',zIndex:'9000',left: '65%',display:'flex',justifyContent:'center',alignItems:'center'}} id='round'><PlayArrowIcon /></Typography> */}
                    <Typography component='div' position='absolute' sx={{bottom:'-20px'}} id='scale'><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-6.png'></img></Typography>
                </Container> 
                </Typography>

            </Typography>
        </Typography>
    </>
    )
}
export default Animated;