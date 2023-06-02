// Componente Product
import { useState } from "react";
import styles from "./styles.module.css";


type ProductProps = {
  name: string;
  description: string;
  price: number;
  cant: number;
  tot: number;
  onTotChange: (newTot: number) => void;
};

function Product(props: ProductProps) {
  const [cant, setCant] = useState(props.cant);
  const [tot, setTot] = useState(props.tot);
  const [price, setPrice] = useState(props.price);

  const handleTot = () => {
    const newTot = cant * price;
    setTot(newTot);
    props.onTotChange(newTot);
  }

  const handleIncrement = () => {
    setCant(cant + 1);
  };

  const handleDecrement = () => {
    if (cant > 0) {
      setCant(cant - 1);
    }
  };

  return (
    <div className={styles.card}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>${props.price}</p>
      <div className={styles.counter}>
        <button className={styles.button} onClick={handleDecrement}>-</button>
        <span>{cant}</span>
        <span>{tot}</span>
        <button className={styles.button} onClick={handleIncrement}>+</button>
      </div>
      <button className={styles.button} onClick={handleTot}>Agregar al carrito</button>
    </div>
  );
}

export default Product;
