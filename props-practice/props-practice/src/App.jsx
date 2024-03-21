import Joke from "./Joke.jsx"

export default function App() {
  return (
    <>
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvote={2}
        comments={[{author: "", body: "", title: ""}, {author: "", body: "", title: ""}]}
      />
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
      />
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
      />
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
      />
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
      />
      <Joke 
        punchline="It’s hard to explain puns to kleptomaniacs because 
        they always take things literally."
        isPun={false}
      />
    </>
  )
}

