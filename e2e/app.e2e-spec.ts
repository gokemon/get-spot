import { GetSpotPage } from './app.po';

describe('get-spot App', () => {
  let page: GetSpotPage;

  beforeEach(() => {
    page = new GetSpotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
