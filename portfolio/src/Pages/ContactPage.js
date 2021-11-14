import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
// import { LinkedIn } from '@material-ui/icons';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import LinkedIn from '@material-ui/icons/LinkedIn';
import Grid from "@mui/material/Grid";

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const linkedIn=<LinkedInIcon/>
    return (
      <MainLayout>
        <Title title={"Contact"} span={""} />
        <ContactPageStyled>
          <InnerLayout className={"contact-section"}>
            <div className="right-contents">
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <ContactItem
                    title={"Phone"}
                    icon={phone}
                    cont1={"+91- 9497079246"}
                    cont2={""}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactItem
                    title={"Email"}
                    icon={email}
                    cont1={"ananthuasokkumar@gmail.com"}
                    cont2={""}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactItem
                    title={"LinkedIn"}
                    icon={linkedIn}
                    cont1={"ananthu-asokkumar"}
                    cont2={""}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactItem
                    title={"Address"}
                    icon={location}
                    cont1={" Adimali, Kerala, India"}
                    cont2={""}
                  />
                </Grid>
              </Grid>
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
    );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    /* margin-left:%; */
    margin-top: 2rem;
    padding: 1rem;
    /* border: 1px solid green; */
    .right-contents {
      display: flex;
  
      /* border: 1px solid red; */
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      /* border: 1px solid red; */
      h4 {
        color: var(--font-light-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    
   
      
      
    
  }
`;

export default ContactPage
