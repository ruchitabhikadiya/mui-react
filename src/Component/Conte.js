import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const bull = (
    <Box 
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const Conte = () =>{
    return(
        <Typography component='div' sx={{width:'100%',position:'relative'}}>
      <Typography component='div' sx={{width:'100%',height:'auto',backgroundColor:'#f2efeb',overflow:'hidden'}}>
        <Container sx={{display:'flex',justifyContent:'end'}}>
        <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-12.png' className='contect_img_1'></img>
        <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/vector-1.png' className='contect_img_main'></img>
        <img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-13.png' className='contect_img'></img>
        </Container>
      </Typography>
      <Typography component='div' sx={{width:'100%'}}>
      <Container>
        <Typography component='div' sx={{width:'100%'}}>
          <Card sx={{ Width: '30%' ,position:'absolute',top:'0',margin:{xs:'50px 0',sm:'100px 0',md:'150px 0',lg:'150px 0',xl:'150px 0'},padding:'30px 20px'}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 ,fontWeight:'bold'}} color="#eb7328">CONTACT</Typography>
              <Typography variant="h3" component="div"  sx={{ mb: 1.5 }}>
              Need Electrical <br/> Services Help?
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
              Don't hesitate to call us on any Electrical Service, our team awaits your call.
              </Typography>

              <Typography component='div' sx={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                <Typography component='div' id='contect_round' sx={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'20px'}}><PhoneInTalkIcon sx={{fontSize:'40px',color:'white'}}/></Typography>
                <Typography component='div'>
                  <Typography component='p'  sx={{color:'#666668',fontSize:'22px'}}>For Emergency</Typography>
                  <Typography component='p' sx={{fontSize:'24px' , fontWeight:'bold'}}>+012-4350-7689</Typography>
                </Typography>
              </Typography>

            </CardContent>
          </Card>
        </Typography>
      </Container>
      </Typography>
    </Typography>
    )
  }
  export default Conte;