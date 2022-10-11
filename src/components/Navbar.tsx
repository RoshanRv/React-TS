import React from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import useShoppingCart from "../hooks/useShoppingCart"

const Navbar = () => {
    const { cartQuantity, openCart } = useShoppingCart()

    return (
        <header className="fixed top-0 w-full shadow-md  shadow-orange-300 bg-white">
            <nav className="p-4 md:px-10 flex items-center justify-between">
                <div className="flex items-center gap-x-6 text-lg">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/store"}>Store</Link>
                    <Link to={"/select"}>Select</Link>
                </div>
                <div className="relative">
                    <FaShoppingCart
                        onClick={openCart}
                        className="text-white w-10 h-10 p-2 rounded-lg  bg-orange-500 cursor-pointer"
                    />
                    <div className="absolute -bottom-2 text-xs -right-3 rounded-full bg-green-500 text-white p-1 px-2">
                        <h1>{cartQuantity}</h1>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
