import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoView2Component } from './view2.component';

describe('InfoView2Component', () => {
  let component: InfoView2Component;
  let fixture: ComponentFixture<InfoView2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoView2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
