import { Container, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ConstructionIcon from '@mui/icons-material/Construction';
import CableIcon from '@mui/icons-material/Cable';
import CheckIcon from '@mui/icons-material/Check';

const About = () =>{
    return(
        <>
        <Typography component='div' sx={{width:'100%'}} className='page-slider'>
          <Typography component='div' className='page' sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"104px 0px 106px 0px",position:'relative',zIndex:"999"}}>
            <Typography component='div'>
              <Typography component='h3' variant='h3'>About</Typography>
              <Typography component='p' sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>home <KeyboardArrowRightIcon/> About</Typography>
            </Typography>
          </Typography>
        </Typography>
    
      <Typography component='div' sx={{width:'100%',height:'600px',margin:'40px 0',backgroundColor:'white'}}>
        <Container>
        <Typography component='div' sx={{width:'100%',display:'flex',flexWrap:'wrap'}}>
          <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},height:'100%',padding:'50px 0',overflow:'hidden',position:'relative'}}>
            <Typography component='div' sx={{position:'absolute',right:'60px',top:'230px'}}><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-9.png'></img></Typography>
            <Typography component='div' sx={{width:'100%',position:'relative'}} id='FAQ'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/about-5.jpg'></img></Typography>
            <Typography component='div' sx={{position:'absolute',bottom:'0',right:'0px'}} id='About-FAQ'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/about-6.jpg'></img></Typography>
          </Typography>
    
          <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},marginTop:'0px',padding:'20px'}}>
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
    
              </Typography>
            </Typography>
        </Typography>
        </Container>
      </Typography>
        </>
    )
}
export default About;
