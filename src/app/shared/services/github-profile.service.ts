//app/shared/services/coffee-list.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ProfileType, searchType } from '../interfaces/type';
import { ReposType } from '../interfaces/type';

@Injectable({
  providedIn: 'root',
})
export class GithubProfileService {
  private apiUrl: string = 'https://api.github.com/users';
  constructor(private httpClient: HttpClient) {}

  getData(username: string): Observable<ProfileType> {
    return this.httpClient.get<ProfileType>(`${this.apiUrl}/${username}`);
  }

  getRepos(username: string): Observable<ReposType[]> {
    return this.httpClient.get<ReposType[]>(`${this.apiUrl}/${username}/repos`);
  }

  searchProfiles(query: string): Observable<searchType> {
    if (!query.trim()) {
      return of({ 
        total_count: 0, 
        incomplete_results: false, 
        items: [] 
      }); // Retorna um array vazio se a consulta estiver vazia
    }
    return this.httpClient.get<searchType>(`https://api.github.com/search/users?q=${query}`);
  }
}
