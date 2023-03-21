import Movie from '../components/Movie';
import { useState, useEffect } from 'react';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>Movie App</h1>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							year={movie.year}
							coverImg={movie.medium_cover_image}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
