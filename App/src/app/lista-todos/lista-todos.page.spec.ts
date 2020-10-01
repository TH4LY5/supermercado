import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaTodosPage } from './lista-todos.page';

describe('ListaTodosPage', () => {
  let component: ListaTodosPage;
  let fixture: ComponentFixture<ListaTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
