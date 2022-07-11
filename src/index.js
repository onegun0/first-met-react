import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter3/Library';
// import Clock from './chapter4/Clock';
// import CommentList from './chapter5/CommentList';
// import NotificationList from './chapter6/NotificationList';
// import Counter from "./chapter7/Counter"
// import UserState from './chapter7/UserStatus';
// import ParentComponent from "./chapter7/UseCallback1";
import TextInputWithFocusButton from './chapter7/TextInputWithFocusButton';
import MeasureExample from './chapter7/MeasureExample';
import Accommodate from "./chapter7/Accommodate"
import Clock from './starCode/state1';
import TextMake from "./starCode/state2"
import Effect1 from "./starCode/Effect1"
import Timer from "./starCode/Effect2"
import App1 from './starCode/Effect3';
ReactDOM.render(
  <React.StrictMode>
    <App1 /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
