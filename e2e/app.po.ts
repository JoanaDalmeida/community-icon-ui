export class CommunityIconUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('community-icon-ui-app h1')).getText();
  }
}
