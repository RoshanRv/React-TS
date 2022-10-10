import React, { useState } from "react"
import storeItems from "../data/items.json"
import useShoppingCart from "../hooks/useShoppingCart"
import { formatCurrency } from "../utils/formatCurrency"

interface CartItemProp {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProp) => {
    const { removeFromCart } = useShoppingCart()
    const [item, setItem] = useState(storeItems.find((item) => item.id == id))
    if (item == null) return null

    return (
        <div className="flex items-center gap-x-4 border-2 border-orange-300 p-2 rounded-md shadow-lg">
            <div className="w-60 h-28">
                <img src={item?.imgUrl} alt="" className="w-full h-full" />
            </div>
            <div className="flex justify-between w-full">
                <div>
                    <div className="flex gap-x-2 items-center">
                        <h1>{item?.name}</h1>
                        <h1 className="text-gray-500 text-xs">
                            {"x " + quantity}
                        </h1>
                    </div>
                    <h1>{formatCurrency(item.price)}</h1>
                </div>
                <div className="flex items-center gap-x-4 ">
                    <h1 className="">
                        {formatCurrency(quantity * item.price)}
                    </h1>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="bg-red-600 text-white text-xl px-2 py-1 rounded-md"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
