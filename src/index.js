import React from 'react';
import ReactDOM from 'react-dom';
import '../src/media/css/index.css';
import App from '../src/components/App';
import Success from '../src/components/success';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
