import { async, TestBed } from '@angular/core/testing';
import { FeatureOneModule } from './feature-one.module';

describe('FeatureOneModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureOneModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureOneModule).toBeDefined();
  });
});
