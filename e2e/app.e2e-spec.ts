import { GauravjotPage } from './app.po';

describe('gauravjot App', () => {
  let page: GauravjotPage;

  beforeEach(() => {
    page = new GauravjotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
