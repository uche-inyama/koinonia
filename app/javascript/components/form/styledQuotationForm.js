import styled from 'styled-components'

export const Quotation = styled.div`
  position: absolute;
  top: 180px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  .success {
    background-color: green;
    color: white;
    padding: 5px 10px 5px 30px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.2;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    span {
      color: #fff;
      display:inline-block;
      margin-left: 20px;
      width: 20px;
      text-transform: lowercase;
      border: solid 1px gray;
      border-radius: 50%;
      cursor: pointer;
    }
    span:hover {
      background-color: gray;
      color: #fff;
    }
  }
ul {
  list-style:none;
  padding-left: 0px;
}
form {
  border-radius: 5px;
  box-shadow: 0 0 10px 0  grey, 0 0 10px -5px #505f79;
  border-radius: 5px;
  background-color: #fff;
  display: none;
  padding: 10px;
  .field {
    display: flex;
    flex-direction: column;
    p {
      color: red;
      font-size: 0.8em;
    }
  }
  input {
    width: 320px;
    height: 40px;
  }
  li{
    padding: 8px;
  }
  label{
    color: #fff;
    font-size: 1.4em;
    font-weight: 600;
    text-transform: capitalize;
    padding: 4px 0;
  }
  .field.submit{
    padding: 10px 0;
  }
}
`;