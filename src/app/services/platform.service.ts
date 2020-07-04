import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from '../models/platform';
import { Random } from '../models/random';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private urlCliente = 'https://libraries.io/api/platforms';
  private urlRandom = 'https://dog.ceo/api/breeds/image/random';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

    // GET.
    public getPlatform(): Observable<Platform[]> {
      return this.http.get<Platform[]>(this.urlCliente);
    }

    // GET
    public getRandom(): Observable<Random> {
      return this.http.get<Random>(this.urlRandom);
    }



  search_proyecto(q: string, api_key: string): any {
    return this.http.get('https://libraries.io/api/search',
      {
        params : {
          'q': q,
          'api_key': api_key
        },
      },
    );
  };


}
