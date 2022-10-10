import React, { createContext, useState, ReactNode } from "react"
import Cart from "../components/Cart"
import useLocalStorage from "../hooks/useLocalStorage"

interface ShoppingCartProp {
    children: ReactNode
}

interface CartItem {
    id: number
    quantity: number
}

interface ShoppingCartContext {
    cartQuantity: number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getItemQuantity: (id: number) => number
    openCart: () => void
    closeCart: () => void
    cartItems: CartItem[]
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

const ShoppingCartProvider = ({ children }: ShoppingCartProp) => {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )
    const [isCartOpen, setIsCartOpen] = useState(false)

    const cartQuantity = cartItems.reduce(
        (quantity: number, item) => quantity + item.quantity,
        0
    )

    const increaseItemQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems?.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseItemQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems?.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const closeCart = () => setIsCartOpen(false)

    const openCart = () => setIsCartOpen(true)

    return (
        <ShoppingCartContext.Provider
            value={{
                cartQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                getItemQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
            }}
        >
            {children}
            <Cart isCartOpen={isCartOpen} />
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider
