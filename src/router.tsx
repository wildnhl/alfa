import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { ArticleList } from './components/ArticleList/ArticleList';
import { Article } from './components/Article/Article';

export const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: '/',
        element: <ArticleList />
      },
      {
        path: '/article-page/:id',
        element: <Article />
      }
    ]
  }
]);
