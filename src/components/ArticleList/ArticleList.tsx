import { useGetArticlesQuery } from '../../lib/api/articleApi';
import { useAppSelector, useAppDispatch } from '../../lib/store';
import {
  deletArticle,
  addArticleToFavorites,
  changeShowFavorite
} from '../../lib/slices/articleSlice';
import { Link } from 'react-router-dom';
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
    dispatch(addArticleToFavorites(id));
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
                <Link
                  className={style.linkStyle}
                  to={`/article-page/${el.id}`}
                  key={el.id}
                >
                  <li className={style.listItem}>
                    <img
                      className={style.listItemImage}
                      src={el.image_url}
                      alt="image"
                    />
                    <h2 className={style.listItemHead}>{el.title}</h2>
                    <div className={style.listParagraphBtnWrapper}>
                      <p className={style.listItemParagraph}>{el.summary}</p>
                      <button
                        className={style.listBtn}
                        onClick={(event) => {
                          event.preventDefault();
                          deleteArt(el.id);
                        }}
                      >
                        Delete article
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          addFavorites(el.id);
                        }}
                      >
                        Add to fav
                      </button>
                    </div>
                  </li>
                </Link>
              );
            })}
        {!isShowFavorite &&
          data.map((el) => {
            return (
              <Link
                className={style.linkStyle}
                to={`/article-page/${el.id}`}
                key={el.id}
              >
                <li className={style.listItem}>
                  <img
                    className={style.listItemImage}
                    src={el.image_url}
                    alt="image"
                  />
                  <h2 className={style.listItemHead}>{el.title}</h2>
                  <div className={style.listParagraphBtnWrapper}>
                    <p className={style.listItemParagraph}>{el.summary}</p>
                    <button
                      className={style.listBtn}
                      onClick={(event) => {
                        event.preventDefault();
                        deleteArt(el.id);
                      }}
                    >
                      Delete article
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        addFavorites(el.id);
                      }}
                    >
                      Add to fav
                    </button>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
}
