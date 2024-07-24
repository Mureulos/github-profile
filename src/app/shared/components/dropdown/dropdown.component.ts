import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GithubProfileService } from '../../services/github-profile.service';
import { ProfileType } from '../../interfaces/type';
import { Observable, fromEvent, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  username: string = '';
  suggestions$: Observable<ProfileType[]> | undefined;
  @Output() search = new EventEmitter<string>();
  @ViewChild('usernameInput', { static: true }) usernameInput!: ElementRef;

  constructor(private githubProfileService: GithubProfileService) {}

  ngOnInit() {
    this.suggestions$ = fromEvent<KeyboardEvent>(
      this.usernameInput.nativeElement, 'input'
    ).pipe(
      debounceTime(1000), // Espera 300 milisegundos antes de mostrar a sugestão
      distinctUntilChanged(), // Emite valores apenas quando o valor atual é diferente do anterior
      switchMap((event: Event) => { // Cancela a solicitação anterior e inicia uma nova a cada vez que um novo valor é emitido
        const target = event.target as HTMLInputElement;
        return this.githubProfileService.searchProfiles(target.value).pipe(
          map(response => {
            console.log('API Response:', response);
            return response.items.slice(0, 5);
          }), // Limitar a 5 sugestões
          catchError((error) => {
            console.error('Error fetching suggestions:', error);
            return of([]);
          })
        );
      })
    );
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.search.emit(this.username);
  }

  onSelect(username: string) {
    this.username = username;
    this.search.emit(this.username);
  }
}
