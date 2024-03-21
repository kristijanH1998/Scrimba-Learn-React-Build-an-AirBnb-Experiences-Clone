import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Card from "./Card.jsx"
//import Contact from "./Contact.jsx"
import data from "./data.js"

export default function App() {
  const cardElements = data.map((card) => {
    return <Card
              key={data.indexOf(card)}
              // card={card}  -> if this is used, in Card.jsx we must include .card before accessing props, 
              // like this: props.card.coverImg, instead of just props.coverImg. This also works:
              {...card} 
           />
    
  })
  return (
      <div className="contacts">
        <Navbar />
        <Hero />
        {/* <Card 
          img="./katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          location="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        /> */}

        <section className="cards--list">{cardElements}</section>

        {/* <Contact 
          img="./mr-whiskerson.png"
          name="Mr.Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact 
          img="./fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact  
          img="./felix.png"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact 
          img="./pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        /> */}
      </div>
  )
}
