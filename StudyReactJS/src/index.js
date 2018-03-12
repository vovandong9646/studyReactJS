import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo1 from './component/demo1/Demo1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
