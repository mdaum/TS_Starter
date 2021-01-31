import mathFun from './index';
describe('mathFun#addtorial', () => {
  it('addtorial should return expected number when valid input is given', () => {
    let expected = 0;
    for (let i = 0; i < 10; i++) {
      expect(mathFun.addtorial(i)).toBe((expected += i));
    }
  });
  it('should throw error when valid input is given', () => {
    expect(() => mathFun.addtorial(-1)).toThrow('input must be >= 0');
  });
});
