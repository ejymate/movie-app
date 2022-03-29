import ProTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt="cover" />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres !== undefined ? genres.map((g) => <li key={g}>{g}</li>) : null}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.prototype = {
  coverImage: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;
