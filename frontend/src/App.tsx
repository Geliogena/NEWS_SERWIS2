/*import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NewsDetails from './pages/NewsDetails';
import AddEditNews from './pages/AddEditNews';
import Login from './pages/Login';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/add" element={<AddEditNews />} />
      <Route path="/edit/:id" element={<AddEditNews />} />
    </Routes>
  );
};

export default App;*/

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NewsDetails from './pages/NewsDetails';
import AddEditNews from './pages/AddEditNews';
import Login from './pages/Login';
import NotificationHandler from './components/NotificationHandler'; 

const App: React.FC = () => {
  return (
    <>
      
      <NotificationHandler />
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/add" element={<AddEditNews />} />
        <Route path="/edit/:id" element={<AddEditNews />} />
      </Routes>
    </>
  );
};

export default App;
