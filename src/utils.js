export const currencyFormatter = new Intl.NumberFormat(undefined, {  //sets to users locale
    currency: 'usd',
    style: 'currency',
    minimumFractionDigits: 0,
})