import React from "react";
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const News = () =>{
    return(
    <>
    <Typography component='div' sx={{width:'100%',marginTop:'80px'}}>
      <Container>
        <Typography component='div' sx={{display:'flex',justifyContent:'center'}}>
          <Typography component='div' sx={{textAlign:'center',width:'50%'}}>
            <Typography component='p' sx={{color:'#eb7328',fontSize:'20px'}}>LATEST NEWS</Typography>
            <Typography component='h3' sx={{fontWeight:'bolder',fontSize:{xs:'20px',sm:'25px',md:'40px',lg:'40px',xl:'40px'}}}>Stay Updated with Easton News</Typography>
          </Typography>
        </Typography>
        <Typography component='div' sx={{display:'flex',flexWrap:'wrap',width:'100%'}}>

        <Card className='news-width' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px'}}>
          <CardActionArea>
            <Typography component="div" id='news_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/3.jpg'></img></Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Low-Voltage Lighting:<br/> What Is It?</Typography>
              <Typography component='div' sx={{display:'flex',alignItems:'center',marginBottom:'20px'}}>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center',marginRight:'20px'}}>
                  <PersonIcon sx={{color:'#eb7328'}}/>
                  <p>admin</p>
                </Typography>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center'}}>
                  <CalendarMonthIcon sx={{color:'#eb7328'}}/>
                  <p>April 27, 2022</p>
                </Typography>

              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='news_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/1.jpg'></img></Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Low-Voltage Lighting:<br/> What Is It?</Typography>
              <Typography component='div' sx={{display:'flex',alignItems:'center',marginBottom:'20px'}}>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center',marginRight:'20px'}}>
                  <PersonIcon sx={{color:'#eb7328'}}/>
                  <p>admin</p>
                </Typography>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center'}}>
                  <CalendarMonthIcon sx={{color:'#eb7328'}}/>
                  <p>April 27, 2022</p>
                </Typography>

              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='news_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/8.jpg'></img></Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">Low-Voltage Lighting:<br/> What Is It?</Typography>
              <Typography component='div' sx={{display:'flex',alignItems:'center',marginBottom:'20px'}}>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center',marginRight:'20px'}}>
                  <PersonIcon sx={{color:'#eb7328'}}/>
                  <p>admin</p>
                </Typography>

                <Typography component='div' color="text.secondary" sx={{display:'flex',alignItems:'center'}}>
                  <CalendarMonthIcon sx={{color:'#eb7328'}}/>
                  <p>April 27, 2022</p>
                </Typography>

              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        </Typography>
      </Container>
    </Typography>
    </>
    )
}
export default News;