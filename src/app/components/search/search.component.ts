import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];

  constructor( private spotifyService: SpotifyService ) { }

  buscar( termino: string ) {
    console.log(termino);
    this.spotifyService.getArtist( termino )
      .subscribe(data => {
        this.artists = data['artists'].items;
      });
  }

}
