import { ClientsGestionsProduitsPage } from './app.po';

describe('clients-gestions-produits App', function() {
  let page: ClientsGestionsProduitsPage;

  beforeEach(() => {
    page = new ClientsGestionsProduitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
