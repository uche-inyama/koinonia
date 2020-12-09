import styled from 'styled-components'

export const Contactform = styled.div`
  padding: 20px;
  border: 1px solid grey;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  text-transform: capitalize;
  .success {
    background-color: green;
    bottom: 50px;
    font-size: 1.2;
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin-bottom: 10px;
    padding: 5px 10px 5px 30px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
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
  .form-items-wrapper{
    display: flex;
    flex-direction: column;
    height: 320px;
    list-style: none;
    padding-left: 0px;
  }
  .field.submit{
    position: relative;
    top: 50px;
    width: 50%;
    margin: 0 auto;
  }
  .field {
    display: flex;
    flex-direction: column;
    height: 72px;
    .submit{
      margin-top: 20px;
      border-radius: 3px;
    }
    input{
      height: 35px;
      border-radius: 5px;
      border: 1px solid grey;
    }
    p {
      color: red;
      margin-bottom: 0px;
      font-size: 0.8em;
      height: 0px;
    }
    label{
      margin-bottom: 2px;
    }
    textarea {
      min-height: 100px;
      max-height: 200px;
      border-radius: 5px;
      border: 1px solid gray;
    }
  }
  .space{
    margin-left: 15px;
  }
  .name-mobile{
    display: flex;
  } 
`