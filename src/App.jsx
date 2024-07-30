import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Favorites from './pages/Favorites';
import SingleGIF from './pages/SingleGIF';
import Categories from './pages/Categories';
import Layout from './layouts/Layout';

function App() {

  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/search",
          element: <SearchPage />
        },
        {
          path: "/:category/:postId",
          element: <SingleGIF />
        },
        {
          path: "/:category",
          element: <Categories />
        },
        {
          path: "/favorites",
          element: <Favorites />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
