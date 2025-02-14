import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCardsComponent } from './noticias-cards.component';

describe('NoticiasCardsComponent', () => {
  let component: NoticiasCardsComponent;
  let fixture: ComponentFixture<NoticiasCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
