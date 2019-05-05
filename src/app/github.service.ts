import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

const GITHUB_URL = 'https://api.github.com/search/repositories';
const PARAMS = new HttpParams({
  fromObject: {
    per_page: '10',
  }
});

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  selectedItem: any;

  constructor(private http: HttpClient) {
  }

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(GITHUB_URL, {params: PARAMS.set('q', `${term} in:name`)})
      .pipe(
        map((response: any) => {
          return response.items;
        })
      );
  }}
