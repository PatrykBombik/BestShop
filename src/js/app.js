const products = document.querySelector('#products');
const orders = document.querySelector('#orders');
const packageSelector = document.querySelector('.select__input');
const packageList = document.querySelector('.select__dropdown');
const packageBasic = document.querySelector('li[data-value="basic"]');
const packageProfessional = document.querySelector('li[data-value="professional"]');
const packagePremium = document.querySelector('li[data-value="premium"]');
const accounting = document.querySelector('#accounting');
const terminal = document.querySelector('#terminal');
const productsSumLabel = document.querySelector('li[data-id="products"]');
const productSumCalc = document.querySelector('li[data-id="products"] .item__calc');
const productSumPrice = document.querySelector('li[data-id="products"] .item__price');
const ordersSumLabel = document.querySelector('li[data-id="orders"]');
const ordersSumCalc = document.querySelector('li[data-id="orders"] .item__calc');
const ordersSumPrice = document.querySelector('li[data-id="orders"] .item__price');
const packageSumLabel = document.querySelector('li[data-id="package"]');
const packageSumCalc = document.querySelector('li[data-id="package"] .item__calc');
const packageSumPrice = document.querySelector('li[data-id="package"] .item__price');
const accountingSumLabel = document.querySelector('li[data-id="accounting"]');
const accountingSumPrice = document.querySelector('li[data-id="accounting"] .item__price');
const terminalSumLabel = document.querySelector('li[data-id="terminal"]');
const terminalSumPrice = document.querySelector('li[data-id="terminal"] .item__price');
const totalPrice = document.querySelector('#total-price');
const totalPriceLabel = document.querySelector('#total-price .total__price');

let counterSum = [];

products.addEventListener('input',(e) => {
    const productPrice = Math.floor(e.target.value) * 0.5;
    const productCalc = Math.floor(e.target.value) + ' * $0.5 ';
    productsSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    productSumCalc.innerText = productCalc;
    productSumPrice.innerText = ' $' + productPrice;
    counterSum.push(productPrice);
})

orders.addEventListener('input',() =>{
    ordersSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';

})
packageSelector.addEventListener("click",() => {
    packageList.style.display = packageList.style.display === "none" ? "block" : "none";
})
window.addEventListener("click",(e) => {
    if (e.target !== packageSelector) {
        packageList.style.display = 'none';
    }
})
packageBasic.addEventListener('click',() => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';

})
packageProfessional.addEventListener('click',() => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';

})
packagePremium.addEventListener('click',() => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
})
accounting.addEventListener('change',() => {
    accountingSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';

})
terminal.addEventListener('change',() => {
    terminalSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';

})

totalPriceLabel.innerText = '$ ' + counterSum;