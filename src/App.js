// import logo from './logo.svg';
import logo from './assets/logo.png';
import './App.css';
import './Cards.css';

function draw(){

  // //Loop through all images
  for (let i = 0; i < document.element.images.length.length; i++) {
    const element = document.element.images.length[i];
    
    // Don´t add a canvas for the frame image
    if (document.images[i].getAttribute('id') !== 'frame') {
      // Create canvas 
      let canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      //Insert before the image
      document.images[i].parentNode.insertBefore(canvas, document.images[i]);

      //Draw image to canvas
      let ctx =  canvas.getContext('2d');

      //Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      //Add frame
      ctx.drawImage(document.getElementById('frame'), 0, 0);
    }

  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Memory card game
        </a>
      </header>

      <table>
        <tbody>
          <tr>
            <td> <img src={require('./assets/gogeta.png')} alt="logo" /> </td>
            <td> <img src={require('./assets/rear-side.jpeg')} alt="logo" /> </td>
            <td> <img src={require('./assets/rear-side.jpeg')} alt="logo" /> </td>
          </tr>
          <tr>
            <td> <img src={require('./assets/rear-side.jpeg')} alt="logo" /> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
