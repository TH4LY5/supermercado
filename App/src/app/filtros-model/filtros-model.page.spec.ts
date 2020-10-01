import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltrosModelPage } from './filtros-model.page';

describe('FiltrosModelPage', () => {
  let component: FiltrosModelPage;
  let fixture: ComponentFixture<FiltrosModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrosModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
