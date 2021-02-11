import {useState} from 'react'
import {useQuery} from 'react-query'
// @component
import Item from './Item/Item'
import Cart from './Cart/Cart'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SearchAppBar from './Component/Navbar/Navbar'
// @style
import { Wrapper, StyleButton} from './App.style'

// @cosntruct
export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<cartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()


const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as cartItemType[])
  const {data, isLoading, error} = useQuery<cartItemType[]>('products',getProducts)

  const getTotalItems = (items: cartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount , 0)

  const handleAddToCart = (clickedItem: cartItemType) => {
    setCartItems(prev => {
      // 1. is item already added in the cart ? 
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id
          ? {...item, amount: item.amount + 1}
          : item  
        )
      }

      // 2. firts add in cart
      return [...prev, {...clickedItem, amount: 1}]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack

          return [...ack, {...item, amount: item.amount - 1}]
        }else {
          return [...ack, item]
        }
      }, [] as cartItemType[])
    )
  };

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something is wrong ...</div>
  return (
    <Wrapper>
      <SearchAppBar />

      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false )} >
        <Cart 
          cartItem={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyleButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>  
          <AddShoppingCartIcon />
        </Badge>
      </StyleButton>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>

    </Wrapper>
  )
};

export default App