import Card from "./Card";
import TopBar from "./TopBar";
import { Vacation } from "./Vacation";
// import { Vacation } from './Vacations'

const App = () => (
  <div className="app">
    <TopBar />
    <h1 className="headline white-text">I am the main Application</h1>
    <Vacation available={true} />
    <Card action="greet" subject="people" />
  </div>
);
export default App;
