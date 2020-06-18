import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DettePage } from './dette.page';

describe('DettePage', () => {
  let component: DettePage;
  let fixture: ComponentFixture<DettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
