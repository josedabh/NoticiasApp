import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCategoryComponent } from './noticias-category.component';

describe('NoticiasCategoryComponent', () => {
  let component: NoticiasCategoryComponent;
  let fixture: ComponentFixture<NoticiasCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
