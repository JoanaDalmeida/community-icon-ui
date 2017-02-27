import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CommunityIconUiAppComponent } from '../app/community-icon-ui.component';

beforeEachProviders(() => [CommunityIconUiAppComponent]);

describe('App: CommunityIconUi', () => {
  it('should create the app',
      inject([CommunityIconUiAppComponent], (app: CommunityIconUiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'community-icon-ui works!\'',
      inject([CommunityIconUiAppComponent], (app: CommunityIconUiAppComponent) => {
    expect(app.title).toEqual('community-icon-ui works!');
  }));
});
