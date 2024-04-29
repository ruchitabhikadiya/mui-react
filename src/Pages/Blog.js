import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const Blog = () =>{
    return(
<>
    <Typography component='div' sx={{width:'100%'}} className='page-slider'>
      <Typography component='div' className='page' sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"104px 0px 106px 0px",position:'relative',zIndex:"999"}}>
        <Typography component='div'>
          <Typography component='h3' variant='h3'>Blog Grid</Typography>
          <Typography component='p' sx={{display:"flex",justifyContent:'center',alignItems:'center'}}>home <KeyboardArrowRightIcon/> Blog Grid</Typography>
        </Typography>
      </Typography>
    </Typography>

    <Typography component='div' sx={{width:'100%',display:'flex',flexWrap:'wrap',margin:'80px 0'}}>
        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-11.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>Low-Voltage Lighting:<br/> What Is It?</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>


        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-10.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>Electrical Upgrade During <br/> Your Remodel:</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-9.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>Searching The Best <br/>Elctrician Near You</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-8.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>How to Save Energy <br/>in Domestic Building</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-7.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>Newly Built & Customized <br/> Power Plants</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className='news-width box-shadow' sx={{width:{xs:'calc(100% - 20px)',sm:'calc(50% - 20px)',md:'calc(33.33% - 20px)',lg:'calc(33.33% - 20px)',xl:'calc(33.33% - 20px)' },margin:'10px' }}>
          <CardActionArea>
            <Typography component="div" id='Blog_cross'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/news-6.jpg'></img></Typography>
            <Typography component='h5' sx={{position:'absolute',top:'40%',left:"40px",backgroundColor:"white",padding:'10px 20px'}} className='blog_cross_color'>April 27, 2022</Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>Install Landscape Lighting <br/> & Boost Value.</Typography>
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
              <Typography variant="body2" color="text.secondary" sx={{marginBottom:'20px',fontSize:'20px'}}>
                  Despite the fact that line voltage is the norm, low-voltage lighting is frequently used in ...
              </Typography>

              <Typography variant="a" sx={{fontWeight:'bold',display:'flex',alignItems:'center'}} className='news_content'>READ MORE <KeyboardArrowRightIcon sx={{color:'#eb7328',display:'none'}} className='news_arrow'/></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Typography>

    </>
    )
}
export default Blog;