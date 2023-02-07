import { CancelIcon } from "../Icons/Icons";
import formatMoney from "../../utils/formatMoney";
import { useContext } from "react";
import { CartContext } from "../../pages/Root";

const CartItem = ({ item }) => {

    const { removeCartItemById } = useContext(CartContext);

    return (
        <div className="cart-item">
            <img src={item.preview} alt={item.title} />

            <div className="cart-item__content">
                <h4>{item.title}</h4>
                <p className="price">{formatMoney(item.price)}</p>
            </div>

            <button onClick={removeCartItemById.bind(this, item.id)}>
                <CancelIcon />
            </button>
        </div>
    )
}

export default CartItem;