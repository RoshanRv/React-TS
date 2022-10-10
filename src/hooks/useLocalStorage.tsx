import { useEffect, useState } from "react"

const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
    const [value, setValue] = useState<T>(() => {
        const cartData = localStorage.getItem(key)
        if (cartData != null) return JSON.parse(cartData)

        if (typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}

export default useLocalStorage
