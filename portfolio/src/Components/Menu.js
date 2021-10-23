import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';


function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return (
                      <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                          <div className="portfolio-image">
                            <img src={item.image} alt="" />
                   
                          </div>
                          <h6>{item.title}</h6>
                          <p
                            style={{
                              marginTop: "10px",
                              marginBottom: "10px",
                              fontSize: "1rem",
                            }}
                          >
                            {item.text}
                                </p>
                              
                                <div>
                                    <a href={item.link1} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a>
                                    <a href={item.link1} target="_blank" rel="noopener noreferrer"><button>Demo</button></a>
                                </div>
                                <div style={{marginTop:"2rem"}}>
                                    
                                  {
                                    item.techStack.map((e, i) => <img style={{height: "3rem", width :"3rem",marginRight:"1rem"}} src={e} key={i} alt=""></img>  )
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
            height: 600px;
            border: 1px solid white;
            display: block;
            position: relative;
            overflow: hidden;
            text-align: center;
            @media screen and (max-width:600px){
                height:550px;
                
            }
            //    @media screen and (max-width:900px){
            //     height:700px;
                
            // }
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 300px;
                // object-fit:contain;
            }
            button{
                    cursor:pointer;
                    border:none;
                    background-color: var(--primary-color);
                    // padding: .rem 1.5rem;
                    color: white;
                    cursor: pointer;
                    display: inline-block;
                    font-size: .7rem;
                    text-align:center;
                    // margin-top:10px;
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
