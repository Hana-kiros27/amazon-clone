import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import classes from "./cart.module.css";
import CurrencyFormat from "../../components/Currencyformat/Currencyformat";
import {Type} from '../../Utility/actiontype'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
  // const [(basket,user),dispatch]=useContext(DataContext)
  const [state, dispatch] = useContext(DataContext);
  const { basket } = state; // Destructure basket from the state
  const total = basket.reduce((amount, item) => {
    return item.price*item.amount + amount;
  },0);

const increment=(item)=>{
dispatch(
  {
    type:Type.ADD_TO_BASKET,item
  }
)
}

const decrement = (id) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id
  });
};



  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <br />
          <br />
          <hr />
          {basket?.length == 0 ? (
            <p>
              opps! no item in your cart 
              <Link to="/">Continue Shopping</Link>
            </p>
          ) : (
            basket?.map((item, i) => {
              return 
              <section className={classes.cart_product}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>;
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>subtotal({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
