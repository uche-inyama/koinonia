/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Arrow = ({ direction, handleClick }) => (
  <div
    className="arrow"
    onClick={handleClick}
    css={css`
    display: flex;
    position: absolute;
    top: 30%;
    right: 1px;
    ${direction === 'right' ? `right: 0px` : `left: 0px`};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    FontAwesomeIcon {
      transform: translateX(${direction === 'left' ? '-2' : '2'}px);
      &:focus {
        outline: 0;
      }    
    } 
    svg {
      color: #000;
      font-size: 2.5em;
      padding-top: 10px;
    }
    box-shadow: 0 0 10px 0  grey, 0 0 15px -5px #505f79;  
    `
    }
  >
    {direction === 'right' ? <FontAwesomeIcon icon={['fas', 'angle-right']} />
      : <FontAwesomeIcon icon={['fas', 'angle-left']} />}
  </div>
);

export default Arrow
