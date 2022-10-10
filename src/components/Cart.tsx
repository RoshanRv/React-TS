import React from "react"
import useShoppingCart from "../hooks/useShoppingCart"
import CartItem from "./CartItem"
import { GrClose } from "react-icons/gr"
import { formatCurrency } from "../utils/formatCurrency"
import storeItems from "../data/items.json"

interface CartProp {
    isCartOpen: boolean
}

const Cart = ({ isCartOpen }: CartProp) => {
    const { closeCart, cartItems } = useShoppingCart()

    return (
        <aside
            className={`bg-white p-4 border-l-2 border-orange-300 flex flex-col gap-y-6 fixed h-full top-0 z-50 transition-all ${
                isCartOpen ? "right-0" : "-right-full"
            }`}
        >
            <div className="flex items-center justify-between text-2xl">
                <h1>Cart</h1>
                <GrClose onClick={closeCart} className="cursor-pointer" />
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
                <h1 className="text-2xl p-2">No Items In The Cart</h1>
            )}
            {/* total    */}
            <div className="flex font-semibold justify-between text-2xl my-2">
                <h1>Total: </h1>
                <h1>
                    {formatCurrency(
                        cartItems.reduce(
                            (price, item) =>
                                price +
                                item.quantity *
                                    (storeItems.find(
                                        (store) => store.id == item.id
                                    )?.price || 0),
                            0
                        )
                    )}
                </h1>
            </div>
        </aside>
    )
}

export default Cart
