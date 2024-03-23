import data from "./data.js"
import Navbar from "./Navbar.jsx"
import Card from "./Card.jsx"

export default function App() {
  
  const cards = data.map((card) => {
    return <Card 
            key = {data.indexOf(card)}
            {...card}
           />
  })
  return (
    <div className="journal">
      <Navbar />
      <div>{cards}</div>
    </div>
  )
}

