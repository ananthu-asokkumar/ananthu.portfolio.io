import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import homepage from '../img/homepage.gif'
import { Instagram } from '@material-ui/icons';
import { MediumCircleFilled, MediumSquareFilled } from "@ant-design/icons";
import { FaRegFilePdf } from "react-icons/fa";
function HomePage() {
    return (
      <HomePageStyled>
        <div className="particle-con">{/* <Particle /> */}</div>
        <div className="typography">
          <h4>
            Hi, I'm <span>Ananthu Asokkumar</span>
          </h4>
          <br />
          <p>
            A Full Stack developer who is dedicated and sincere about my work
            and believe in hard work.
            <br /> I like to make full stack applications which challenge my
            skills.
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/ananthu-asokkumar-70143212b/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon i-linkedin"
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
              <MediumSquareFilled style={{ width: "45px" }} />
            </a>
            <a
              href="https://drive.google.com/file/d/1spHTuV-LrWsjn_TFK4to0Bhs9V_vTvZ8/view?usp=sharing"
              className="icon i-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegFilePdf style={{ width: "28px",fontSize:"22px" }} />
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
    h4 {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
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

      .i-linkedin {
       width: 48px;
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
      .i-resume {
        &:hover {
          border: 2px solid red;
          color: red;
          font-size: 20px;
        }
      }
    }
  }
`;

export default HomePage;
