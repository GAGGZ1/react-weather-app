

import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import Alert from '@mui/material/Alert';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    setInitialLoad(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Gagan</h2>
      <SearchBox updateInfo={updateInfo} />
      
      {initialLoad && !weatherInfo && (
        <Alert severity="info" sx={{ maxWidth: 400, margin: '20px auto' }}>
          Search for a city to see weather (e.g., "Tokyo", "London")
        </Alert>
      )}
      
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : !initialLoad && (
        <Alert severity="warning" sx={{ maxWidth: 400, margin: '20px auto' }}>
          No weather data to display
        </Alert>
      )}
    </div>
  );
}