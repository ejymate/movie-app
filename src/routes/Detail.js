import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json.data.movie);

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ padding: "10px 10px" }}>
          <div style={{ width: "100px", margin: "30px auto" }}>
            <Link to="/">뒤로가기</Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "600px", padding: "5px 20px" }}>
              <h2 style={{ marginBottom: 0 }}>{movie.title_long}</h2>
              <span>({movie.title_english})</span>
              <p>평점: {movie.rating}</p>
              <p>
                장르: {movie.genres.join(", ")} | {`${movie.runtime}분`}
              </p>
              <div>
                <span>줄거리</span>
                <div style={{ paddingLeft: "10px" }}>
                  {movie.description_intro}
                </div>
              </div>
            </div>
            <div>
              <img
                src={movie.large_cover_image}
                alt="cover-img"
                style={{ width: "300px" }}
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
