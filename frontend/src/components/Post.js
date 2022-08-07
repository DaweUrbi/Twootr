import flag from "../image/flagBlack.png";
import retwoot from "../image/retweetBlack.png";
import favourite from "../image/favoriteBlack.png"
import {useState} from "react";
import {AuthorIcon, FuncIcon, Twoots, TwootTop} from "./styles/Twoots.styled";

export default function Post({author, authorSlug, content, dateAdded}) {

  const [retweetCount, setRetweetCount] = useState(0);
  const [favouriteCount, setFavouriteCount] = useState(0);

  const retweetHandler = () => {
    setRetweetCount(prevState => prevState + 1)
  }

  const favouriteHandler = () => {
    setFavouriteCount(prevState => prevState + 1)
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
          < FuncIcon src={flag}/>
          < FuncIcon src={retwoot} onClick={retweetHandler}/> {retweetCount}
          < FuncIcon src={favourite} onClick={favouriteHandler}/> {favouriteCount}
        </div>
      </div>

    </Twoots>
  )
}