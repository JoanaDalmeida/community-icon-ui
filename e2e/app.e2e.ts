import { CommunityIconUiPage } from './app.po';

describe('community-icon-ui App', function() {
  let page: CommunityIconUiPage;

  beforeEach(() => {
    page = new CommunityIconUiPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('community-icon-ui works!');
  });
});
