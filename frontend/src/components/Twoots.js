import {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

export default function Twoots() {

  const [twoots, setTwoots] = useState([])
  const DATA_URL = "http://localhost:8080/twoots";

  const getTwoots = () => {
    axios.get(DATA_URL)
      .then(response => {
        setTwoots(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    getTwoots();
  }, [])

  const twootsList = twoots.map((twoot) => {
    return (
        < Post
          key = { twoot._id }
          author={ twoot.author }
          authorSlug={ twoot.authorSlug }
          content = { twoot.content }
          dateAdded = { twoot.dateAdded }
        />
    )
  })

  return (
    <div style={{backgroundColor: "#F4F1EC"}}>
      { twootsList }
    </div>
  )
}