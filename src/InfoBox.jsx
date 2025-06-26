import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

  const getWeatherImage = (weather) => {
    weather = weather.toLowerCase();
    
    if (weather.includes('rain')) {
      return 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (weather.includes('cloud')) {
      return 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (weather.includes('sun') || weather.includes('clear')) {
      return 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (weather.includes('snow')) {
      return 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (weather.includes('thunder') || weather.includes('storm')) {
      return 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else if (weather.includes('haze') || weather.includes('fog') || weather.includes('mist')) {
      return 'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    } else {
      // Default weather image
      return 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    }
  };

  return (
    <div className='CardContainer'>
      <br/>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={getWeatherImage(info.weather)}
          title={info.weather}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
            <p>Feels Like = {info.feelsLike}&deg;C</p>
            <p>Weather: {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}