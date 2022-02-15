import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/Artist';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
  selectedArtist:any;
  artists:any;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.service.getArtists( (artists:Artist[]) =>
      {
        this.artists = artists;
        this.selectedArtist = null;
      });
    })
  }

  onSelectedArtist(artist: Artist) {
    this.selectedArtist = artist;
  }

}
