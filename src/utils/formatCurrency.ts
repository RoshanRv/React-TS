const CURRENCY_FORMATTER = Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
})

export const formatCurrency = (price: number) => {
    return CURRENCY_FORMATTER.format(price)
}
