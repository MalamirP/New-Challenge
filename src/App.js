import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Category from './pages/Category';
import ViewCategoryPage from './pages/ViewCategoryPage';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Category />} />
          <Route exact path="view-category" element={< ViewCategoryPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
