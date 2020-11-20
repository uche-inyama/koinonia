import styled from 'styled-components'

export const DropDownContainer = styled.div`
  width: 5em;
`;

export const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color:  #8c8c88;
  background-color: #fff;
`;

export const DropDownListContainer = styled.div`

`;

export const DropDownList = styled.ul`
  position: absolute;
  top: 100px;
  padding: 0;
  margin: 0;
  padding-left: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  box-sizing: border-box;
  color:  #8c8c88;
  font-size: 1.3rem;
  font-weight: 500;
  width: 15%;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  padding: 10px 0;
`;