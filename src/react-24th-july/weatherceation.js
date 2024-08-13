


import { useState, useEffect } from "react";
 import findingWhether from "./weather";
 import "./weather.css"

const WhetherApi = () => {
  const [season, setSeason] = useState("winter");
  const [greet, setGreet] = useState("");

  useEffect(() => {
    greethandler();
  }, [season]);

  const greethandler = () => {
    const greetstring = findingWhether(season);
    setGreet(greetstring);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <>
      <h2>Hello my world can you select the season</h2>

      <select value={season} onChange={handleSeasonChange}>
        <option value="winter">Winter</option>
        <option value="summer">Summer</option>
        <option value="monsoon">Monsoon</option>
      </select>

      <h3>{greet}</h3>

      {greet === "monsoon" ? (
        <img
          src="https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?b=1&s=170667a&w=0&k=20&c=DHrXh8fFW_33CVy5603IOswob8aYeWWMLXlSEXKsomI="
          height="300px"
          width="300px"
          alt="Monsoon"
          className="weather-image"

        />
      ) : greet === "summer" ? (
        <img
          src="https://media.istockphoto.com/id/1150050227/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.webp?b=1&s=612x612&w=0&k=20&c=ydxyKq3nhlcjyx-w2dUCH1WMXrt9FuXRK78oBwh44i8="
          height="300px"
          width="300px"
          alt="Summer"
          className="weather-image"

        />
      ) : (
        <img
          src="https://media.istockphoto.com/id/186534154/photo/winter-landscape-with-beautiful-reflection-in-the-water.webp?b=1&s=612x612&w=0&k=20&c=3k8ZZ9Uk1TNXFWt1-wALKKsxgtWSn0yEiZVew0AUbXI="
          height="300px"
          width="300px"
          alt="Winter"
          className="weather-image"
        />
      )}
    </>
  );
};

export default WhetherApi;