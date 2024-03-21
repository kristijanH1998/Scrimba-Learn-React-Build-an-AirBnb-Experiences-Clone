import Navbar from "./Navbar.jsx"
//import Hero from "./Hero.jsx"
import Card from "./Card.jsx"
//import Contact from "./Contact.jsx"

export default function App() {
    return (
        <div className="contacts">
          <Navbar />
          {/* <Hero /> */}
          <Card 
            img="./katie-zaferes.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
          />
          
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
