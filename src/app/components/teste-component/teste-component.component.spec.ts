import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponentComponent } from './teste-component.component';

describe('TesteComponentComponent', () => {
  let component: TesteComponentComponent;
  let fixture: ComponentFixture<TesteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteComponentComponent]
    });
    fixture = TestBed.createComponent(TesteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
