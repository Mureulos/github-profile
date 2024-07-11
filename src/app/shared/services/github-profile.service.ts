//app/shared/services/coffee-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileType } from '../interfaces/type';
import { ReposType } from '../interfaces/type';

@Injectable({
  providedIn: 'root',
})
export class GithubProfileService {
  private apiUrl: string = 'https://api.github.com/users/';
  constructor(private httpClient: HttpClient) {}

  getData(username: string): Observable<ProfileType[]> {
    return this.httpClient.get<ProfileType[]>(`${this.apiUrl}${username}`);
  }

  getRepos(username: string): Observable<ReposType[]> {
    return this.httpClient.get<ReposType[]>(`${this.apiUrl}${username}/repos`);
  }
}
