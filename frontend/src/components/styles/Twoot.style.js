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



// <<<<<<< HEAD
//   input[type="text"] {
//     border: none;
//     width: 100%;
//     line-height: 3rem;
//     background: #F4F1EC;
//     font-size: 1.5rem;
//     font-weight: 600;
//     padding-bottom: 1.5rem;
//     border-bottom: 5px solid black;
//     font-family: 'Kanit', sans-serif;
//   }
//

//
//   div.TwootFlexBottom {
//     margin: 1.6rem 0;
//     display:flex;
//     justify-content: space-between;
//     font-family:'Permanent Marker', sans-serif;
//   }
//
//   button {
//     background: rgb(177,134,175);
//     color: #fff;
//     border: none;
//     border-radius:10%;
//     font-family:'Permanent Marker', sans-serif;
//     font-size: 1.5rem;
//     padding: .5rem 1.3rem;
//   }
//
// `
//
// export const paragraphStyle = ( lessThanZero )=> styled.p`
//   margin: 0 2rem 0 0;
//   font-size: 1.6rem;
//   padding: 0;
//   color: ${ props => props.lessThanZero ? 'red' : 'black' }
// `
