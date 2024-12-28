import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      const cartListLength = cartList.reduce(
        (acc, item) => acc + item.quantity,
        0,
      )

      return (
        <div className="total-container">
          <h1 className="title">
            Order Total: <span className="price">Rs {total}/-</span>
          </h1>
          <p className="quantity">{cartListLength} items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
