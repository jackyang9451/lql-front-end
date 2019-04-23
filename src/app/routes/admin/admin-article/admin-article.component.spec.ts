import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAdminArticleComponent } from './admin-article.component';

describe('AdminAdminArticleComponent', () => {
  let component: AdminAdminArticleComponent;
  let fixture: ComponentFixture<AdminAdminArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
