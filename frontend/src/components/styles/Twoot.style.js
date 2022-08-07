import styled from "styled-components";

export const TwootStyle = styled.div`
  background: #F4F1EC;
  padding: 2rem 3rem;
  text-align: left;
  color: #5B6166;
  
  input[type="text"] {
    border: none;
    width: 100%;
    line-height: 3rem;
    background: #F4F1EC;
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
    border-bottom: 5px solid black;
    font-family: 'Kanit', sans-serif;
  }

  input[type="text"]:focus{
    outline: none;
  }
  
  div.TwootFlexBottom {
    margin: 1.6rem 0;
    display:flex;
    justify-content: space-between;
    font-family:'Permanent Marker', sans-serif;
  }
  
  button {
    background: rgb(177,134,175);
    color: #fff;
    border: none;
    border-radius:10%;
    font-family:'Permanent Marker', sans-serif;
    font-size: 1.5rem;
    padding: .5rem 1.3rem;
  }
  
`
//
// export const paragraphStyle = ( lessThanZero )=> styled.p`
//   margin: 0 2rem 0 0;
//   font-size: 1.6rem;
//   padding: 0;
//   color: ${ props => props.lessThanZero ? 'red' : 'black' }
// `