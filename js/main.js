let products = [
    ['Хлеб', 2, 20],
    ['Молоко', 1, 30],
    ['Масло', 2, 60],
    ['Сало', 1, 150],
];

let counterNumberExpensive = 0;
let counterNumberCheaper = 0;
let sumProd = 0;
let sumInBasket = 0;
let sumNumberProd = 0;
let middlePrice = 0;
let moreExpensProduct = products[0][2];
let moreExpensProductName, moreCheaperProductName;
let moreExpensProductNumber = products[0][1];
let moreCheaperProduct = products[0][2];
let moreCheaperProductNumber = products[0][1];

for (i = 0; i < products.length; i++) {
    let nameProduct = products[i][0];
    let numberProduct = products[i][1];
    let costProduct = products[i][2];

    sumProd += products[i][1];
    sumInBasket += products[i][1] * products[i][2];
    sumNumberProd += products[i][2];
    middlePrice = sumNumberProd / products.length;

    if (costProduct > 100) {
        counterNumberExpensive++;
    }

    if (costProduct < 50) {
        counterNumberCheaper++;
    }
    
    if (costProduct >= moreExpensProduct) {
        moreExpensProductName = nameProduct;
        moreExpensProduct = costProduct;
        moreExpensProductNumber = numberProduct;
    }
    if (costProduct <= moreCheaperProduct) {
        moreCheaperProductName = nameProduct;
        moreCheaperProduct = costProduct;
        moreCheaperProductNumber = numberProduct;
    }
}

for (i = 0; i < products.length; i++) {
    let nameProduct = products[i][0];
    let numberProduct = products[i][1];
    let costProduct = products[i][2];
    let totalCost = numberProduct * costProduct;

    if (costProduct === moreExpensProduct) {
        totalCost += ' +';
    }
    if (costProduct === moreCheaperProduct) {
        totalCost += ' -';
    }

    console.log(i + 1 + '.', nameProduct, numberProduct + 'x' + costProduct, ' = ' + totalCost);
}

console.log('***************************');
console.log('Всього товарів: ' + sumProd);
console.log('Сумма товарів в корзині: ' + sumInBasket);
console.log('***************************');
console.log('Середня ціна товару: ' + middlePrice);
console.log('Товарів дорожче 100 - ' + counterNumberExpensive);
console.log('Товарів дешевше 50 - ' + counterNumberCheaper);
console.log('***************************');
console.log('Самий дорогий товар - ' + moreExpensProductName + ' ' + moreExpensProduct + ' Купили шт: ' + moreExpensProductNumber);
console.log('Самий дешевий товар - ' + moreCheaperProductName + ' ' + moreCheaperProduct + ' Купили шт ' + moreCheaperProductNumber);

/*
ТЕХ Завдання!
1. Хлеб 2x20 = 40 -
2. Молоко 1x30 = 30
3. Масло 2x60 = 120
4. Сало 1x150 = 150 +
***************************
всего товаров 6
сумма товаров в корзине 340
***************************
средняя цена товара 65
Товаров дороже 100 - 1
Товаров дешевле 50 - 2
***************************
Самый дорогой товар - сало 150 купили 1
Самый дешевый товар - хлеб 20 купили 2
*/


