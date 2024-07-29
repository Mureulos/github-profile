import { Component, OnInit } from '@angular/core';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { RepositoriesComponent } from '../../shared/components/repositories/repositories.component';
import { EMPTY_PROFILE, EMPTY_REPOS, ProfileType, ReposType } from '../../shared/interfaces/type';
import { GithubProfileService } from '../../shared/services/github-profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataCardComponent, DropdownComponent, RepositoriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileData: ProfileType = EMPTY_PROFILE;
  reposData: ReposType[] = [];
  lastSearchedUser: string = 'Mureulos';

  constructor(private githubProfileService: GithubProfileService) {}

  ngOnInit(): void {
    // Recupera o nome do último usuario no local storage
    const savedUsername = localStorage.getItem('lastSearchedUser');

    // Se existir algum usuario salvo no local storage, emita a pesquisa. Senão, adicione no localStorage
    if (savedUsername) {
      this.lastSearchedUser = savedUsername;
    } else {
      // Salva o nome do último usuario no local storage
      localStorage.setItem('lastSearchedUser', this.lastSearchedUser);
    }
    this.getData(this.lastSearchedUser);
  }

  onSearch(username: string) {
    this.getData(username);
  }

  getData(username: string) {
    this.githubProfileService.getData(username).subscribe({
      next: response => {this.profileData = response;},
      error: (error) => {console.log(error)},
      complete: () => {this.getRepos(username);}
    });
  }

  getRepos(username: string) {
    this.githubProfileService.getRepos(username).subscribe({
      next: response => {this.reposData = response;},
      error: (error) => {console.log(error)},
      complete: () => {}
    });
  }
}
