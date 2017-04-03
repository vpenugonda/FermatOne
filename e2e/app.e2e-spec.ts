import { FermatOnePage } from './app.po';

describe('fermat-one App', () => {
  let page: FermatOnePage;

  beforeEach(() => {
    page = new FermatOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
