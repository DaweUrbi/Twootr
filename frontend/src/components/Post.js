import styled from "styled-components";

export default function Post({author, authorSlug, content, dateAdded}) {

  const Wrapper = styled.div`
    margin: 3em;
    padding: 1rem;
    border: 2px solid black;
  `;

  const TwootTop = styled.div`
    display: flex;
    justify-content: space-between
  `

  const AuthorIcon = styled.img`
    width: 3rem;
    margin-right: 1rem;
  `

  return (
    <Wrapper>
      <TwootTop>
        <span style={{display: 'flex'}}>
          < AuthorIcon src={`https://avatars.dicebear.com/api/bottts/${author}.svg`}/>
          <p>{author}</p>
        </span>
        <p> @{authorSlug} </p>
      </TwootTop>

      <p> {content} </p>
      <p> {dateAdded} </p>
    </Wrapper>
  )
}