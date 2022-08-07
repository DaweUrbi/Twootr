import {useState} from 'react';
import axios from 'axios';
import {TwootStyle} from "./styles/Twoot.style";


function MyTwoot(props) {

  const [disable, setDisable] = useState(false)
  const [tweet, setTweet] = useState("");
  const [lessThanZero, setLessThanZero] = useState(false)

  const date = new Date().toLocaleDateString("en-CA")

  const newTwoot = {
    author: props.author,
    content: tweet,
    authorSlug: props.authorSlug,
    dateAdded: date
  }

  const inputLength = (tweet.length)
  let maxChars = 140
  let charCount = maxChars - inputLength

  function myTweet(e) {
    e.preventDefault()
    console.log(newTwoot)
    console.log(tweet);
    console.log();
    axios.post("/twoot", {newTwoot}).then(
      (response) => {
        props.setTwoots([response.data, ...props.twoots])
      }
    )
  }

  function checkTweet(e) {
    setTweet(e.target.value)

    if (e.target.value.length >= maxChars) {
      setDisable(true)
      // alert("You have exceeded the character limit")
      charCount = 0
      setLessThanZero(true)
      return
    }
    if ((e.target.value) === "") {
      setDisable(true)
      // alert("This field should not be empty")
      return
    }
    setDisable(false)
    setLessThanZero(false)
  }

  return (
    <TwootStyle>
      <form onSubmit={myTweet}>
        <div className="TwootFlexUpper">
          <h1>Compose Twoot</h1>
          <input type="text"
                 placeholder="What are you humming about?"
                 onChange={checkTweet}
          />
        </div>
        <div className="TwootFlexBottom">
          <button disabled={disable}>Twoot</button>
          <span style={{ color: lessThanZero ? "red" : "black" }}>{charCount}</span>
        </div>
      </form>
    </TwootStyle>
  )
}


export default MyTwoot