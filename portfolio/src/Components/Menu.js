import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';
import { display } from '@mui/system';
import {
  IconName,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
} from "react-icons/di";

import { SiRedux, SiGit } from "react-icons/si";


function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item,i)=>{
                    return (
                      <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                          <div className="portfolio-image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="content-text">
                            <h4>{item.title}</h4>
                          <p 
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              fontSize: "1rem",
                            }}
                          >
                            {item.text}
                          </p>
                          </div>

                          <div>
                            <a
                              href={item.link1}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button>GitHub</button>
                            </a>
                            <a
                              href={item.link2}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button>Demo</button>
                            </a>
                          </div>
                          <div className="iconsgroup" >
                            {/* {item.techStack.map((e, i) => (
                              <h1 style={{color:"blue",fontSize:"3rem",paddingTop:"0px",marginTop:"0px"}}>{e}</h1>
                            ))} */}
                                    {
                                        i === 0 ? <>
                                           <div style={{display:"flex",flexDirection:"column"}}> <DiHtml5 style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">HTML5</label></div>
                                            <div style={{display:"flex",flexDirection:"column"}}><DiCss3 style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">CSS3</label></div>
                                            <div style={{display:"flex",flexDirection:"column",width:"50px"}}><DiJavascript style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">JAVASCRIPT</label></div>
                              </> : <>
                                                <div style={{display:"flex",flexDirection:"column"}}><DiReact style={{ fontSize: "3.2rem", color: "rgb(5,127,255)" }} className="icons"/><label className="hide">REACT</label></div>
                                                <div style={{display:"flex",flexDirection:"column"}}><SiRedux style={{fontSize: "2.6rem", color: "rgb(5,127,255)",marginTop:"2px"}} className="icons"/><label style={{marginTop:"7px"}} className="hide">REDUX</label></div>
                                                <div style={{display:"flex",flexDirection:"column"}}><DiCss3 style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">CSS3</label></div>
                                                {/* <div style={{display:"flex",flexDirection:"column",width:"50px"}}><DiJavascript style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">JAVASCRIPT</label></div> */}
                                                <div style={{display:"flex",flexDirection:"column"}}><DiMongodb style={{fontSize: "3rem", color: "rgb(5,127,255)"}} className="icons"/><label className="hide">MONGODB</label></div>
                                                
                                        </>
                                    }
                          </div>
                        </div>
                      </div>
                    );
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width:920px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
      grid-template-columns: repeat(1, 1fr);
        
    }
    .grid-item{
        .portfolio-content{
            width: 100%;
            /* height: 600px; */
            height: fit-content;
            border: 1px solid white;
            border-radius: .5rem;
            display: block;
            /* position: relative; */
            overflow: hidden;
            align-items:center;
            text-align: center;
            justify-content: center;
            
            @media screen and (max-width:600px){
              /* height:650px; */
              width: 90%;
              margin: auto;
                
            }
            @media screen and (max-width:411px){
              /* height:730px; */
              width: 90%;
              margin: auto;
              
                
            }
            
            .content-text{
              /* text-align: center; */
              /* width: 90%; */
              margin: auto;
              @media screen and (max-width:411px){
                margin-top:4.9rem ;
              }
            }
            .iconsgroup {
            margin-top: 1rem;
            display: flex;
            width: 100%;
            justify-content:space-evenly;
            margin-bottom: 2rem;

            @media screen and (max-width:411px){
                 border: 1ps solid white;
                 
                  
            }

            }
            .hide{
              font-size:10px;
              display:block;
            }
            .icons{
             /* &:hover+.hide{
               display:block;
               font-size:10px;

                   } */
                    
                  }
                
            h4{
                padding-top:5px;
                font-size: 1.5rem;
            }
            p{
                padding:10px;
            }
            img{
                width: 100%;
                height: 300px;
      
            }
            button{
                    cursor:pointer;
                    border:none;
                    background-color: var(--primary-color);
                    color: white;
                    cursor: pointer;
                    display: inline-block;
                    font-size: .7rem;
                    text-align:center;
                    width:70px;
                    height:40px;
                    text-transform: uppercase;
                    position: relative;
                    transition: all .4s ease-in-out;
                    @media screen and (max-width:660px){
                    margin-top:30px;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        width: 0;
                        height: .2rem;
                        transition: all .4s ease-in-out;
                        left: 0;
                        bottom: 0;
                        opacity: .7;
                    }
                    &:hover::after{
                        width: 100%;
                        background-color: var(--white-color);
                    }
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 35%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 4rem;
                        height: 4rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }

            .portfolio-image{
              
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
                 @media screen and (max-width:411px){
                    height: 12rem;
                }  
            }
            // .portfolio-image:hover{
            //     ul{
            //         transform: translateY(0);
            //         transform: translate(-50%, -50%);
            //         display: flex;
            //         align-items: center;
            //         justify-content: center;
            //         transition: all .4s ease-in-out;
            //         opacity: 1;
            //         li{
            //             transition: all .4s ease-in-out;
            //             &:hover{
            //                 background-color: var(--primary-color);
            //             }
            //             a{
            //                 display: flex;
            //                 align-items: center;
            //                 justify-content: center;
            //                 transition: all .4s ease-in-out;
            //             }
            //         }

            //         li:hover{
            //             svg{
            //                 color: var(--white-color);
            //             }
            //         }
            //         svg{
            //             font-size: 2rem;
            //         }
            //     }
            //     &::before{
            //         height: calc(80% - 32%) ;
            //         width: calc(100% - 4%);
            //         background-color: white;
            //         opacity: 0.9;
            //         transform-origin: left;
                    
            //         transition: all .4s ease-in-out;
            //     }
           // }
        }
    }
`;

export default Menu;
