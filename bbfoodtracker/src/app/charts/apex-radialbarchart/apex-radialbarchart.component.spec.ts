import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApexRadialbarchartComponent } from './apex-radialbarchart.component';

describe('ApexRadialbarchartComponent', () => {
  let component: ApexRadialbarchartComponent;
  let fixture: ComponentFixture<ApexRadialbarchartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexRadialbarchartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApexRadialbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
