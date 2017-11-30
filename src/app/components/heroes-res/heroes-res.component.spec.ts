import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesResComponent } from './heroes-res.component';

describe('HeroesResComponent', () => {
  let component: HeroesResComponent;
  let fixture: ComponentFixture<HeroesResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
