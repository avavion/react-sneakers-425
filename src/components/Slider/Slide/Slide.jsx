import { NavLink } from "react-router-dom";

const Slide = ({ slide }) => {
    return (
        <div style={{
            background: slide.color
        }} className="slide">
            <div className="part">
                <h2>{slide.title}</h2>

                <NavLink className="button button--xl" to={slide.button.url}>
                    {slide.button.text}
                </NavLink>
            </div>

            <img
                src={slide.banner}
                alt={slide.title}
                height={400}
                style={{
                    maxHeight: 400
                }}
            />
        </div>
    );
}

export default Slide;