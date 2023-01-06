// THE FIRST FILE TO BE EXECUTED. 

import ReactDOM from 'react-dom/client';

import './index.css';  //React sugar. Usualy CSS files are not imported into JS code.
import App from './App'; //Root App Component.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);  //React sugar, this object is handled by React for display in Browser.
