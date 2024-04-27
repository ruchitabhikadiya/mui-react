import React from "react";
import Typography from '@mui/material/Typography';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Four_box = () =>{
    return(
        <>
        <Typography component='div' sx={{width:'100%', backgroundColor:'#26282e',display:'flex',flexWrap:'wrap',padding:'70px 0px 64px 0px'}}>
        <Typography component='div' sx={{width:{xs:'100%',sm:'50%',md:'25%',lg:'25%',xl:'25%'},textAlign:'center',position:'relative'}}>
          <EmojiObjectsIcon sx={{color:'#eb7328',fontSize:'50px'}}/>
          <Typography component='div' sx={{color:'white',fontSize:'50px'}}>90</Typography>
          <Typography component='div' sx={{color:'white'}}>Successful projects</Typography>
          <Typography component='div' className='line_four'></Typography>
        </Typography>

      <Typography component='div' sx={{width:{xs:'100%',sm:'50%',md:'25%',lg:'25%',xl:'25%'},textAlign:'center',position:'relative'}}>
          <GroupsIcon sx={{color:'#eb7328',fontSize:'50px'}}/>
          <Typography component='div' sx={{color:'white',fontSize:'50px'}}>2.6 M</Typography>
          <Typography component='div' sx={{color:'white'}}>Satisfied Clients</Typography>
          <Typography component='div' className='line_four'></Typography>
      </Typography>

      <Typography component='div' sx={{width:{xs:'100%',sm:'50%',md:'25%',lg:'25%',xl:'25%'},textAlign:'center',position:'relative'}}>
          <ManageAccountsIcon sx={{color:'#eb7328',fontSize:'50px'}}/>
          <Typography component='div' sx={{color:'white',fontSize:'50px'}}>35</Typography>
          <Typography component='div' sx={{color:'white'}}>Experienced Staff</Typography>
          <Typography component='div' className='line_four'></Typography>
      </Typography>

      <Typography component='div' sx={{width:{xs:'100%',sm:'50%',md:'25%',lg:'25%',xl:'25%'},textAlign:'center',position:'relative'}}>
          <WorkspacePremiumIcon  sx={{color:'#eb7328',fontSize:'50px'}}/>
          <Typography component='div' sx={{color:'white',fontSize:'50px'}}>41</Typography>
          <Typography component='div' sx={{color:'white'}}>Award win</Typography>
          <Typography component='div' className='line_four'></Typography>
      </Typography>
    </Typography>
        </>
    )
}
export default Four_box;