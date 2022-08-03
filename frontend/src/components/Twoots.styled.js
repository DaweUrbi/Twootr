import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3em;
  padding: 1rem;
  border: 3px solid black;

  &:hover {
    box-shadow: 12px 12px 2px 1px rgb(5, 5, 10, .3);
  }
`;

export const TwootTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TwootBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`

export const AuthorIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;
`

export const FuncIcon = styled.img`
  width: 1rem;
  margin: 0 0.5rem;

  &:hover {
    filter: invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%);
  }
`

export const ContentParagraph = styled.p`
  text-align: left;
  border-bottom: 2px solid #282c34;
  padding-bottom: .5rem;
  font-family: "Kanit";
  font-weight: 600;
`

export const TwootLog = styled.p`
  text-align: left;
  margin: 0;
`
