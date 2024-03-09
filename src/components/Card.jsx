import {useEffect, useState} from "react";

const Card = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(response => setCountries(response));
    }, []);

    console.log(countries)

  return(
      <>
          {
            countries.map(contry => {
                return(
                    <div key={contry.name.common}
                         className="h-48 bg-gray-200 rounded-lg border border-black shadow-lg flex flex-col items-center m-1">
                        <p><img className="rounded-t-lg h-40" src={contry.flags.png} alt={contry.flags.alt}/></p>

                        <h3>{contry.name.common}</h3>
                    </div>
                )
            })
          }
      </>
  )
}

export default Card;