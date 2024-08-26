import { useParams, useNavigate } from 'react-router-dom';
import { useGetSingleArticleQuery } from '../../lib/api/articleApi';
export function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isSuccess } = useGetSingleArticleQuery(id);
  console.log(data);

  if (isSuccess) {
    return (
      <>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          To the articles
        </button>
        <div>
          <img
            style={{ maxWidth: '700px', margin: '0 auto' }}
            src={data.image_url}
            alt="image"
          />
          <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
          <p>{data.summary}</p>
          <p>
            Source:{' '}
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href={data.url}
            >
              {data.url}
            </a>
          </p>
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}
