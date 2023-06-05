import { useState, useEffect } from 'react';
import Product from "../../components/Product";
import ProductForm from "../../components/Form";
import "./styles.css";
import Cart from '../../components/Carrito';

type ProductType = {
  name: string;
  desc: string;
  price: number;
  cant: number;
  tot: number;
};

function App() {
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);

  function handleAddProduct(newProduct: ProductType) {
    setProductsList([...productsList, newProduct]);
  }

  function handleTotChange(index: number, newTot: number) {
    const updatedProducts = [...productsList];
    updatedProducts[index].tot = newTot;
    setProductsList(updatedProducts);
  }

  function calculateTotalPrice() {
    const totalPrice = productsList.reduce((acc, product) => acc + product.tot, 0);
    setTotal(totalPrice);
  }

  function preloadProducts() {
    const preloadedProducts: ProductType[] = [
      {
        name: "Pan x1kg",
        desc: "Alimento",
        price: 1500,
        cant: 0,
        tot: 0
      },
      {
        name: "Gaseosa Coca Cola xU",
        desc: "Bebida",
        price: 3000,
        cant: 0,
        tot: 0
      },
      {
        name: "Cereales x500gr",
        desc: "Alimento",
        price: 600,
        cant: 0,
        tot: 0
      }
    ];
    setProductsList(preloadedProducts);
  }

  useEffect(calculateTotalPrice, [productsList]);
  useEffect(preloadProducts, []);

  return (
    <main>
      <h1>Carrito APP</h1>
      <div className="container">
        <div className="module1">
          <div>
            <ProductForm onAddProduct={handleAddProduct} />
          </div>
        </div>
        <div className="module2">
          <Cart cartIcon="https://cdn-icons-png.flaticon.com/512/3649/3649583.png" total={total} />
          <h2 className="h2M2">Lista de Productos</h2>
          {productsList.map((product: ProductType, index: number) => (
            <div className="container2" key={index}>
              <Product
                name={product.name}
                description={product.desc}
                cant={product.cant}
                price={product.price}
                tot={product.tot}
                onTotChange={function(newTot: number) { handleTotChange(index, newTot); }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
