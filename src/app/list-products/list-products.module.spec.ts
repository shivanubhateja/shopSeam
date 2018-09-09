import { ListProductsModule } from './list-products.module';

describe('ListProductsModule', () => {
  let listProductsModule: ListProductsModule;

  beforeEach(() => {
    listProductsModule = new ListProductsModule();
  });

  it('should create an instance', () => {
    expect(listProductsModule).toBeTruthy();
  });
});
