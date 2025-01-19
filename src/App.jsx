import { useState } from 'react'
import './App.css'

function App() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handlePostTweet = () => {
    if (newTweet.trim().length == 0) {
      alert("text area cannot be empty");
      return;
    }
    if (newTweet.length > 250) {
      alert("tweet can not be longer than 250 characters");
      return;
    }

    const tweet = {
      id: Date.now(),
      content: newTweet,
      isLiked: false,
      likes: 0,
    };

    setTweets([tweet, ...tweets]);
    setNewTweet("");
  };

  const handleLike = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? { ...tweet, isLiked: !tweet.isLiked, likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1 }
          : tweet
      )
    );
    if (tweets.isLiked == true) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "black";
    }
  };

  return (
    <>
      <div className="container">
        <header><h1>Twitter</h1></header>
        <textarea
          placeholder="enter your tweet"
          maxLength={250}
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button className="btnPost" onClick={handlePostTweet}>
          share
        </button>
        <h2>posts</h2>
        <ul className="tweetList">
          {tweets.map((tweet) => (
            <li key={tweet.id} className="tweet">
              <p className="postContent">{tweet.content}</p>
              <div className="actions">
                <button
                  onClick={() => handleLike(tweet.id)}
                  className={`btnLike ${tweet.isLiked ? "liked" : ""}`}
                >
                  ❤️ {tweet.likes > 0 && tweet.likes}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
