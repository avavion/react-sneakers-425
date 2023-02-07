import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import CartModal from "../components/CartModal/CartModal";
import Header from "../components/Header/Header";
import PRODUCTS from "../data/products";

import useCart from "../hooks/useCart";

export const ModalContext = createContext(null);
export const CartContext = createContext(null);

const Root = () => {
    const [isModalActive, setIsModalActive] = useState(false);

    const cart = useCart(PRODUCTS);

    const toggleModal = setIsModalActive.bind(this, !isModalActive);

    return (
        <CartContext.Provider value={cart}>
            <ModalContext.Provider value={{ isModalActive, toggleModal }}>
                <div className="layout">
                    <Header />
                    <main>
                        <Outlet />
                    </main>

                    <CartModal />
                </div>
            </ModalContext.Provider>
        </CartContext.Provider>
    );
}

export default Root;