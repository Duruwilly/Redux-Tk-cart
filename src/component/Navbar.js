import { CartIcon} from '../icons'

// useSelector is basically a method that get access to our state/store.
import { useSelector } from 'react-redux'

const Navbar = () => {
 
 // here we are looking for the amount state in our store and we destructure it and used the useSelector to get access to the amount from the cart object in the state.
 const { amount } = useSelector((store) => store.cart)
 return (
  <nav>
   <div className="nav-center">
    <h3>redux toolkit</h3>
    <div className="nav-container">
     <CartIcon />
     <div className="amount-container">
      <p className="total-amount">{amount}</p>
     </div>
    </div>
   </div>
  </nav>
 )
}

export default Navbar


// how to access the initial state in this component from our slice.we use the useSelector from react-redux