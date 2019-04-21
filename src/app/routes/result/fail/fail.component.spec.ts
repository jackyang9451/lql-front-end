import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultFailComponent } from './fail.component';

describe('ResultFailComponent', () => {
  let component: ResultFailComponent;
  let fixture: ComponentFixture<ResultFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
