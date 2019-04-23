import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoFormFormTestComponent } from './form-test.component';

describe('AutoFormFormTestComponent', () => {
  let component: AutoFormFormTestComponent;
  let fixture: ComponentFixture<AutoFormFormTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormFormTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
