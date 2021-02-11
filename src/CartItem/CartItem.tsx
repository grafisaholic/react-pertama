 import Button from '@material-ui/core/Button'
 // @construct
 import {cartItemType} from '../App'
 // @style
 import {Wrapper} from './CartItem.style'

 type Props = {
   item: cartItemType;
   addToCart: (clicked: cartItemType) => void;
   removeFromCart: (id: number) => void;
 }

 const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) =>  (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          disableElevation
          variant="contained"
          size="small"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button> 
        <p>{item.amount}</p>
        <Button
          disableElevation
          variant="contained"
          size="small"
          onClick={() => addToCart(item)}
        >
          +
        </Button> 
      <img src={item.image} alt={item.title}/>
      </div>
    </div>
  </Wrapper>
 )

 export default CartItem