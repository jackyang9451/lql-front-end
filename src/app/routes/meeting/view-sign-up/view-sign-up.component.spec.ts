import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingViewSignUpComponent } from './view-sign-up.component';

describe('MeetingViewSignUpComponent', () => {
  let component: MeetingViewSignUpComponent;
  let fixture: ComponentFixture<MeetingViewSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingViewSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingViewSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
