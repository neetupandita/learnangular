import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdwatchingComponent } from './birdwatching.component';

describe('BirdwatchingComponent', () => {
  let component: BirdwatchingComponent;
  let fixture: ComponentFixture<BirdwatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdwatchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdwatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
