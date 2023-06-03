import { useState } from "react"
import styles from "./styles.module.css"


type ProductProps = {
  name: string
  description: string
  price: number
  cant: number
  tot: number
  onTotChange: (newTot: number) => void
};

function Product(props: ProductProps) {
  const [cant, setCant] = useState(props.cant)
  const [tot, setTot] = useState(props.tot)
  const [price, setPrice] = useState(props.price)

  function handleTot() {
    const newTot = cant * price
    setTot(newTot)
    props.onTotChange(newTot)
  }

  function handleIncrement() {
    setCant(cant + 1)
  }

  function handleDecrement() {
    if (cant > 0) {
      setCant(cant - 1)
    }
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.h3Pr}>{props.name}</h3>
      <p className={styles.pPr}>{props.description}</p>
      <p className={styles.pPr}>${props.price}</p>
      <div className={styles.counter}>
        <button className={styles.button} onClick={handleDecrement}>-</button>
        <span>{cant}</span>
        <button className={styles.button} onClick={handleIncrement}>+</button>
      </div>
      <button className={styles.buttonAdd} onClick={handleTot}>Agregar al carrito</button>
    </div>
  )
}

export default Product
