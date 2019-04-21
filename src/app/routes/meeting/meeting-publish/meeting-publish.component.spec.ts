import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingMeetingPublishComponent } from './meeting-publish.component';

describe('MeetingMeetingPublishComponent', () => {
  let component: MeetingMeetingPublishComponent;
  let fixture: ComponentFixture<MeetingMeetingPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingMeetingPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingMeetingPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
