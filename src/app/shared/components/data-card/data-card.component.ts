import { Component, Input } from '@angular/core';
import { EMPTY_PROFILE, ProfileType } from '../../interfaces/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss',
})
export class DataCardComponent {
  @Input() apiData: ProfileType | null = null
}
