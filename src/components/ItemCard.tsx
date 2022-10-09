import React from "react"
import { formatCurrency } from "../utils/formatCurrency"

interface ItemCardProps {
    id: number
    name: string
    imgUrl: string
    price: number
}

const ItemCard = ({ id, name, imgUrl, price }: ItemCardProps) => {
    const quantity = 0

    return (
        <div className="shadow-lg w-max rounded-lg p-4 border-2 border-orange-400 text-white">
            <div className="w-[40rem] h-96 border-2 border-orange-200 rounded-lg">
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
                        <button className="text-white bg-orange-400 p-3 py-1 rounded-lg text-xl ">
                            -
                        </button>
                        <h1 className="text-3xl text-black">{quantity}</h1>
                        <button className="text-white bg-orange-400 p-3 py-1 rounded-lg text-xl ">
                            +
                        </button>
                    </div>
                    <button className="bg-red-500 py-2 rounded-md">
                        Remove
                    </button>
                </div>
            ) : (
                <button className="bg-orange-400 text-xl py-2 rounded-md w-full">
                    Add To Cart
                </button>
            )}
        </div>
    )
}

export default ItemCard
