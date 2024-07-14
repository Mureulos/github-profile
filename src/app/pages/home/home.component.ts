import { Component, OnInit } from '@angular/core';
import { DataCardComponent } from '../../shared/components/data-card/data-card.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { RespositoriesComponent } from '../../shared/components/respositories/respositories.component';
import { EMPTY_PROFILE, EMPTY_REPOS, ProfileType, ReposType } from '../../shared/interfaces/type';
import { GithubProfileService } from '../../shared/services/github-profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DataCardComponent, DropdownComponent, RespositoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profileData: ProfileType = EMPTY_PROFILE
  reposData: ReposType[] = []
  constructor(private githubProfileService: GithubProfileService) {}

  ngOnInit(): void {
    this.getData('Mureulos')
  }

  public getData(username: string) {
    this.githubProfileService.getData(username).subscribe(response => {
      const json = response
      json.map(item => this.profileData = item)

      console.log(this.profileData)
      console.log(response.map((item) => item))
    })

    this.getRepos(username)
  }

  public getRepos(username: string) {
    this.githubProfileService.getRepos(username).subscribe(response => {
      this.reposData = response
    })
  }
}
