import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
const Greeter = ({ whom }) => (
  <button onClick={() => console.log(`Bonjour ${whom} !`)}>
    Vas-y, clique !
  </button>
)

ReactDOM.render(<Greeter whom="Roberto" />, document.getElementById('root'))
*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();