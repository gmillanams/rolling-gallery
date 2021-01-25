import React from 'react'
import ReactDOM from 'react-dom'
import FrontPage from './front-page/FrontPage'

React.useTransition = React.unstable_useTransition
React.SuspenseList = React.unstable_SuspenseList
ReactDOM.createRoot = ReactDOM.unstable_createRoot

ReactDOM.createRoot(
  document.getElementById('root')
).render(<FrontPage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
