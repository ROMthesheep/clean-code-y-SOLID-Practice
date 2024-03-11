(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class MailNotifier {
    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService
    private mailer: MailNotifier

    constructor(productService: ProductService, mailer: MailNotifier) {
      this.productService = productService
      this.mailer = mailer
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.loadProduct(id)
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product)
    }

    notifyClients() {
      this.mailer.notifyClients()
    }

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  class CartBlock {
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }


  const cartBloc = new CartBlock();
  const productService = new ProductService();
  const mailNotifier = new MailNotifier();
  const productBloc = new ProductBloc(productService, mailNotifier);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
