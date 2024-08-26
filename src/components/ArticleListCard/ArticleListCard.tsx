import { Link } from 'react-router-dom';
import style from './ArticleListCard.module.css';
import type { IArticle } from '../../types';
import { FavoriteIcon } from '../svg/favorite/FavoriteIcon';

interface IProps extends IArticle {
  deleteArt: (id: number) => void;
  addFavorites: (id: number) => void;
}

export function ArticleListCard({
  id,
  addFavorites,
  deleteArt,
  image_url,
  title,
  summary,
  isFavorite
}: IProps) {
  return (
    <Link className={style.linkStyle} to={`/article-page/${id}`} key={id}>
      <li className={style.listItem}>
        <img className={style.listItemImage} src={image_url} alt="image" />
        <h2 className={style.listItemHead}>{title}</h2>
        <div className={style.listParagraphBtnWrapper}>
          <p className={style.listItemParagraph}>{summary}</p>
          <div className={style.listBtnsWrapper}>
            <button
              className={style.listBtn}
              onClick={(event) => {
                event.preventDefault();
                deleteArt(id);
              }}
            >
              Delete article
            </button>
            <FavoriteIcon
              onClick={(event) => {
                event.preventDefault();
                addFavorites(id);
              }}
              fill={isFavorite ? 'red' : 'white'}
            />
          </div>
        </div>
      </li>
    </Link>
  );
}
