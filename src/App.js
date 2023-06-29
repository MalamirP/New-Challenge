import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Category from './pages/Category-ENG/Category-ENG';
import ViewCategoryPage from './pages/ViewCategory/ViewCategoryPage';
import CategoryIT from './pages/Category-IT/Category-IT';
import LoginPage from './pages/LoginPage/LoginPage';
import UploadPage from './pages/Upload-Page/UploadPage';


function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route exact path='upload' element={<UploadPage />} />
          <Route exact path="en" element={<Category />} />
          <Route exact path="view-category" element={< ViewCategoryPage />} />
          <Route exact path='it' element={<CategoryIT />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
