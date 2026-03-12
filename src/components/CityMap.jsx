import { cityCoordinates } from "../utils/cityCoordinates";

export default function CityMap() {

  return (
    <div>

      <h2>City Locations</h2>

      {Object.entries(cityCoordinates)
        .map(([city, coord]) => (

          <p key={city}>
            {city} :
            {coord[0]}, {coord[1]}
          </p>

      ))}

    </div>
  );
}