import { Component, Input, OnInit } from '@angular/core';
import { EMPTY_PROFILE, ProfileType } from '../../interfaces/type';
import { profile } from 'node:console';

@Component({
  selector: 'app-data-card',
  standalone: true,
  imports: [],
  templateUrl: './data-card.component.html',
  styleUrl: './data-card.component.scss',
})
export class DataCardComponent {
  @Input() apiData: ProfileType = EMPTY_PROFILE;
}
