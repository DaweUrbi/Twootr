import './MyTwoot.module.css'

function MyTwoot (props) {

    function myTweet(e) {    
        e.preventDefault()
        console.log("teste");
    }
    
    return (
        <div className="MytwootWrapper">
            <div className="TwootFlexUpper">
                <h1>Compose Twoot</h1>
                <input type="text" placeholder="What are you huming about?" onSubmit={myTweet} />
            </div>
            <div className="TwootFlexBottom">
                <button onClick={myTweet}>Twoot</button>
                <span>140</span>
            </div>
        </div>
    )
}

export default MyTwoot