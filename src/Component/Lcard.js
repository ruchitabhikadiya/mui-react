import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

const Lcard = () =>{
    return(
        <>
<Typography component='div' sx={{width:'100%'}}>
    <Container>
    <Typography component='div' sx={{display:'flex',flexWrap:'wrap'}}>

      <Card sx={{width:{xs:'calc(100% - 60px)',sm:'calc(50% - 60px)',md:'calc(33.33% - 60px)',lg:'calc(33.33% - 60px)',xl:'calc(33.33% - 60px)'},backgroundColor:'#525353', color:'white', margin:'0px 30px',marginTop:'10px',borderRadius:'0'}}> 
        <CardActionArea>
          <CardMedia
            component="img"
            image="http://23july.hostlin.com/easton/wp-content/uploads/2022/04/feature-1.jpg"
            alt="green iguana"/>
          <CardContent sx={{padding:'60px'}} className='content-box'>
            <Typography gutterBottom variant="h5" component="div">
              <ElectricalServicesIcon sx={{fontSize:'60px',color:'#eb7328'}}/>
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'25px'}}>Safety Inspection</Typography>
            <Typography variant="body2" color="white" sx={{fontSize:'18px',marginBottom:'10px'}}>
               Inspection of wirings to ensure the connections are in proper state.
            </Typography>
            <Typography component="h4" sx={{fontWeight:'500'}}>Read more</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{width:{xs:'calc(100% - 60px)',sm:'calc(50% - 60px)',md:'calc(33.33% - 60px)',lg:'calc(33.33% - 60px)',xl:'calc(33.33% - 60px)'},backgroundColor:'#525353', color:'white',margin:'0px 30px',marginTop:'10px',borderRadius:'0'}}> 
        <CardActionArea>
          <CardMedia
            component="img"
            image="http://23july.hostlin.com/easton/wp-content/uploads/2022/05/7.png"
            alt="green iguana"
          />
          <CardContent sx={{padding:'60px'}} className='content-box'>
            <Typography gutterBottom variant="h5" component="div">
              <ElectricalServicesIcon sx={{fontSize:'60px',color:'#eb7328'}}/>
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'25px'}}>Safety Inspection</Typography>
            <Typography variant="body2" color="white" sx={{fontSize:'18px',marginBottom:'10px'}}>
               Inspection of wirings to ensure the connections are in proper state.
            </Typography>
            <Typography component="h4" sx={{fontWeight:'500'}}>Read more</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{width:{xs:'calc(100% - 60px)',sm:'calc(50% - 60px)',md:'calc(33.33% - 60px)',lg:'calc(33.33% - 60px)',xl:'calc(33.33% - 60px)'},backgroundColor:'#525353', color:'white', margin:'0px 30px',marginTop:'10px',borderRadius:'0'}}> 
        <CardActionArea>
          <CardMedia
            component="img"
            image="http://23july.hostlin.com/easton/wp-content/uploads/2022/04/feature-3.jpg"
            alt="green iguana"
          />
          <CardContent sx={{padding:'60px'}} className='content-box'>
            <Typography gutterBottom variant="h5" component="div">
              <ElectricalServicesIcon sx={{fontSize:'60px',color:'#eb7328'}}/>
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'25px'}}>Safety Inspection</Typography>
            <Typography variant="body2" color="white" sx={{fontSize:'18px',marginBottom:'10px'}}>
               Inspection of wirings to ensure the connections are in proper state.
            </Typography>
            <Typography component="h4" sx={{fontWeight:'500'}}>Read more</Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      </Typography>
    </Container>
  </Typography>
  </>
    )
}
export default Lcard;