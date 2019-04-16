import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsNewsViewComponent } from './news-view.component';

describe('NewsNewsViewComponent', () => {
  let component: NewsNewsViewComponent;
  let fixture: ComponentFixture<NewsNewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
