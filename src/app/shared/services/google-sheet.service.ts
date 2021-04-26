import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<any> {
    const url =
      `https://docs.google.com/spreadsheets/d/e/2PACX-1vTTW0xKXaa2ntkxNOlSiAKOvJ7fzJq0euYtCENaeG8rbkj_YCZHKbihlaZqNGhpDw/pub?output=csv`;
    return this.http.get(url, { responseType: 'text' as any });
  }
}
