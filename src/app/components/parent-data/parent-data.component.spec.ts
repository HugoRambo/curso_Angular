import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataComponent } from './parent-data.component';

describe('ParentDataComponent', () => {
  let component: ParentDataComponent;
  let fixture: ComponentFixture<ParentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDataComponent]
    });
    fixture = TestBed.createComponent(ParentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
