import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CartContext, ModalContext } from "../../pages/Root";
import formatMoney from "../../utils/formatMoney";

const CartButton = () => {
    const { toggleModal } = useContext(ModalContext);
    const { cartItems } = useContext(CartContext);

    const cartTotal = cartItems.reduce((prev, current) => prev += current.price, 0);

    return (
        <button onClick={toggleModal}>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>{formatMoney(cartTotal)}</span>
        </button>
    )
};

const Header = () => {
    return (
        <header className="header">

            <NavLink className="logo__link" to="/">
                <div className="logo">
                    <img src={logo} alt="React Sneakers Logo" />

                    <div>
                        <h1>React Sneakers</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </NavLink>

            <nav className="nav">
                <CartButton />
                <NavLink to="/favorites">
                    <i class="fa-solid fa-heart"></i>
                </NavLink>
                <NavLink to="/orders">
                    <i class="fa-solid fa-user"></i>
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;