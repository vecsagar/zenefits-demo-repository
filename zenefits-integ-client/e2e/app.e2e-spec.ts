import { ZenefitsIntegClientPage } from './app.po';

describe('zenefits-integ-client App', function() {
  let page: ZenefitsIntegClientPage;

  beforeEach(() => {
    page = new ZenefitsIntegClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
