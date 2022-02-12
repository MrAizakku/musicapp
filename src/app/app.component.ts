import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music Collection';
  version = "1.0";

  constructor(private router: Router) {
    this.router = router;
  }

  displayVersion():void {
    window.alert("Version: " + this.version);
  }

  displayArtistList():void {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }
}
