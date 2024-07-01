import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BatteryStdIcon from '@mui/icons-material/BatteryStd';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';

const Pricetable = () =>{
    return(
        <>
        <Typography component='div' sx={{width:'100%',paddingTop:'80px',paddingBottom:'80px'}}>
            <Container>
                <Typography component='div' sx={{display:'flex',justifyContent:'center',position:'relative'}}>
                    <Typography component='div' className='pricetable'></Typography>

                    <Typography component='div' sx={{textAlign:'center',width:'50%'}}>
                        <Typography component='p' sx={{color:'#eb7328'}}>OUR STAFF</Typography>
                        <Typography component='h3' sx={{fontWeight:'bolder',fontSize:{xs:'20px',sm:'25px',md:'40px',lg:'40px',xl:'40px'}}}>Our Professional Electrician Staff</Typography>
                    </Typography>
                    </Typography>

                <Typography component='div' sx={{width:'100%',display:'flex',flexWrap:'wrap',gap:'20px',paddingTop:'60px'}}>
                    <Typography component='div' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(50% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },zIndex:'999',display:'flex',justifyContent:'center',marginTop:'30px'}} id='price'>
                    <Typography component='div' sx={{width:'85%'}} id='price_main'>
                        <Typography component='div' id='price_table' sx={{display:'flex',justifyContent:'center'}}><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-4.png'></img></Typography>
                        <Typography component='div' id='price_logo' sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}><ContentPasteIcon sx={{fontSize:'34px'}}/></Typography>
                        <Typography component='div' sx={{textAlign:'center'}} id='imp'>
                        <Typography component='h4' variant='h4' sx={{marginTop:'30px',fontWeight:'bold'}}>$140</Typography>
                        <Typography component='p' sx={{marginBottom:'30px'}}>Domestic Competitive price plan on budget …</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Indoor/Outdoor Lighting</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Apliance Installation</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Annual Inspection</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Ceiling Fan Installation</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Replacement Wiring</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>24 hour Response</Typography>

                        <Typography component='div' className='price_ani' sx={{position:'relative',backgroundColor:'#fff',marginTop:'20px',textAlign:'center',padding:'20px 0',display:'flex',justifyContent:'center'}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}} className='ani'>
                            <Typography component='h6' variant='h6' sx={{display:'inline-block'}}>SELECT PLAN</Typography>
                            </Typography>
                        </Typography>

                        </Typography>
                    </Typography>
                    
                    <Typography component='div' id='p_bottom_ani'></Typography>

                    </Typography>

                    <Typography component='div' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(50% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },zIndex:'999',display:'flex',justifyContent:'center',marginTop:'30px'}} id='price'>
                    <Typography component='div' sx={{width:'85%'}} id='price_main'>
                        <Typography component='div' id='price_table' sx={{display:'flex',justifyContent:'center'}}><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-4.png'></img></Typography>
                        <Typography component='div' id='price_logo' sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}><BatteryStdIcon sx={{fontSize:'34px'}}/></Typography>
                        <Typography component='div' sx={{textAlign:'center'}} id='imp'>
                        <Typography component='h4' variant='h4' sx={{marginTop:'30px',fontWeight:'bold'}}>$280</Typography>
                        <Typography component='p' sx={{marginBottom:'30px'}}>Affordable price plan for industrial purposes …</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Ceiling Fan Installation</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Install Double Power</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Install Outdoor Power</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Annual Inspection</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Surge Maintenance</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Electrical Inspection</Typography>

                        <Typography component='div' className='price_ani' sx={{position:'relative',backgroundColor:'#fff',marginTop:'20px',textAlign:'center',padding:'20px 0'}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='h6' variant='h6' sx={{display:'inline-block'}}>SELECT PLAN</Typography>
                            </Typography>
                        </Typography>

                        </Typography>
                    </Typography>
                    
                    <Typography component='div' id='p_bottom_ani'></Typography>

                    </Typography>

                    <Typography component='div' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(50% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },zIndex:'999',display:'flex',justifyContent:'center',marginTop:'30px'}} id='price'>
                    <Typography component='div' sx={{width:'85%'}} id='price_main'>
                        <Typography component='div' id='price_table' sx={{display:'flex',justifyContent:'center'}}><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-4.png'></img></Typography>
                        <Typography component='div' id='price_logo' sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}><ElectricMeterIcon  sx={{fontSize:'34px'}}/></Typography>
                        <Typography component='div' sx={{textAlign:'center'}} id='imp'>
                        <Typography component='h4' variant='h4' sx={{marginTop:'30px',fontWeight:'bold'}}>$2000</Typography>
                        <Typography component='p' sx={{marginBottom:'30px'}}>Budget saver plan for Commercial purposes …</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Annual A/C Inspection</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Electrical Inspection</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Install Double Power</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Retrofits and Upgrades</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Install Outdoor Power</Typography>
                        <Typography component='p' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><CheckIcon sx={{color:'#eb7328'}}/>Critical Installation</Typography>

                        <Typography component='div' className='price_ani' sx={{position:'relative',backgroundColor:'#fff',marginTop:'20px',textAlign:'center',padding:'20px 0'}}>
                            <Typography component='div' sx={{position:'relative',zIndex:'999'}}>
                            <Typography component='h6' variant='h6' sx={{display:'inline-block'}}>SELECT PLAN</Typography>
                            </Typography>
                        </Typography>
                        

                        </Typography>
                    </Typography>
                    
                    <Typography component='div' id='p_bottom_ani'></Typography>

                    </Typography>

                </Typography>
            </Container>
        </Typography>
        </>
    )
}
export default Pricetable;
