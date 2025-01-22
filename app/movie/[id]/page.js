import { Badge } from "@/components/ui/badge";

const token = process.env.TMDB_TOKEN;

async function fetchMovie(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await res.json();
}

export default async function Movies({ params }) {
    const movie = await fetchMovie(params.id);

    const cover = "http://image.tmdb.org/t/p/w1280";

    return (
        <>
            <h2 className="font-bold">
                {movie.title}
                <span className="ml-1">
                    ({movie.release_date.split("-")[0]})
                </span>
            </h2>

            <div className="mb-4 mt-2">
                {movie.genres.map(genres => {
                    return (
                        <Badge
                            key={genres.id}
                            variant="outeline"
                            className="mr-2"
                        >
                            {genres.name}
                        </Badge>
                    );
                })}
            </div>

            <img src={cover + movie.backdrop_path} />
            <p className="mt-3"></p>
        </>
    );
}