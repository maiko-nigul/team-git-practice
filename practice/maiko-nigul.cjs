function getTotalQuantity(items) {
    if (!Array.isArray(items)) {
        return 0;
    }

    let total = 0;
    let i = 0;

    while (i < items.length) {
        const item = items[i];
        
        // Võtame kas 'quantity' või 'qty' väljad
        const qty = item?.quantity ?? item?.qty;

        if (typeof qty === 'number' && !Number.isNaN(qty)) {
            total += qty;
        }

        i++;
    }

    return total;
}

module.exports = { getTotalQuantity };