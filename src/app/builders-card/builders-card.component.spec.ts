import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersCardComponent } from './builders-card.component';

describe('BuildersCardComponent', () => {
  let component: BuildersCardComponent;
  let fixture: ComponentFixture<BuildersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
