import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
  suggestions: Observable<ProfileType[]> | undefined;
  dropdownOpen: boolean = false;
  @Input() initialUsername: string = '';
  @Output() search = new EventEmitter<string>();
  @ViewChild('usernameInput', { static: true }) usernameInput!: ElementRef;

  constructor(private githubProfileService: GithubProfileService) {}

  ngOnInit() {
    this.suggestions = fromEvent<KeyboardEvent>( 
      this.usernameInput.nativeElement, 'input'
    ).pipe(
      debounceTime(1000), // 1 segundo antes de mostrar a sugestão
      distinctUntilChanged(), // Emite valores apenas quando o valor atual é diferente do anterior
      // Cancela a solicitação anterior e inicia uma nova a cada vez que um novo valor é emitido
      switchMap((event: Event) => { 
        const target = event.target as HTMLInputElement;
        
        return this.githubProfileService.searchProfiles(target.value).pipe(
          map(response => {
            // Abre o dropdown quando as sugestões são recebidas
            this.dropdownOpen = true; 

            // Limitar a 5 sugestões
            return response.items.slice(0, 5);
          }), 
          
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

    // Fecha o dropdown quando a busca é emitida
    this.dropdownOpen = false; 
    
    // Salva o nome do último usuario no local storage
    localStorage.setItem('lastSearchedUser', this.username); 
  }

  onSelect(username: string) {
    this.username = username;
    this.search.emit(this.username);
    // Fecha o dropdown quando uma sugestão é selecionada
    this.dropdownOpen = false; 

    // Salva o nome do último usuario no local storage
    localStorage.setItem('lastSearchedUser', this.username); 
  }

  onFocusOut(event: FocusEvent) {
    setTimeout(() => {
      if (!this.dropdownOpen) return;
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (relatedTarget && relatedTarget.closest('ul')) {
        return;
      }
      this.dropdownOpen = false;
    }, 200);
  }

  onDropdownClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
