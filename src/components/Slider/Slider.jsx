import { useState } from "react";
import Slide from "./Slide/Slide";

import banner from '../../assets/slide.png'

const initialItemsState = [
    {
        id: 1,
        color: "#F4EFE9",
        title: "New Balance - new collection",
        banner: banner,
        button: {
            url: "/",
            text: "Предзаказать"
        }
    },
    {
        id: 2,
        color: "#FFF",
        title: "Nike Air Force 1 by avavion.",
        banner: "https://myreact.ru/wp-content/uploads/2021/06/1da3f6e9259d55e91816924f2dfe831f.png.webp",
        button: {
            url: "/",
            text: "Купить сейчас"
        }
    }
];

const Slider = () => {
    const [items, setItems] = useState(initialItemsState);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <section className="slider">
            <div className="wrapper">
                <div className="slides">
                    <Slide slide={items[currentIndex]} />
                </div>

                <div className="controls">
                    <button onClick={prev} className="prev">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={next} className="next">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slider;