import { useContext } from "react"
import { ItemContext } from "../Contexts/ItemsContextProvider"

export const useItemsContext = () => {
    const context = useContext(ItemContext)
    if(!context){
        throw new Error(
            "useItemsContext must be used within an ItemsContextProvider"
        );
    }
    return context;
}   