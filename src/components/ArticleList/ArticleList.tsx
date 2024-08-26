import { useGetArticlesQuery } from '../../lib/api/articleApi';
import { useAppSelector, useAppDispatch } from '../../lib/store';
import {
  deletArticle,
  toggleArticleToFavorites,
  changeShowFavorite
} from '../../lib/slices/articleSlice';

import { ArticleListCard } from '../ArticleListCard/ArticleListCard';
import style from './ArticleList.module.css';

export function ArticleList() {
  useGetArticlesQuery();
  const data = useAppSelector((state) => state.article.data);
  const isShowFavorite = useAppSelector(
    (state) => state.article.isShowFavorite
  );
  const dispatch = useAppDispatch();
  console.log(data);

  function deleteArt(id: number) {
    dispatch(deletArticle(id));
  }

  function addFavorites(id: number) {
    dispatch(toggleArticleToFavorites(id));
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isShowFavorite}
          onChange={() => {
            dispatch(changeShowFavorite());
          }}
        />
        Is show favorite
      </label>
      <ul className={style.wrapper}>
        {isShowFavorite &&
          data
            .filter((el) => el.isFavorite)
            .map((el) => {
              return (
                <ArticleListCard
                  key={el.id}
                  {...el}
                  addFavorites={addFavorites}
                  deleteArt={deleteArt}
                />
              );
            })}
        {!isShowFavorite &&
          data.map((el) => {
            return (
              <ArticleListCard
                key={el.id}
                {...el}
                addFavorites={addFavorites}
                deleteArt={deleteArt}
              />
            );
          })}
      </ul>
    </>
  );
}
