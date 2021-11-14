import React from 'react';
import styled from 'styled-components';


function ContactItem({title, icon, cont1, cont2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
  background-color: var(--background-dark-grey);
  display: flex;
  /* border: 1px solid white; */
  height: 6rem;
  width: 19rem;
  margin-bottom: 1.6rem;
  padding: 1.5rem;
  @media screen and (max-width: 360px) {
    width: 18rem;
  }
  .left-content {
    border: 1px solid var(--border-color);
    /* border: 1px solid yellow; */
    font-size: 1rem;
    display: flex;
    height: 3rem;
    width: 2.8rem;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;

    svg {
      font-size: 2rem;
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    /* border: 3px solid cadetblue; */
    h6 {
      color: var(--font-light-color);
      font-size: 1.2rem;
      padding-top: 0rem;
      /* padding-bottom: .6rem; */
    }
    p {
      /* padding: .1rem 0; */
      font-size: 0.9rem;
    }
  }
`;

export default ContactItem;
