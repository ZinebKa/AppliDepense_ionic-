import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetteEditPage } from './dette-edit.page';

describe('DetteEditPage', () => {
  let component: DetteEditPage;
  let fixture: ComponentFixture<DetteEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetteEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
