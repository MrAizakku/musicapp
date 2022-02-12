import { Injectable } from '@angular/core';
import exampledata from '../data/sample-music-data.json';
import { Artist } from '../models/Artist';
import { Album } from '../models/Album';
import { Track } from '../models/Track';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  artists: Artist[] = [];
  albums: Album[] = [];

  constructor() { 
    //generate albums[]
    for(let x=0;x<exampledata.length;++x) {
      //generate the track data
      let tracks: Track[] = [];
      for(let y=0;y<exampledata[x].tracks.length;++y) {
        tracks.push(new Track(exampledata[x].tracks[y].id!, exampledata[x].tracks[y].number!, exampledata[x].tracks[y].title!, exampledata[x].tracks[y].lyrics!));
      }
      //create album with the info and add to array
      this.albums.push(new Album(exampledata[x].id!, exampledata[x].title!, exampledata[x].artist!, exampledata[x].description!, exampledata[x].year!, exampledata[x].image!, tracks!));
    }
    this.updateArtists();
  }

  getArtists(): Artist[] {
    return this.artists;
  }

  getAlbums(artist:string):Album[] {
    let returnList:Album[] = [];
    this.albums.forEach(album => {
      if(album.Artist == artist) {
        returnList.push(album)
      }
    });
    return returnList;
  }

  getAlbum(artist:string, id:number):Album[] {
    let returnList:Album[] = [];
    this.albums.forEach(album => {
      if(album.Artist == artist && album.Id == id) {
        returnList.push(album)
      }
    });
    return returnList;
  }

  createAlbum(album:Album):number {
    if(this.albums.push(album)) {
      this.updateArtists();
      return album.Id;
    } else { return -1; }
  }

  updateAlbum(album:Album):number {
    for (let x = 0; x < this.albums.length; x++) {
      if(this.albums[x].Id == album.Id) {
        this.albums.splice(x,1,album);
        this.updateArtists();
        return 0;
      }
    }
    return -1;
  }

  deleteAlbum(id:number):number {
    for (let x = 0; x < this.albums.length; x++) {
      if(this.albums[x].Id == id) {
        this.albums.splice(x,1);
        this.updateArtists();
        return 0;
      }
    }
    return -1;
  }

  private updateArtists(): void {
    this.artists = [];
    this.albums.forEach(album => {
      var index = this.artists.findIndex(aN => aN.Name==album.Artist!); 
      index === -1 ? this.artists.push(new Artist(this.artists.length, album.Artist!)) : console.log();
    });
    console.log(this.artists);
    console.log(this.albums);
    
    
  }

  getId():number {
    return this.albums.length + 1;
  }
}
