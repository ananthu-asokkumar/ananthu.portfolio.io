import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import aboutpic from '../img/aboutpic.PNG'
import PrimaryButton from './PrimaryButton';
import homepage from '../img/homepage.gif'

function ImageSection() {
    return (
      <ImageSectionStyled>
        <div className="left-content">
          <img src={homepage} alt="" height="378px" />
        </div>
        <div className="right-content">
          <h4>
            I am <span>Ananthu Asokkumar</span>
          </h4>
          <p className="paragraph">
            An aspiring full-stack developer with a specialization in MERN
            stack. Looking forward to working in a highly motivating and
            challenging environment that gives me an opportunity to utilize my
            creative and technical skills to achieve the organization’s goal
            while achieving my personal goal.
          </p>
          <div className="about-info">
            <div className="info-title">
              <p>Full Name</p>
              <p>Nationality </p>
              <p>Location</p>
            </div>
            <div className="info">
              <p>: Ananthu Asokkumar</p>
              <p>: Indian</p>
              <p>: Adimali, Kerala</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1spHTuV-LrWsjn_TFK4to0Bhs9V_vTvZ8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton title={"Resume"} />
          </a>
        </div>
      </ImageSectionStyled>
    );
}


const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 90%;
    img {
      width: 100%;
      object-fit: content;
      
    }
    @media screen and (max-width:769px){
      padding-left: .5rem;
      width: 95%;
  
    }
    
  }
  .right-content {
    padding: .67rem;
    padding-left: .8rem;
    padding-top: 0rem;
    width: 100%;
     h4 {
      font-size: 1.5rem;
      color: var(--font-light-color);
      span {
        font-size: 1.5rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      font-size: 1rem;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 2rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 1rem;
        }
      }
    }
    @media screen and (max-width:440px){
      padding: .5rem;
  
    }
    @media screen and (max-width:320px){
      padding: .5rem;
      h4{
        font-size: 1.3rem;
        span{
          font-size: 1.3rem;
        }
      }
      .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 2.2rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: .9rem;
        }
      }
  
    }

    
   
  }
  }
`;
export default ImageSection;
