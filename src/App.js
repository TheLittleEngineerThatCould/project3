
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Stylists from './component/Stylists';
import Stylist from './component/Stylist';
import Edit from './component/EditStylist'
// import Create from './components/CreateTodo';

// import { Route, Switch, NavLink, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Stylist List</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Stylists />} />
          <Route path='/:id' element={<Stylist />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
