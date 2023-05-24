import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAptComponent } from './view-apt.component';

describe('ViewAptComponent', () => {
  let component: ViewAptComponent;
  let fixture: ComponentFixture<ViewAptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
