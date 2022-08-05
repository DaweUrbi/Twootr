import Post from "./Post";

export default function Twoots(props) {
  const twootsList = props.twoots.map((twoot) => {
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