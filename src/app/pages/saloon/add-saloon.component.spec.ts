import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaloonComponent } from './add-saloon.component';

describe('AddSaloonComponent', () => {
  let component: AddSaloonComponent;
  let fixture: ComponentFixture<AddSaloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaloonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
