import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [
            {
              id: 1,
              title: 'Shazam',
              description: 'Shazam description',
              imageUrl: '../../assets/image/1.jpeg',
            },
            {
              id: 2,
              title: 'Shazam2',
              description: 'Shazam2 description',
              imageUrl: '../../assets/image/2.jpeg',
            },
            {
              id: 3,
              title: 'Shazam3',
              description: 'Shazam3 description',
              imageUrl: '../../assets/image/3.jpeg',
            },
            {
              id: 4,
              title: 'Shazam4',
              description: 'Shazam4 description',
              imageUrl: '../../assets/image/4.jpeg',
            },
            {
              id: 5,
              title: 'Shazam5',
              description: 'Shazam5 description',
              imageUrl: '../../assets/image/5.jpeg',
            }
          ];
    }

    getMovies(): Movie[]{
        return this.movies;
    }

    getMovieById(id: number): Movie | undefined{
        return this.movies.find((m) => m.id == id);
    }
}