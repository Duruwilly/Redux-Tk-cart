import { useEffect } from "react";
import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { calculateTotals, getCartItems } from "./features/cart/CartSlice";
import { useDispatch, useSelector } from 'react-redux'
import Modal from "./component/Modal";

function App() {
  const dispatch = useDispatch()
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if(isLoading) {
    return (
      <div className="loading"><h1>loading...</h1></div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
