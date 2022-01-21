import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  baseUrl = 'https://api.themoviedb.org/3/';

  options = {
    api_key: '8963bf5ee0a289eca18c8d7195a03e49',
    language:'pt-BR'
  }



  constructor() { }
}
