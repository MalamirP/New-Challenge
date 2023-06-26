import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css'
import Category from './pages/Category-ENG/Category-ENG';
import ViewCategoryPage from './pages/ViewCategory/ViewCategoryPage';
import Header from './components/Header/Header';
import CategoryIT from './pages/Category-IT/Category-IT';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   fetch('188.166.21.103:4000/category?language=en', {
  //     headers: {
  //       'Accept': 'application/json',
  //     }
  //   })
  //     .then(response => response.text())
  //     .then(text => console.log(text))
  // })
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    console.log(token);
    fetch('188.166.21.103:4000/category?language=en', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        console.error(`Error:, ${error}`);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <LoginPage />
        <Routes>
          {/* <Route exact path="" element={<Category />} />
          <Route exact path="view-category" element={< ViewCategoryPage />} />
          <Route exact path='it' element={<CategoryIT />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
