import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProfileType, ReposType } from '../../interfaces/type';

@Component({
  selector: 'app-respositories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './respositories.component.html',
  styleUrl: './respositories.component.scss'
})
export class RespositoriesComponent {
  @Input() profileData: ProfileType[] = []
  @Input() reposData: ReposType[] = []
}
