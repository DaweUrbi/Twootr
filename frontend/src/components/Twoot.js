import axios from 'axios';
import './MyTwoot.module.css'

function MyTwoot (props) {

    
    // function myTweet(e) {    
    //     e.preventDefault()
    //     console.log("teste");
    //     const postTwoot = () => {
    //         axios.post("/twoot", {newTwoot: {
    //             author:props.author,
    //             content:props.content,
    //             authorSlug:props.authorSlug,
    //             dateAdded:props.date
    //         }})

    //     }
    //     return postTwoot
    // }
    
    return (
        <div className="MytwootWrapper">
            <form onSubmit={myTweet}>
                <div className="TwootFlexUpper">
                    <h1>Compose Twoot</h1>
                    <input type="text" placeholder="What are you huming about?"  />
                </div>
                <div className="TwootFlexBottom">
                    <button>Twoot</button>
                    <span>140</span>
                </div>
            </form>
        </div>
    )
}

export default MyTwoot