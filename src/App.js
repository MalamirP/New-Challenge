import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Category from './pages/Category-ENG/Category-ENG';
import ViewCategoryPage from './pages/ViewCategory/ViewCategoryPage';
import Header from './components/Header/Header';
import CategoryIT from './pages/Category-IT/Category-IT';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="" element={<Category />} />
          <Route exact path="view-category" element={< ViewCategoryPage />} />
          <Route exact path='it' element={<CategoryIT />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
