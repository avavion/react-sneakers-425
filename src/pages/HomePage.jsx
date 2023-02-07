import { useState } from "react";
import PRODUCTS from "../data/products";
import { SearchIcon } from "../components/Icons/Icons";
import Slider from "../components/Slider/Slider";
import Product from "../components/Product/Product";

const HomePage = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }


    return (
        <>
            <Slider />

            <section className="section">
                <header className="section-header">
                    <h2 className="section__title">
                        Все кроссовки
                    </h2>

                    <div className="search-box">
                        <div className="icon">
                            <SearchIcon size={18} />
                        </div>

                        <input
                            value={query}
                            onChange={(e) => onChangeQuery(e)}
                            type="text"
                            placeholder="Поиск..."
                        />
                    </div>
                </header>

                <div className="products">

                    {
                        filteredProducts.length ?
                            filteredProducts.map((product) => {
                                return (
                                    <Product key={product.id} product={product} />
                                );
                            })

                            :

                            <h2>По вашему запросу "{query}" ничего не найдено!</h2>
                    }

                </div>
            </section>
        </>
    )
}

export default HomePage;