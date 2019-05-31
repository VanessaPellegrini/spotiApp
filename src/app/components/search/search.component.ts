import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) { }

  buscar( termino: string ) {
    this.loading = true;
    console.log(termino);
    this.spotifyService.getArtists( termino )
      .subscribe(data => {
        this.artists = data['artists'].items;
        this.loading = false;
      });
  }

}
