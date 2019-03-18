import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeETalkComponent } from './college-e-talk.component';

describe('CollegeETalkComponent', () => {
  let component: CollegeETalkComponent;
  let fixture: ComponentFixture<CollegeETalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeETalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeETalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
