import { PreZerosPipe } from './pre-zeros.pipe';

describe('PreZerosPipe', () => {
  it('create an instance', () => {
    const pipe = new PreZerosPipe();
    expect(pipe).toBeTruthy();
  });
});
