import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EMPTY_PROFILE, ProfileType, ReposType } from '../../interfaces/type';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
})
export class RepositoriesComponent {
  @Input() profileData: ProfileType | null = EMPTY_PROFILE;
  @Input() reposData: ReposType[] = [];

  lastUpdate(dateUpdate: string): string {
    const currentDate = new Date();
    const updateDate = new Date(dateUpdate);

    const diffTime = Math.abs(currentDate.getTime() - updateDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Updated today.';
    } 
    
    else if (diffDays === 1) {
      return 'Updated 1 day ago.';
    } 
    
    else if (diffDays < 30) {
      return `Updated ${diffDays} days ago.`;
    } 
    
    else if (diffDays < 365) {
      const diffMonths = Math.floor(diffDays / 30);
      return `Updated ${diffMonths} months ago.`;
    } 
    
    else {
      const diffYears = Math.floor(diffDays / 365);
      return `Updated ${diffYears} years ago.`;
    }
  }
}
