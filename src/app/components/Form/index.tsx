import { useState } from 'react'
import styles from './style.module.css'

type Product = {
  name: string
  desc: string
  price: number
  cant: number
  tot: number
}

type ProductFormProps = {
  onAddProduct: (newProduct: Product) => void
};

function ProductForm(props: ProductFormProps) {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState<number>(0)
  const [error, setError] = useState('')

  const handleAddProduct = () => {
    if (!productName || !productPrice) {
      setError('El nombre del producto y el precio son obligatorios')
      return
    }

    const newProduct: Product = {
      name: productName,
      desc: productDescription,
      price: productPrice, 
      cant: 0,
      tot: 0
    };

    props.onAddProduct(newProduct)
    setProductName('')
    setProductDescription('')
    setProductPrice(0)
    setError('')
  }

  return (
    <div className={styles.container}>
      <h2 className='h2M1'>Cargar Producto</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={productPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <button className={styles.button} onClick={handleAddProduct}>Agregar Producto</button>
    </div>
  );
}

export default ProductForm
