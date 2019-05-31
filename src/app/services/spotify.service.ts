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
      'Authorization' : 'Bearer ' + 'BQC-T_g9qH2OegY7Qqc5marX_zMUiUlD_ZOiSzg4wXMgL9snTXkxy-kBbmui23SIhoHQEQ8VXeZvZqEMM4s'
    });

    return this.http.get(url, { headers } );
  }


  getNewReleases() {

    return  this.getQuery('browse/new-releases?/limit=20')
                .pipe( map( data => {
                  return data['albums'].items;
                }));
  }

  getArtists( termino: string ) {
    return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`);
  }

  getArtist( id: string ) {
    return  this.getQuery(`artists/${ id }`);
  }
}
