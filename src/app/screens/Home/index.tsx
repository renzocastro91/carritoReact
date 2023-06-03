// Componente App
import { useState, useEffect } from 'react';
import Product from "../../components/Product";
import ProductForm from "../../components/Form";
import "./styles.css";
import Cart from '../../components/Carrito';

interface Product {
  name: string;
  desc: string;
  price: number;
  cant: number;
  tot: number;
}

function App() {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const handleAddProduct = (newProduct: Product) => {
    setProductsList([...productsList, newProduct]);
  };

  const handleTotChange = (index: number, newTot: number) => {
    const updatedProducts = [...productsList];
    updatedProducts[index].tot = newTot;
    setProductsList(updatedProducts);
  };

  useEffect(() => {
    const totalPrice = productsList.reduce(
      (acc, product) => acc + product.tot,
      0
    );
    setTotal(totalPrice);
  }, [productsList]);

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
        <Cart cartIcon="https://cdn-icons-png.flaticon.com/512/3649/3649583.png" total={total}/>
          <h2 className='h2M2'>Lista de Productos</h2>
          {productsList.map((product: Product, index: number) => (
            <div className="container2" key={index}>
              <Product
                name={product.name}
                description={product.desc}
                cant={product.cant}
                price={product.price}
                tot={product.tot}
                onTotChange={(newTot: number) => handleTotChange(index, newTot)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
