import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Contect = () =>{
    return(
        <>
        <Typography component='div' sx={{width:'100%'}} className='page-slider'>
          <Typography component='div' className='page' sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"104px 0px 106px 0px",position:'relative',zIndex:"999"}}>
            <Typography component='div'>
              <Typography component='h3' variant='h3'>Contact</Typography>
              <Typography component='p' sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>home <KeyboardArrowRightIcon/> Contact</Typography>
            </Typography>
          </Typography>
        </Typography>
     
        <Typography component='div' sx={{width:'100%',display:'flex',flexWrap:'wrap',margin:'80px 0'}}>
    
          <Typography component='div' sx={{width:{xs:"100%",sm:'100%',md:"100%",lg:'25%',xl:'25%'},padding:'20px'}}>
            <Typography variant='h4' sx={{fontWeight:'bolder',marginBottom:'20px'}}>Get In Touch</Typography>
            <Typography component='div' variant='p' sx={{fontSize:'18px',paddingBottom:'20px'}}>Give us a call or drop by anytime, we answer all enquiries within 24 hours.</Typography>
            <Typography component='div' variant='p' sx={{fontSize:'18px',marginBottom:'20px',color:'#6E6E6E'}}>Modesto, 629 12th St, CA 95354 United States</Typography>
            <Typography component='div' variant='p' sx={{fontSize:'18px',marginBottom:'20px',color:'#6E6E6E'}}>infomain@gmail.com</Typography>
            <Typography variant='h5'>+1 (230)-456-155-23</Typography>
          </Typography>
    
          <Typography component='div' sx={{width:{xs:"100%",sm:'100%',md:"100%",lg:'75%',xl:'75%'}}}>
            <form className='contect'>
              <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>
                <input type='text' placeholder='Your Name' id='contect-input'></input>
                <input type='email' placeholder='Your email' id='contect-input'></input>
              </Typography>
              <Typography component='div' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <input type='nimber' placeholder='phone' id='phone-input'></input>
              </Typography>
              <Typography component='div' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <textarea type='text' placeholder='Message' id='phone-input' cols='0' rows='5' ></textarea>
              </Typography>
            </form>
            <Typography component='div' sx={{marginLeft:'40px'}}>
              <button className='contect-btn' >Send Message<KeyboardArrowRightIcon/></button>
            </Typography>
          </Typography>
        </Typography>
    
        <Typography component='div' sx={{width:'100%'}}>
          <iframe src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near'></iframe>
        </Typography>
        </>
    )
}
export default Contect;