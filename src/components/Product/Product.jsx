import formatMoney from "../../utils/formatMoney";
import { HeartIcon, PlusIcon } from "../Icons/Icons";

const Product = ({ product }) => {
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

                <button>
                    <PlusIcon size={18} />
                </button>
            </div>
        </div>
    )
}

export default Product;