import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=849ba4786a2d41572c17d60b70f05ac7&language=es-ES&page=1");
  }
}
