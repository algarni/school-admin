import { SchoolAdminPage } from './app.po';

describe('school-admin App', () => {
  let page: SchoolAdminPage;

  beforeEach(() => {
    page = new SchoolAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
