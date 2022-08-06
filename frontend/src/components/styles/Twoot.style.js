import styled from "styled-components";

export const Twoot = styled.div`
  background: #F4F1EC;
  padding: 2rem 2rem;
  
  * {
    margin: 0 auto;
  }
  
  .TwootFlexUpper {

  }
  
  .TwootFlexBottom {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    border: none;
    border-radius: 0.6em;
    background-color: rgb(113, 26, 117);
    font-size: 12px;
	  color: white;
	  font-family: 'Permanent Marker', sans-serif;
    font-weight: 300;
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
    width: 52%;
    border: none;
    border-bottom: 0.2em solid black;
    margin: 1em;
    
  }

`