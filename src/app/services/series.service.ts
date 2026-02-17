import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie';
@Injectable({ providedIn: 'root' })

export class PostsService {
  private readonly url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }
  create(post: Serie) {
  return this.http.post<Serie>(this.url, post);
}
}