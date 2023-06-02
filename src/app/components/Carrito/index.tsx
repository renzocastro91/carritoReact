import "./stylesCarrito.css"

type CartProps = {
  cartIcon: string;
  total: number;
}

function Cart(props: CartProps) {
  return (
    <div className={"cartContainer"}>
      <img src={props.cartIcon} alt="Carrito" className={"cartIcon"} />
      <span className={"cartTotal"}>Total: ${props.total}</span>
    </div>
  );
}

export default Cart;
