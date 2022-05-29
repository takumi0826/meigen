import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeigenCardComponent } from './meigen-card.component';

describe('MeigenCardComponent', () => {
  let component: MeigenCardComponent;
  let fixture: ComponentFixture<MeigenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeigenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeigenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
