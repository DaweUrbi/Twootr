import styled from "styled-components";
import flag from "../image/flagBlack.png";
import retwoot from "../image/retweetBlack.png";
import favourite from "../image/favoriteBlack.png"
import {useState} from "react";
import { Wrapper, TwootTop, TwootBottom, AuthorIcon, FuncIcon, ContentParagraph, TwootLog } from "./Twoots.styled";

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
    <Wrapper>
      <TwootTop>
        <span style={{display: 'flex'}}>
          < AuthorIcon src={`https://avatars.dicebear.com/api/bottts/${author}.svg`}/>
          <p>{author}</p>
        </span>
        <p> @{authorSlug} </p>
      </TwootTop>
      <ContentParagraph>{content}</ContentParagraph>
      <TwootBottom>
        <TwootLog>Twooted {dateCalc(dateAdded)} days ago</TwootLog>
          <div>
            < FuncIcon src={flag}/>
            < FuncIcon src={retwoot} onClick={retweetHandler}/> {retweetCount}
            < FuncIcon src={favourite} onClick={favouriteHandler}/> {favouriteCount}
          </div>
      </TwootBottom>
    </Wrapper>
  )
}