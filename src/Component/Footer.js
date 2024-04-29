import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';


const Footer = () =>{
    return(
        <>
        <Typography component='div' sx={{width:'100%',paddingTop:'67px',paddingBottom:'67px',marginTop:'100px'}} className='footer'>

            <Typography component='div' sx={{width:'100%',position:'relative',top:'-120px'}}>
            <Container>
                <Typography component='div' sx={{backgroundColor:'#eb7328',padding:'35px 50px',display:{xs:'block',sm:'block',md:'flex',lg:'flex',xl:'flex'},flexWrap:'wrap',justifyContent:{xs:'center',sm:'center',md:'space-between',lg:'space-between',xl:'space-between'},alignItems:'center'}}>
                <Typography component='h4' variant='h4' sx={{color:'white'}}>Subscribe to Our Newsletter</Typography>
                <Typography component='div' sx={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                    <form>
                    <input type='email' placeholder='Your email address' id='email'></input>
                    </form>
                    <button type='submit' id='button'>Subscribe Now</button>
                </Typography>
                </Typography>
            </Container>
            </Typography>

            <Container>
            <Typography component='div' sx={{display:'flex',flexWrap:'wrap',color:'#fff',width:'100%'}}>

                <Typography component='ul' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'25%',xl:'25%',marginTop:'30px'}}}>
                <Typography component='li'>
                    <Typography component='div'><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/footer-logo.png'></img> </Typography>
                    <p>With regard to most services, Easton provides a wide range of electrical services with the quickest turnaround times.</p>
                </Typography>
                </Typography>

                <Typography component='ul' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'25%',xl:'25%'},marginTop:'30px'}}>
                <Typography component='li' sx={{paddingLeft:{sx:'0',sm:'0',md:'100px',lg:'100px',xl:'100px'}}}>
                    <Typography component='div' variant='h5' sx={{marginBottom:'20px'}}>Links</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>About</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Services</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Team</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Projects</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Testimonial</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Faq’s</Typography>
                </Typography>
                </Typography>

                <Typography component='ul' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'25%',xl:'25%'},marginTop:'30px'}}>
                <Typography component='li' sx={{paddingLeft:{sx:'0',sm:'0',md:'100px',lg:'100px',xl:'100px'}}}>
                    <Typography component='div' variant='h5' sx={{marginBottom:'20px'}}>Services</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Air Conditioning</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Heating Service</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Power Outlets</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Indoor Lighting</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Security System</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Electrical Panels</Typography>
                </Typography>
                </Typography>

                <Typography component='ul' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'25%',xl:'25%'},marginTop:'30px'}}>
                <Typography component='li' sx={{paddingLeft:{sx:'0',sm:'0',md:'100px',lg:'100px',xl:'100px'}}}>
                    <Typography component='div' variant='h5' sx={{marginBottom:'20px'}}>Contacts</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>+2(305) 587-3407</Typography>
                    <Typography component='p' sx={{marginBottom:'10px',fontSize:'18px'}}>sample@example.com</Typography>
                </Typography>
                </Typography>

            </Typography>
            </Container>
            </Typography>

            <Typography component='div' sx={{width:"100%",display:'flex',justifyContent:'space-between',color:'#fff'}} id='last_footer'>
            <Container sx={{display:{xs:'block',sm:'block',md:'flex',lg:'flex',xl:'flex'},justifyContent:'space-between'}}>
            <Typography component='ul'> © 2024 All Right Reserved</Typography>
            <Typography component='ul'>
                <Typography component='li'>Terms of Service</Typography>
            </Typography>
            </Container>
        </Typography>
        </>
    )
}
export default Footer;