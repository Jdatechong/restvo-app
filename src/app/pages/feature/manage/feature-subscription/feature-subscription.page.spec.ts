import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeatureSubscriptionPage } from './feature-subscription.page';

describe('FeatureSubscriptionPage', () => {
  let component: FeatureSubscriptionPage;
  let fixture: ComponentFixture<FeatureSubscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSubscriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSubscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
