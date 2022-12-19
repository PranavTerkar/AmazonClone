import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, diapatch] = useStateValue();
  return (
    <div className="subtotal">
    <p>Subtle : </p>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): {value}
            </p>
              This order contains a gift
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        // diaplayTpe={"Text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />
      <button>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
