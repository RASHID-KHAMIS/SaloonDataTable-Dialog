import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAptComponent } from './edit-apt.component';

describe('EditAptComponent', () => {
  let component: EditAptComponent;
  let fixture: ComponentFixture<EditAptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
