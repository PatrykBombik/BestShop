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

let productPrice = 0.5;
let orderPrice = 0.5;
let packageBasicPrice = 0;
let packageProfessionalPrice = 25;
let packagePremiumPrice = 60;
let accountingPrice = 10;
let terminalPrice = 10;

function calculateTotalPrice() {
    let total = 0;

    if (productsSumLabel.style.display === 'block') {
        total += parseInt(products.value) * productPrice;
    }

    if (ordersSumLabel.style.display === 'block') {
        total += parseInt(orders.value) * orderPrice;
    }

    if (packageSumLabel.style.display === 'block') {
        if (packageSumCalc.innerText === 'Basic ') {
            total += packageBasicPrice;
        } else if (packageSumCalc.innerText === 'Professional ') {
            total += packageProfessionalPrice;
        } else if (packageSumCalc.innerText === 'Premium ') {
            total += packagePremiumPrice;
        }
    }

    if (accountingSumLabel.style.display === 'block') {
        total += accountingPrice;
    }

    if (terminalSumLabel.style.display === 'block') {
        total += terminalPrice;
    }

    totalPriceLabel.innerText = '$ ' + total;
}

products.addEventListener('input', (e) => {
    productsSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    productSumCalc.innerText = Math.floor(e.target.value) + ' * $0.5 ';
    productSumPrice.innerText = ' $' + Math.floor(e.target.value) * productPrice;
    calculateTotalPrice();
})

orders.addEventListener('input', (e) => {
    ordersSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    ordersSumCalc.innerText = Math.floor(e.target.value) + ' * $0.5 ';
    ordersSumPrice.innerText = ' $ ' + Math.floor(e.target.value) * orderPrice;
    calculateTotalPrice();
})

packageSelector.addEventListener("click", () => {
    packageList.style.display = packageList.style.display === "none" ? "block" : "none";
})
window.addEventListener("click", (e) => {
    if (e.target !== packageSelector) {
        packageList.style.display = 'none';
    }
})
packageBasic.addEventListener('click', () => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    packageSumCalc.innerText = 'Basic ';
    packageSumPrice.innerText = '$ ' + packageBasicPrice;
    calculateTotalPrice();
})

packageProfessional.addEventListener('click', () => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    packageSumCalc.innerText = 'Professional ';
    packageSumPrice.innerText = '$ ' + packageProfessionalPrice;
    calculateTotalPrice();
})

packagePremium.addEventListener('click', () => {
    packageSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    packageSumCalc.innerText = 'Premium ';
    packageSumPrice.innerText = '$ ' + packagePremiumPrice;
    calculateTotalPrice();
})

accounting.addEventListener('change', (e) => {
    accountingSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    accountingSumPrice.innerText = '$ ' + accountingPrice;
    calculateTotalPrice();
})

terminal.addEventListener('change', () => {
    terminalSumLabel.style.display = 'block';
    totalPrice.style.display = 'block';
    terminalSumPrice.innerText = '$ ' + terminalPrice;
    calculateTotalPrice();
})