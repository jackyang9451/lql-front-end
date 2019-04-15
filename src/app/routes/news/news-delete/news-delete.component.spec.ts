import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsNewsDeleteComponent } from './news-delete.component';

describe('NewsNewsDeleteComponent', () => {
  let component: NewsNewsDeleteComponent;
  let fixture: ComponentFixture<NewsNewsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNewsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNewsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
