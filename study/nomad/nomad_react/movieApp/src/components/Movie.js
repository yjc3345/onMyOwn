import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, year, coverImg, summary, genres }) {
	return (
		<div>
			<h2>
				<Link to={`/movie/${id}`}>
					{title}({year})
				</Link>
			</h2>
			<img src={coverImg} alt={title} />
			<p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
