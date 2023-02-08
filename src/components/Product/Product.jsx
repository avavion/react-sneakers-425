import { useContext } from "react";

import { CartContext } from "../../pages/Root";

import formatMoney from "../../utils/formatMoney";
import { HeartIcon, PlusIcon } from "../Icons/Icons";

const Product = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className="product">
            <div className="product__action">
                <button>
                    <HeartIcon size={18} />
                </button>
            </div>

            <img src={product.preview} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="product__footer">
                <div className="price">
                    <span className="text">Цена:</span>
                    <span className="value">{formatMoney(product.price)}</span>
                </div>


                {/* <button onClick={() => addToCart(product)}> */}
                <button onClick={addToCart.bind(this, product)}>
                    <PlusIcon size={18} />
                </button>
            </div>
        </div>
    )
}

export default Product;