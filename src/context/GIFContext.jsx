import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
    const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API);

    return <GifContext.Provider value={{ gf }}>{children}</GifContext.Provider>
}

export default GifProvider;