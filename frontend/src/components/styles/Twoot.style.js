import styled from "styled-components";

export const TwootStyle = styled.div`
  background: #F4F1EC;
  padding: 2rem 3rem;
  text-align: left;
  color: #5B6166;
  
  * {
    margin: 0 auto;
  }
  
  .TwootFlexUpper {

  }
  
  .TwootFlexBottom {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    * {
      margin: 0;
    }
  }
  
  button {
    display: block;
    border: none;
    border-radius: 0.6em;
    background-color: rgb(113, 26, 117);
    font-size: 12px;
	  color: white;
	  font-family: 'Permanent Marker', sans-serif;
    font-weight: 300;
    padding: .5rem 1.2rem;
  }

  button:disabled,
  button[disabled]{
  border: none;
  border-radius: 0.6em;
  font-size: 12px;
  font-family: 'Permanent Marker', sans-serif;
  font-weight: 300;  
  background-color: #cccccc;
  color: #666666;
} 

  input {
    width: 98%;
    font-size: 1.6rem;
    font-weight: 600;
    border: none;
    border-bottom: 0.2em solid black;
    padding: 1em;
    background: #F4F1EC;
  }

  input[type="text"]:focus {
    outline: none;
  }
`