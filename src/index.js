import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Chat from './components/Chat';

ReactDOM.render(<Chat />, document.getElementById('root'));
registerServiceWorker();
