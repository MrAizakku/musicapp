import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/Album';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {
  prompt = "Process Edits:";
  title:string = "";
  artist:string = "";
  description:string = "";
  year:number = -1;
  image:string = "";

  editForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    artist: new FormControl(''),
    description: new FormControl(''),
    year: new FormControl(''),
    image: new FormControl(''),
  });
  album:any;

  onSubmit(data:any) {
    let editAlbum:Album = new Album(data.id, data.title, data.artist, data.description,  data.year,  data.image, this.album.Tracks);
    this.service.updateAlbum(this.album, () => {
      this.service.getAlbum;
    });
    this.redirect.navigate(['list-artists']);
  }

  constructor(private service: MusicServiceService, private redirect: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.album = this.service.getAlbum(params['artist'], params['id'], (album: Album) => {
        console.log(album);
        
        this.album = album;
      });
    })
  }

}
