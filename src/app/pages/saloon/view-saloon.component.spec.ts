import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSaloonComponent } from './view-saloon.component';

describe('ViewSaloonComponent', () => {
  let component: ViewSaloonComponent;
  let fixture: ComponentFixture<ViewSaloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSaloonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
