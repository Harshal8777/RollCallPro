import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSubjectsComponent } from './get-all-subjects.component';

describe('GetAllSubjectsComponent', () => {
  let component: GetAllSubjectsComponent;
  let fixture: ComponentFixture<GetAllSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllSubjectsComponent]
    });
    fixture = TestBed.createComponent(GetAllSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
