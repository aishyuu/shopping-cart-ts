import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider( { children } : ShoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        const cartItem = cartItems.find(item => item.id === id)
        if(cartItem){
            return cartItem.quantity;
        } else {
            return 0;
        }
    }

    function increaseCartQuantity(id:number) {
        setCartItems(curItems => {
            if(curItems.find(item => item.id === id) == null) {
                return [...curItems, {id, quantity: 1}]
            } else {
                return curItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number) {
        setCartItems(curItems => {
            if(curItems.find(item => item.id === id)?.quantity === 1) {
                return curItems.filter(item => item.id !== id)
            } else {
                return curItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number) {
        setCartItems(curItems => {
            return curItems.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart 
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}