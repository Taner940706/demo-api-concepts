import './App.css';
import concepts from '../src/database/db.js'
import mainImage from '../src/assets/images/restapi.png'

function App() {
  return (
    <div>
      <header>
        <img src={mainImage} alt='Main image'/>
        <h1>Main concepts of Rest API</h1>
      </header>
      <ul id='concepts'>
        <li className='concept'>
          <img src={concepts[0].image} alt={concepts[0].title} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className='concept'>
          <img src={concepts[1].image} alt={concepts[1].title} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className='concept'>
          <img src={concepts[2].image} alt={concepts[2].title} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
        <li className='concept'>
          <img src={concepts[3].image} alt={concepts[3].title} />
          <h2>{concepts[3].title}</h2>
          <p>{concepts[3].description}</p>
        </li>
        <li className='concept'>
          <img src={concepts[4].image} alt={concepts[4].title} />
          <h2>{concepts[4].title}</h2>
          <p>{concepts[4].description}</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
