import logo from './logo.svg';
import './App.css';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Details
        name="Shubham"
        age="21"
      />
      <Details
        name="Satyam"
        age="20"
      />
      <Details
        name="Aditya"
        age="21"
      />
    </div>
  );
}

export default App;
