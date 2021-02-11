import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.less';
import App from './App';
import GlobalStyles from './globalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <GlobalStyles />
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
