import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Category from './pages/Category/Category';
import ViewCategoryPage from './pages/ViewCategory/ViewCategoryPage';
import Header from './components/Header/Header';
import ItalyCategoryPage from './pages/ItalyCategoryPage/ItalyCategoryPage';

function App() {


  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Category />} />
          <Route exact path="view-category" element={< ViewCategoryPage />} />
          <Route exact path='view-italy-category' element={<ItalyCategoryPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
