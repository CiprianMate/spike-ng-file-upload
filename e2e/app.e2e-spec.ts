import { SpikeNgFileUploadPage } from './app.po';

describe('spike-ng-file-upload App', function() {
  let page: SpikeNgFileUploadPage;

  beforeEach(() => {
    page = new SpikeNgFileUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
