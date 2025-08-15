export const calculateTotal = (itemBag) => {

    if (typeof itemBag == "undefined") return 0
    return itemBag.reduce((total, item) => {
        const fullPriceItems = item.qantitySolded * item.price;
        const halfPriceItems = item.qantityHalfSolded * (item.price / 2);
        return total + fullPriceItems + halfPriceItems;
    }, 0);
};

export const calculateTotalOfEvent = (item) => {

    const fullPriceItems = item.qantitySolded * item.price;
    const halfPriceItems = item.qantityHalfSolded * (item.price / 2);
    return parseFloat(fullPriceItems + halfPriceItems);

};