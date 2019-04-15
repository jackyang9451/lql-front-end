import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsNewsVerifyComponent } from './news-verify.component';

describe('NewsNewsVerifyComponent', () => {
  let component: NewsNewsVerifyComponent;
  let fixture: ComponentFixture<NewsNewsVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
