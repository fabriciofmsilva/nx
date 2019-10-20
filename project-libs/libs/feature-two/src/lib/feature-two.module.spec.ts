import { async, TestBed } from '@angular/core/testing';
import { FeatureTwoModule } from './feature-two.module';

describe('FeatureTwoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureTwoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureTwoModule).toBeDefined();
  });
});
