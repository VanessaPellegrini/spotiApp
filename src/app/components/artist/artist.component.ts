import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist( params['id']);
    });
  }

  getArtist( id: string ) {
    this.loading = true;
    this.spotifyService.getArtist(id)
      .subscribe(data => {
        console.log(data);
        this.artist = data;
        this.loading = false;
    });
  }
}
