import { useGetArticlesQuery } from '../../lib/api/articleApi';
// import { useAppSelector } from '../lib/store';
import style from './ArticleList.module.css';
export function ArticleList() {
  const { data, isLoading } = useGetArticlesQuery();
  console.log(data);
  return (
    <>
      {isLoading && 'Loading...'}
      <ul className={style.wrapper}>
        {data?.results.map((el) => {
          return (
            <li className={style.listItem} key={el.id}>
              <img
                className={style.listItemImage}
                src={el.image_url}
                alt="image"
              />
              <div className={style.listItemTextWrapper}>
                <h2>{el.title}</h2>
                <p>{el.summary}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
