import './App.css';
import concepts from '../src/database/db'
import Header from './components/Header'
import Concept from './components/Concept';

function App() {
  return (
    <div>
      <Header />
      <ul id='concepts'>
        <Concept image={concepts[0].image} title={concepts[0].title} description={concepts[0].description} />
        <Concept image={concepts[1].image} title={concepts[1].title} description={concepts[1].description} />
        <Concept image={concepts[2].image} title={concepts[2].title} description={concepts[2].description} />
        <Concept image={concepts[3].image} title={concepts[3].title} description={concepts[3].description} />
        <Concept image={concepts[4].image} title={concepts[4].title} description={concepts[4].description} />
      </ul>
    </div>
  );
}

export default App;
