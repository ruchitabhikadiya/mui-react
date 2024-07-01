import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Faq = () =>{
    return(
    <> 
    <Typography component='div' sx={{width:'100%',paddingTop:{xs:'40px',sm:'40px',md:'80px',lg:'80px',xl:'80px'},paddingLeft:'0px',paddingRight:'0px'}}>
      <Container>
        <Typography component='div' sx={{width:'100%',display:'flex',flexWrap:'wrap'}}>

          <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},height:'100%',padding:'0px',overflow:'hidden',position:'relative'}}>
            <Typography component='div' sx={{position:'absolute',right:'60px',top:'230px'}}><img src='https://23july.hostlin.com/easton/wp-content/uploads/2022/04/shape-9.png'></img></Typography>
            <Typography component='div' sx={{width:'100%',position:'relative'}} id='FAQ'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/faq-1.jpg'></img></Typography>
            <Typography component='div' sx={{position:'absolute',bottom:'0px',right:'0px'}} id='FAQ'><img src='http://23july.hostlin.com/easton/wp-content/uploads/2022/04/faq-2.jpg'></img></Typography>
          </Typography>

          <Typography component='div' sx={{width:{xs:'100%',sm:'100%',md:'50%',lg:'50%',xl:'50%'},paddingLeft:{xs:'0px',sm:'0px',md:'50px',lg:'50px',xl:'50px'},overflow:'hidden',position:'relative'}}>
            <Typography component='h6' variant='h6' sx={{color:'#eb7328'}}>FAQ’S</Typography>
            <Typography component='h3' variant='h3' sx={{fontWeight:'bolder',marginBottom:'20px'}}>Frequently Asked Question</Typography>
            <Typography component='p' variant='p' sx={{marginBottom:'20px'}}>Some of the most asked questions here asked by our valuable Customers…</Typography>


          <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{fontWeight:'bold'}}>Can’t I just call a handyman to fix minor electrical problems? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              handymen don’t have specialty training in electrical work. Although most have basic electrical skills, that may not be enough to ensure safety and accuracy, which may increase the risk of electrocution or an electrical fire. It is best to get a professional and skilled electrician to ensure the job will be done right the first time.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{fontWeight:'bold'}}>How do you handle emergency electrical issues?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We prioritize safety and customer satisfaction above all. Our professional and skilled electricians are always available to respond to electrical emergencies promptly, day or night. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{fontWeight:'bold'}}>What are some signs that I need electrical repair work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We prioritize safety and customer satisfaction above all. Our professional and skilled electricians are always available to respond to electrical emergencies promptly, day or night. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{fontWeight:'bold'}}>Do I need to be present when your team is working?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We know that you are busy. So once we assess the problem together, you will not need to be present as we do our work.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{fontWeight:'bold'}}>Are You Licensed and Insured?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We respect the Govt. Laws, rules, policies and all the official documentations and procedures are well covered.
              </Typography>
            </AccordionDetails>
          </Accordion>
    </div>

          </Typography>

        </Typography>
      </Container>
    </Typography>
    </>
    )
}
export default Faq;