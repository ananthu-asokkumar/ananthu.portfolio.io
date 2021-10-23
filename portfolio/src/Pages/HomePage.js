import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import homepage from '../img/homepage.gif'
import { Instagram } from '@material-ui/icons';
import { MediumCircleFilled,MediumSquareFilled } from "@ant-design/icons";
function HomePage() {
    return (
      <HomePageStyled>
        <div className="particle-con">{/* <Particle /> */}</div>
        <div className="typography">
          <h2>
            Hi, I'm <span>Ananthu Asokkumar</span>
          </h2>
          <br />
          <p>
            A Full Stack developer who is dedicated and passionate about my work
            and believe in hard work. I like to make full stack applications
            which challenge my skills.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/ananthu-asokkumar-70143212b/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon i-facebook"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/ananthu-asokkumar"
              className="icon i-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://medium.com/@ananthuasokkumar"
              className="icon i-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumSquareFilled style={{width:"45px"}} />
            </a>
          </div>
        </div>
      </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
 
  .typography {
    // height: 90vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-medium {
        &:hover {
          border: 2px solid blue;
          color: blue;
          // width:5px;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
