import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Store from "./pages/Store"

function App() {
    return (
        <div className="App mb-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </div>
    )
}

export default App
