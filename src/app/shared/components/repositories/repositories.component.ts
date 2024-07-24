import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EMPTY_PROFILE, ProfileType, ReposType } from '../../interfaces/type';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {
  @Input() profileData: ProfileType | null = EMPTY_PROFILE
  @Input() reposData: ReposType[] = []
}
