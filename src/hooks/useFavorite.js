import { useState } from "react";

const useFavorite = (initialValue = [], key = "favorites") => {
    const [favorites, setFavorites] = useState(initialValue);

    const addToFavorite = (item) => {
        const isExist = favorites.findIndex((i) => i.id === item.id);

        if (isExist === -1) {
            setFavorites((prev) => [...prev, { ...item, is_favorite: true }]);
        }
    }

    const removeFavoriteItemById = (id) => {
        setFavorites((prev) => {
            prev = [...prev];

            prev = prev.filter((item) => item.id !== id);

            return prev;
        })
    }

    return {
        favorites,
        setFavorites,
        addToFavorite,
        removeFavoriteItemById
    }
}

export default useFavorite;