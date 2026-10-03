import path from 'path';

describe('message', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it("message should be 'Goodbye!'", async () => {
    const value = await page.evaluate('message');
    expect(value).toEqual('Goodbye!');
  });
});
