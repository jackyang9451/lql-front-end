import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingMeetingViewComponent } from './meeting-view.component';

describe('MeetingMeetingViewComponent', () => {
  let component: MeetingMeetingViewComponent;
  let fixture: ComponentFixture<MeetingMeetingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingMeetingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingMeetingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
