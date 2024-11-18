import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GeneralInformation from './components/GeneralInformation';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <GeneralInformation />
    <WorkHistory />
    <Education />
  </React.StrictMode>
);

reportWebVitals();