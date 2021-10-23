import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import Grid from "@mui/material/Grid";
import html5 from '../img/skills/html5.png';
import css3 from '../img/skills/css3.png';
import nodejs from '../img/skills/nodejs.png';
import javascript from '../img/skills/javascript.png';
import materialui from '../img/skills/materialui.png';
import react from '../img/skills/react.png';
import redux from '../img/skills/redux.png';
import mongodb from '../img/skills/mongodb.png';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';
function Skills() {
    return (
      <SkillsStyled>
        <Title title={"My Skills"} span={"my skills"} />
        <InnerLayout>
          <Grid sx={{ width: "100% " }} container spacing={3} columns={24}>
            {/* <Grid item xs={2} md={2} lg={2}></Grid> */}
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={html5} alt="" height="120px" width="120px" />
                <Typography>HTML5</Typography>
              </Card>
            </Grid>
            <Grid item xs={6} md={8} lg={6} sx={{ width: "50%" }}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={css3} alt="" height="120px" width="120px" />
                <Typography>CSS3</Typography>
              </Card>
            </Grid>
            {/* <Grid item xs={0} md={0} lg={2}></Grid> */}
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={javascript} alt="" height="120px" width="120px" />
                <Typography>JavaScript</Typography>
              </Card>
            </Grid>
            {/* <Grid item xs={0} md={0} lg={2}></Grid> */}

            {/* <Grid item xs={0} md={0} lg={2}></Grid> */}
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={nodejs} alt="" height="120px" width="120px" />
                <Typography>Node Js</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={mongodb} alt="" height="120px" width="120px" />
                <Typography>mongoDB</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={react} alt="" height="120px" width="120px" />
                <Typography>React</Typography>
              </Card>
            </Grid>
            {/* <Grid item xs={0} lg={2}></Grid> */}
            {/* <Grid item xs={0} lg={2}></Grid> */}
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={redux} alt="" height="120px" width="120px" />
                <Typography>Redux</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Card
                className="skillIcon"
                sx={{ width: "150px", textAlign: "center", height: "160px" }}
              >
                <img src={materialui} alt="" height="120px" width="120px" />
                <Typography>Material UI</Typography>
              </Card>
            </Grid>
          </Grid>
          {/* </div> */}
        </InnerLayout>
      </SkillsStyled>
    );
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .skillIcon {
        background-color:#a4acc4;
        &:hover {
            box-shadow: 0px 0px 12px #037fff;
            transform: scale(1.1)
        }
    }
`;

export default Skills;
