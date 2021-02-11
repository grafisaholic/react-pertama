import CartItem from '../CartItem/CartItem'
// @style
import {Wrapper} from './Cart.style'
// @contruct
import {cartItemType} from '../App'

type Props = {
  cartItem: cartItemType[];
  addToCart: (clicked: cartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItem, addToCart, removeFromCart}) => {
  const calculateTotal = (items: cartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>Your Shooping Cart</h2>
      {cartItem.length === 0 ? <p>No Cart Item Here.</p> : null}
      {cartItem.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItem).toFixed(2)}</h2>      
    </Wrapper>
  )
}

export default Cart