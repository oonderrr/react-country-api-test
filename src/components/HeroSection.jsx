import Card from "./Card.jsx";


const HeroSection = () => {

  return(
      <>
          <div className="h-max flex flex-wrap justify-evenly m-3 border p-1 border-black rounded-xl shadow-xl">
              <Card />
          </div>
      </>
  )
}

export default HeroSection;