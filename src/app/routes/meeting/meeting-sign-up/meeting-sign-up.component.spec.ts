import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingMeetingSignUpComponent } from './meeting-sign-up.component';

describe('MeetingMeetingSignUpComponent', () => {
  let component: MeetingMeetingSignUpComponent;
  let fixture: ComponentFixture<MeetingMeetingSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingMeetingSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingMeetingSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
