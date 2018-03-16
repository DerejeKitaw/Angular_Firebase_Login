import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlNavbarComponent } from './tl-navbar.component';

describe('TlNavbarComponent', () => {
  let component: TlNavbarComponent;
  let fixture: ComponentFixture<TlNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
