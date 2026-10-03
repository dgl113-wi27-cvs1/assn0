import path from 'path';

describe('count', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('count should be 5', async () => {
    const value = await page.evaluate('count');
    expect(value).toEqual(5);
  });
});
