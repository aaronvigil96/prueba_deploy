const form = document.querySelector('form');
const p__price_list = document.querySelector('.p__price_list');
const p__price_cash = document.querySelector('.p__price_cash');

form.addEventListener('submit', e => {
    e.preventDefault();
    const dolarCompanyValue = Number(e.target.dolarCompanyValue.value);
    const dolarProductValue = Number(e.target.dolarProductValue.value);
    const ivaValue = Number(e.target.ivaValue.value);
    const marginValue = Number(e.target.marginValue.value);
    const cashDiscountValue = Number(e.target.cashDiscountValue.value);
    let totalWithMargin = dolarProductValue + (dolarProductValue * marginValue/100);
    let totalWithIva = totalWithMargin * ivaValue/100;
    let total =  (totalWithMargin + totalWithIva) * dolarCompanyValue;
    p__price_list.textContent = `Precio lista: $${priceList(total).toFixed(2)}`
    p__price_cash.textContent = `Precio contado: $${cashPrice(total, cashDiscountValue).toFixed(2)}`
});

const priceList = total => {
    return total + (total * 15/100);
}

const cashPrice = (total, discount) => {
    return total - (total * discount/100);
}
