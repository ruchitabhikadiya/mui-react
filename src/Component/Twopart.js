import React from "react";
import { Container, Grid } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import CableIcon from '@mui/icons-material/Cable';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';


const Twopart = () =>{
    return(
        <Typography component='div' sx={{width:'100%'}}>
      <Container>
        <Typography component='div' className='w' >

        <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},marginTop:'0px', display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',sm:'center',lg:'start',md:'start',xl:'start'},overflow:'hidden',paddingBottom:'80px'}}>
          <Typography Container='div' className='relative'>
            <Typography component='div' className='icon' sx={{position:'absolute'}}>
              <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/icon-1.png'></img>
            </Typography>
            <Typography component='div' className='two-part-1-one'></Typography>
            <Typography component='div' className='two-part-2-two'></Typography>
            <Typography component='div' sx={{position:'relative',left:{xs:'0',sm:'0',md:'0',lg:'100px',xl:'100px'},width:'100%'}}><img sx={{width:'100%',height:'100%'}} src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/about-1.jpg'></img></Typography>
            <Typography component='div' sx={{position:'absolute',textAlign:'center',width:'220px',backgroundColor:'#ffc803',padding:'47px 15px 43px 15px',left:'0',right:'100px',bottom:'-54px',zIndex:'999'}}>
              <Typography component='h2' sx={{fontSize:'20px',fontWeight:'bold'}}>30</Typography>
              <Typography component='h3' sx={{fontSize:'25px',fontWeight:'bold'}}>Years Experience of This Field</Typography>
            </Typography>
          </Typography>
        </Typography>

        <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},marginTop:'0px',}}>
          <Typography Container='div' className='relative' sx={{padding:'0px 10px', textAlign:{xs:'center',sm:'center',lg:'start',md:'start',xl:'start'}}}>
            <Typography component='h5' sx={{color:'#eb7328',fontWeight:'bold'}}>ABOUT US</Typography>
            <Typography component='h1' sx={{fontSize:'40px',fontWeight:'700',lineHeight:'50px'}}>Professional Grade Residential & Commercial Electrical Services</Typography>
            <Typography component='p' sx={{color:'#6e6e6e',fontSize:'18px'}}>Expert & Experienced Electricians for Residential to Commercial, outdoor to indoor services with 100% satisfaction guarantee. Our experts will ensure there is no wiring faults, risks and ensure the improved, secured wiring.</Typography>

            <Typography component='div' sx={{display:'flex',flexWrap:'wrap',margin:'10px 0px'}}>

            <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center',width:'50%',justifyContent:'center'}}>
              <Typography component='div' sx={{width:'80px',height:'80px',borderRadius:'50%',backgroundColor:'#eb7328',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <ConstructionIcon sx={{fontSize:'45px',color:'white'}}/>
              </Typography>
              <Typography component='h4' sx={{fontSize:'22px',fontWeight:'bold',marginLeft:'10px'}}>Expert<br/> Electrician</Typography>
            </Typography>

            <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center',width:'50%',justifyContent:'center'}}>
              <Typography component='div' sx={{width:'80px',height:'80px',borderRadius:'50%',backgroundColor:'#eb7328',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <CableIcon sx={{fontSize:'45px',color:'white'}}/>
              </Typography>
              <Typography component='h4' sx={{fontSize:'22px',fontWeight:'bold',marginLeft:'10px'}}>Safety <br/> Assurance</Typography>
            </Typography>

            </Typography>

            <Typography component='ul' sx={{color:'#6e6e6e'}}>
              <Typography component='li' sx={{display:'flex',flexWrap:'wrap',alignItems:'center',marginBottom:'11px'}}><CheckIcon sx={{color:'#eb7328'}}/>Emergency Power Solutions (Generators, Transformers)</Typography>
              <Typography component='li' sx={{display:'flex',flexWrap:'wrap',alignItems:'center',marginBottom:'11px'}}><CheckIcon sx={{color:'#eb7328'}}/>Emergency Power Solutions (Generators, Transformers)</Typography>
              <Typography component='li' sx={{display:'flex',flexWrap:'wrap',alignItems:'center',marginBottom:'11px'}}><CheckIcon sx={{color:'#eb7328'}}/>Emergency Power Solutions (Generators, Transformers)</Typography>
            </Typography>

            <Typography component='div'><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/signature-1.png'></img></Typography>
          </Typography>
        </Typography>

        </Typography>
      </Container>
    </Typography>
    )
}
export default Twopart;