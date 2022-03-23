import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import('./views/Home'))

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>,
  document.getElementById('root')
)
