import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespositoriesComponent } from './respositories.component';

describe('RespositoriesComponent', () => {
  let component: RespositoriesComponent;
  let fixture: ComponentFixture<RespositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespositoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
