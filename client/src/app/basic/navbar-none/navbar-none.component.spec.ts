import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNoneComponent } from './navbar-none.component';

describe('NavbarNoneComponent', () => {
  let component: NavbarNoneComponent;
  let fixture: ComponentFixture<NavbarNoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarNoneComponent]
    });
    fixture = TestBed.createComponent(NavbarNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
