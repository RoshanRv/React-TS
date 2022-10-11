import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ShoppingCartProvider from "./context/ShoppingCartContext"

import Home from "./pages/Home"
import Select from "./pages/Select"
import Store from "./pages/Store"

function App() {
    return (
        <ShoppingCartProvider>
            <div className="App my-10 mt-24">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/select" element={<Select />} />
                </Routes>
            </div>
        </ShoppingCartProvider>
    )
}

export default App
