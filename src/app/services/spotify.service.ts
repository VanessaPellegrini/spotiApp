import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('servicio spoti listo');
   }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + 'BQB3IENn4AgVZgwRaeDRvAANaxjX9bOsgxBbKEFOrmsN8xkY45BrN_9tdYspzApJu6Lmw6PbNem50MDR_3E'
    });

    return this.http.get(url, { headers } );
  }


  getNewReleases() {

    return  this.getQuery('browse/new-releases?/limit=20')
                .pipe( map( data => {
                  return data['albums'].items;
                }));
  }

  getArtist( termino: string ) {
    return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`);
  }
}
