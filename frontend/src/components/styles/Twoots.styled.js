import styled from "styled-components";

export const Twoots = styled.div`
  padding: 2rem 3rem;
  border: 3px solid black;
  margin: 0 3rem 2rem 3rem;
  

  &:hover {
    box-shadow: 12px 12px 2px 1px rgb(5, 5, 10, .3);
  }
  
  div.container {
    display: flex;
    vertical-align: middle;
    
    img.author-icon {
      width: 5rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 300;
    color: #595875;
  }
  
  p {
    text-align: left;
    margin: 0;
    padding-bottom: 0.7rem;
    font-size: 1.8rem;
    font-weight: 600;
    border-bottom: 3px solid black;
  }

  div.post-bottom {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0;
    }
    
    .icon-container {
      display: flex;
      
      img {
        display: block;
        width: 1.5rem;
        height: auto;
        margin: 0 .7rem;
      }
    }
  }
`;

export const TwootTop = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin-bottom: 1rem;
`

export const AuthorIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

export const FuncIcon = styled.img`
  &:hover {
    filter: invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%);
  }
`