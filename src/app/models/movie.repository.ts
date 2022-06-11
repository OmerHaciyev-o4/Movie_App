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

    clearMovies(){
      this.movies = new Array<Movie>();
    }

    addMovie(movieTitle: string, movieDescription: string, movieImageUrl: string){
      var id = this.movies.length + 1;
      this.movies.push({
        id: id,
        title: movieTitle,
        description: movieDescription,
        imageUrl: movieImageUrl
      });
    }

    removeMovie(id: number){
      console.log("yes worked");
      for (let i = 0; i < this.movies.length; i++) {
        const movie = this.movies[i];
        if (movie.id == id) {
          this.movies.splice(i, 1); 
          break;
        }
      }
    }
}