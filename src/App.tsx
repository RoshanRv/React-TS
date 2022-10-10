import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ShoppingCartProvider from "./context/ShoppingCartContext"

import Home from "./pages/Home"
import Store from "./pages/Store"

function App() {
    return (
        <ShoppingCartProvider>
            <div className="App my-10 mt-40">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </div>
        </ShoppingCartProvider>
    )
}

export default App
