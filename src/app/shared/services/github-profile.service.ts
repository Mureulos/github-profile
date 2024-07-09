//app/shared/services/coffee-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProfileType } from '../interfaces/type';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoffeeListService {
  private apiUrl: string = 'https://api.github.com/users/';
  constructor(private httpClient: HttpClient) {}

  getData(username: string): Observable<ProfileType[]> {
    return this.httpClient.get<ProfileType[]>(`${this.apiUrl}${username}`);
  }
}
