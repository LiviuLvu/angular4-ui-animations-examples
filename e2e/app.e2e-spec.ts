import { ListItemsTestPage } from './app.po';

describe('list-items-test App', () => {
  let page: ListItemsTestPage;

  beforeEach(() => {
    page = new ListItemsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
