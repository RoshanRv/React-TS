import React, { useEffect, useState } from "react"
import { formatCurrency } from "../utils/formatCurrency"
import useShoppingCart from "../hooks/useShoppingCart"

interface ItemCardProps {
    id: number
    name: string
    imgUrl: string
    price: number
}

const ItemCard = ({ id, name, imgUrl, price }: ItemCardProps) => {
    const {
        decreaseItemQuantity,
        removeFromCart,
        increaseItemQuantity,
        getItemQuantity,
    } = useShoppingCart()

    const [quantity, setQuanity] = useState(getItemQuantity(id))

    useEffect(() => {
        setQuanity(() => getItemQuantity(id))
    }, [decreaseItemQuantity, removeFromCart, increaseItemQuantity])

    return (
        <div className="shadow-lg w-full max-w-[40rem] rounded-lg p-4 border-2 border-orange-400 text-white">
            <div className=" w-full h-96 border-2 border-orange-200 rounded-lg">
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="flex items-center text-2xl justify-between text-black my-4">
                <h1 className="">{name}</h1>
                <h1 className="">{formatCurrency(price)}</h1>
            </div>
            {quantity > 0 ? (
                <div className="flex flex-col gap-y-4">
                    <div className="flex gap-8 justify-center items-center">
                        <button
                            onClick={() => decreaseItemQuantity(id)}
                            className="text-white bg-orange-400 p-3 py-1 rounded-lg text-xl "
                        >
                            -
                        </button>
                        <h1 className="text-3xl text-black">{quantity}</h1>
                        <button
                            onClick={() => increaseItemQuantity(id)}
                            className="text-white bg-orange-400 p-3 py-1 rounded-lg text-xl "
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="bg-red-500 py-2 rounded-md"
                    >
                        Remove
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => increaseItemQuantity(id)}
                    className="bg-orange-400 text-xl py-2 rounded-md w-full"
                >
                    Add To Cart
                </button>
            )}
        </div>
    )
}

export default ItemCard
