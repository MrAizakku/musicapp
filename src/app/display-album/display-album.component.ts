import { Component, Input, OnInit } from '@angular/core';
import { fade } from '../animations'

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css'],
  animations: [ fade ]
})

export class DisplayAlbumComponent implements OnInit {
  @Input() album:any;

  constructor() { }

  ngOnInit(): void {
  }
}
