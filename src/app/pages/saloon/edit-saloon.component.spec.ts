import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaloonComponent } from './edit-saloon.component';

describe('EditSaloonComponent', () => {
  let component: EditSaloonComponent;
  let fixture: ComponentFixture<EditSaloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaloonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
