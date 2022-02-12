import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  @Input() artist: any;
  albums:Album[] = [];
  selectedAlbum:any;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.albums = this.service.getAlbums(this.artist.Name);
  }

  onSelectedAlbum(album: Album) {
    this.selectedAlbum = album;
  }

}
