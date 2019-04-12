import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsNewsPublishComponent } from './news-publish.component';

describe('NewsNewsPublishComponent', () => {
  let component: NewsNewsPublishComponent;
  let fixture: ComponentFixture<NewsNewsPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
