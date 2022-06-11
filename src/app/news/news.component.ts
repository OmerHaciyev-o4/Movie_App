import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  fileToUpload: File;
  movieTitle: string = "Avengers: End Game";
  movieDescription: string = "The best movie in the Marvel cinematic universe.";
  model: MovieRepository;

  constructor() { 
    this.model = new MovieRepository();
    this.model.clearMovies();
   }

  ngOnInit(): void {
  }

  handleFileInput(event: any, imgObj: any) {
    var uploadedImage = event.target.files.item(0);

    if (uploadedImage.type.split('/')[0] == "image") {
      this.fileToUpload = uploadedImage;
      imgObj.src = URL.createObjectURL(this.fileToUpload);
    }
  }

  addSpecificClass(){
    return {
      disabled: this.movieTitle == '' || this.movieTitle == '' || this.fileToUpload == null
    }
  }

  AddNewNews(imgObj: any){
    this.model.addMovie(this.movieTitle, this.movieDescription, imgObj.src);
    this.movieTitle = "";
    this.movieDescription = "";
    imgObj.src = "";
  }
}
