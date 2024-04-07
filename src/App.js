import Jsx, { Greet } from "./containers/Jsx";
import DataBinding from './containers/Databinding'
import Users from './containers/Users'
import { Routes, NavLink, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Jsx</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/binding">Databinding</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <h1>Akshita's Project</h1>
      <div className="container">
        <Routes>
          <Route path="/" element={<Jsx />}></Route>
          <Route path="/binding" element={<DataBinding />}></Route>
          <Route path="/Users" element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;