import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css']
})
export class DeleteAlbumComponent implements OnInit {

  constructor(private service: MusicServiceService, private redirect: Router, private Router: ActivatedRoute) {}

  ngOnInit(): void {
    if(confirm('Are you sure you want to delete?')) {
      this.Router.params.subscribe(params => {
        this.service.deleteAlbum(params['id'], () => {
          this.service.getAlbum;
        })
      });
    }
      this.redirect.navigate(['list-artists']);
  }
}
