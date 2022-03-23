import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
)
