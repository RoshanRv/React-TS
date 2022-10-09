import React from "react"
import ItemCard from "../components/ItemCard"
import storeItems from "../data/items.json"

const Store = () => {
    return (
        <main>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center mt-20">
                {storeItems.map((item) => {
                    return <ItemCard key={item.id} {...item} />
                })}
            </div>
        </main>
    )
}

export default Store
