import styled from "styled-components";
import flag from "../image/flagBlack.png";
import retwoot from "../image/retweetBlack.png";
import favourite from "../image/favoriteBlack.png"
import {useState} from "react";

export default function Post({author, authorSlug, content, dateAdded}) {

  const [ retweetCount, setRetweetCount ] = useState(0);
  const [ favouriteCount, setFavouriteCount ] = useState(0);
  const [ isHovering, setIsHovering ] = useState(false);


  const retweetHandler = () => {
    setRetweetCount( prevState => prevState + 1 )
  }

  const favouriteHandler = () => {
    setFavouriteCount(prevState => prevState + 1)
  }

  const handleMouseHover = () => {
    console.log(isHovering)
    setIsHovering(!isHovering);
  }

  const handleMouseLeave = () => {
    console.log(isHovering)
  }

  const Wrapper = styled.div`
    margin: 3em;
    padding: 1rem;
    border: 3px solid black;
  `;

  const TwootTop = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const AuthorIcon = styled.img`
    width: 3rem;
    margin-right: 1rem;
  `

  const FuncIcon = styled.img`
    width: 1rem;
    margin: 0 0.5rem;
  `

  const ContentParagraph = styled.p`
    text-align: left;
    border-bottom: 2px solid #282c34;
    padding-bottom: .5rem;
    font-family: "Kanit";
    font-weight: 600;
  `
  const TwootLog = styled.p`
    text-align: left;
    margin: 0;
  `

  const dateCalc = (twootDate) => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const theToday = todayDate.getDate();
    const todayDay = year + '-' + month + '-' + theToday;
    if(todayDay !== twootDate) {
      const targetDay = new Date(twootDate).getTime();
      const today = new Date().getTime()
      const pastTime = Math.ceil((today - targetDay) / 1000 / 60 / 60 / 24)
      return pastTime;
    }
    return "today"
  }

  return (
    <Wrapper onMouseEnter = { handleMouseHover }  onMouseLeave={handleMouseLeave}>
      <TwootTop>
        <span style={{display: 'flex'}}>
          < AuthorIcon src={`https://avatars.dicebear.com/api/bottts/${author}.svg`}/>
          <p>{author}</p>
        </span>
        <p> @{authorSlug} </p>
      </TwootTop>
      <ContentParagraph>{content}</ContentParagraph>
      <TwootLog>Twooted {dateCalc(dateAdded)} days ago</TwootLog>
      < FuncIcon src={flag}/>
      < FuncIcon src={retwoot} onClick={retweetHandler}/> { retweetCount }
      < FuncIcon src={favourite} onClick={favouriteHandler}/> { favouriteCount }
    </Wrapper>
  )
}