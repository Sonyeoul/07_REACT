<<<<<<< HEAD


import { News } from './00_question/00_question';
import ApiComponent from './02_api/02_fetch-then';
import { AxiosCallComponent } from './02_api/03_axios';
import { EmojiContainer } from './02_api/04_github-emoji';
import { Container } from './03_data-component/01_rendering-component';
import { Weather } from './03_data-component/02_weather-promise';
import { WeatherQuestion } from './03_data-component/03_weather-async';
import { Box } from './03_data-component/04_question';

function App() {
  return (
  <>
=======
import ApiComponent from "./02_api/02_fetch-then";
import AxiosCallComponent from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-emoji";
import Container from "./03_data-component/01_rendering-component";
import Weather from "./03_data-component/02_weather-promise";

function App() {
  return (
    <>
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
    {/* <ApiComponent/> */}
    {/* <AxiosCallComponent/> */}
    {/* <EmojiContainer/> */}
    {/* <Container/> */}
<<<<<<< HEAD
    {/* <WeatherQuestion/> */}
    {/* <Box/> */}
    <News/>
  </>
=======
    <Weather/>
    </>
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
  );
}

export default App;
