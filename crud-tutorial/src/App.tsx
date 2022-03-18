import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
      <h5>React CRUD operations using PHP API and MySQL</h5>
      
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
