import styled from 'styled-components'

export const DropDownContainer = styled.div``;

export const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color:  #000;
  padding: 10px;
  font-size: 2em;
  cursor: pointer;
  @media(min-width:1024px){
    font-size: 1.2rem;
    color: grey;
  }
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  background-color: white;
  position: absolute;
  top: 100px;
  right: 300px;
  padding: 0;
  margin: 0;
  color: #000;
  box-shadow: 0 0 15px 0  grey;
  box-sizing: border-box;
  font-size: 0.8em;
  width: 300px;
  list-style: none;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  text-align: center;
  text-decoration: none;
  font-size: 1.4em;
  color: #000;
`;