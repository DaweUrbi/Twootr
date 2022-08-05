import { useState } from 'react';
import axios from 'axios';
import './MyTwoot.module.css'


function MyTwoot (props) {


const [tweet, setTweet] = useState("")

    const date = new Date().toLocaleDateString("en-CA")

    const newTwoot = {
        author:props.author,
        content:tweet,
        authorSlug:props.authorSlug,
        dateAdded: date
    }

    const inputLength = (tweet.length)
    var maxChars =  140
    var charCount = maxChars - inputLength

    function myTweet(e) {    
         e.preventDefault()
          if (inputLength >= maxChars) {
            alert("You have exceeded the character limit")
            charCount = 0
            return 
        }
        if ((tweet) === "") {
            alert("This field should not be emity")
            return
        }
         console.log(newTwoot)
         console.log(tweet);
         console.log();
            axios.post("/twoot", {newTwoot}).then (
                (response) => {props.setTwoots([response.data, ...props.twoots])}  
                
            )
        }         

    

    return (
        <div className="MytwootWrapper" >
            <form onSubmit={myTweet}>
                <div className="TwootFlexUpper">
                    <h1>Compose Twoot</h1>
                    <input type="text" 
                    placeholder="What are you huming about?"
                    onChange={(e) => setTweet(e.target.value)}
                    />
                </div>
                <div className="TwootFlexBottom">
                    <button>Twoot</button>
                    <span>{charCount}</span>
                </div>
            </form>
         </div>
    )
}


export default MyTwoot