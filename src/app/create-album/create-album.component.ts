import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/Album';
import { fade } from '../animations';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
  animations: [ fade ]
})
export class CreateAlbumComponent implements OnInit {
  newForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    artist: new FormControl(''),
    description: new FormControl(''),
    year: new FormControl(''),
    image: new FormControl(''),
  });
  album:any;

  prompt = "Create Album:";
  title:string = "";
  artist:string = "";
  description:string = "";
  year:number = -1;
  image:string = "";

  onSubmit(data:any) {
    this.service.createAlbum(new Album(this.service.getId(), data.title, data.artist, data.description, data.year, data.image, []));
    this.redirect.navigate(['list-artists']);
  }

  constructor(private service: MusicServiceService, private redirect: Router) {}

  ngOnInit(): void {
  }

}
