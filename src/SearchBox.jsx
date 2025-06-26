import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (!response.ok) {
        throw new Error(response.status === 404 ? "City not found. Please check the spelling." : "Weather service unavailable");
      }

      const jsonResponse = await response.json();
      return {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0]?.description || "Unknown",
      };
    } catch (err) {
      throw err; 
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) return;
    
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
        />
        <br /><br />
        <Button 
          variant="contained" 
          type="submit"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </Button>
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </form>
    </div>
  );
}