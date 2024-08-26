import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { ArticleList } from './components/ArticleList/ArticleList';
import { Article } from './components/Article/Article';

export const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: '/alfa',
        element: <ArticleList />
      },
      {
        path: '/alfa/article-page/:id',
        element: <Article />
      }
    ]
  }
]);
