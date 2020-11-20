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
  background-color: #fff;
  position: absolute;
  top: 100px;
  padding: 0;
  margin: 0;
  color: #8c8c88;;
  box-shadow: 0 0 15px 0  grey;
  box-sizing: border-box;
  font-size: 0.8em;
  width: 10%;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  text-align: center;
`;