import flag from "../image/flagBlack.png";
import flagPink from "../image/flagColor.png";
import retwoot from "../image/retweetBlack.png";
import retwootColor from "../image/retweetColor.png";
import favouriteColor from "../image/favoriteColor.png";
import favourite from "../image/favoriteBlack.png";


import {useState} from "react";
import {AuthorIcon, FuncIcon, Twoots, TwootTop} from "./styles/Twoots.styled";

export default function Post({author, authorSlug, content, dateAdded}) {

  const [retweet, setRetweet] = useState(false);
  const [isfavourite, setFavourite] = useState(false);
  const [flagColor, setFlagColor] = useState(false);

  const flagColorHandler = () => {
    setFlagColor(!flagColor)
  }

  const retweetHandler = () => {
    setRetweet(!retweet)
  }

  const favouriteHandler = () => {
    setFavourite(!isfavourite)
  }

  const dateCalc = (twootDate) => {
    const todayDay = new Date().toLocaleDateString("en-CA")
    if (todayDay !== twootDate) {
      const targetDay = new Date(twootDate).getTime();
      const today = new Date().getTime()
      const pastTime = Math.ceil((today - targetDay) / 1000 / 60 / 60 / 24)
      return pastTime + "days ago";
    }
    return "today"
  }

  return (
    <Twoots>
      < TwootTop >
        <div className="container">
          < AuthorIcon className="author-icon" src={`https://avatars.dicebear.com/api/bottts/${author}.svg`}/>
          <h3>{author}</h3>
        </div>
        <h3> @{authorSlug} </h3>
      </TwootTop>
      <p>&emsp;{content}</p>
      <div className='post-bottom'>
        <h3>posted &emsp;{dateCalc(dateAdded)}</h3>
        <div className='icon-container'>
          < FuncIcon src={flagColor ? flagPink : flag} onClick={flagColorHandler}/>
          < FuncIcon src={retweet ? retwootColor : retwoot} onClick={retweetHandler}/>
          < FuncIcon src={isfavourite ? favouriteColor : favourite} onClick={favouriteHandler}/>
        </div>
      </div>
    </Twoots>
  )
}