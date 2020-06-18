import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepenseEditPage } from './depense-edit.page';

describe('DepenseEditPage', () => {
  let component: DepenseEditPage;
  let fixture: ComponentFixture<DepenseEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepenseEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepenseEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
